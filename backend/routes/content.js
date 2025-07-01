const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Content = require('../models/Content');
const { authenticateToken, requireAdmin, optionalAuth } = require('../middleware/auth');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx|txt/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  }
});

// Get all content with filtering and pagination
router.get('/', optionalAuth, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const type = req.query.type;
    const status = req.query.status || 'published';
    const search = req.query.search || '';
    const skip = (page - 1) * limit;

    let query = {};

    // Only show published content to non-admin users
    if (!req.user || req.user.role !== 'admin') {
      query.status = 'published';
    } else if (status) {
      query.status = status;
    }

    if (type) {
      query.type = type;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ];
    }

    const [content, total] = await Promise.all([
      Content.find(query)
        .populate('author', 'username profile.firstName profile.lastName')
        .sort({ publishedAt: -1, createdAt: -1 })
        .skip(skip)
        .limit(limit),
      Content.countDocuments(query)
    ]);

    res.json({
      content,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalItems: total,
        hasNext: page < Math.ceil(total / limit),
        hasPrev: page > 1
      }
    });
  } catch (error) {
    console.error('Content fetch error:', error);
    res.status(500).json({ message: 'Error fetching content' });
  }
});

// Get single content by ID or slug
router.get('/:identifier', optionalAuth, async (req, res) => {
  try {
    const { identifier } = req.params;
    
    // Try to find by ID first, then by slug
    let content = await Content.findById(identifier).populate('author', 'username profile.firstName profile.lastName');
    
    if (!content) {
      content = await Content.findOne({ slug: identifier }).populate('author', 'username profile.firstName profile.lastName');
    }

    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }

    // Only allow published content for non-admin users
    if (content.status !== 'published' && (!req.user || req.user.role !== 'admin')) {
      return res.status(404).json({ message: 'Content not found' });
    }

    // Increment view count
    content.viewCount += 1;
    await content.save();

    res.json({ content });
  } catch (error) {
    console.error('Content fetch error:', error);
    res.status(500).json({ message: 'Error fetching content' });
  }
});

// Create new content (admin only)
router.post('/', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const {
      type,
      title,
      slug,
      content,
      excerpt,
      featuredImage,
      tags,
      category,
      status,
      seo
    } = req.body;

    // Validate required fields
    if (!type || !title || !content) {
      return res.status(400).json({ 
        message: 'Type, title, and content are required' 
      });
    }

    const newContent = new Content({
      type,
      title,
      slug: slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      content,
      excerpt,
      featuredImage,
      tags: tags || [],
      category,
      status: status || 'draft',
      author: req.user._id,
      seo
    });

    await newContent.save();
    await newContent.populate('author', 'username profile.firstName profile.lastName');

    res.status(201).json({
      message: 'Content created successfully',
      content: newContent
    });
  } catch (error) {
    console.error('Content creation error:', error);
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Content with this slug already exists' });
    }
    res.status(500).json({ message: 'Error creating content' });
  }
});

// Update content (admin only)
router.put('/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }

    const updateFields = [
      'type', 'title', 'slug', 'content', 'excerpt', 'featuredImage',
      'tags', 'category', 'status', 'seo'
    ];

    updateFields.forEach(field => {
      if (req.body[field] !== undefined) {
        content[field] = req.body[field];
      }
    });

    await content.save();
    await content.populate('author', 'username profile.firstName profile.lastName');

    res.json({
      message: 'Content updated successfully',
      content
    });
  } catch (error) {
    console.error('Content update error:', error);
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Content with this slug already exists' });
    }
    res.status(500).json({ message: 'Error updating content' });
  }
});

// Delete content (admin only)
router.delete('/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const content = await Content.findByIdAndDelete(req.params.id);
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }

    res.json({ message: 'Content deleted successfully' });
  } catch (error) {
    console.error('Content delete error:', error);
    res.status(500).json({ message: 'Error deleting content' });
  }
});

// Upload file (admin only)
router.post('/upload', authenticateToken, requireAdmin, upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const fileUrl = `/uploads/${req.file.filename}`;
    
    res.json({
      message: 'File uploaded successfully',
      file: {
        filename: req.file.filename,
        originalName: req.file.originalname,
        size: req.file.size,
        url: fileUrl
      }
    });
  } catch (error) {
    console.error('File upload error:', error);
    res.status(500).json({ message: 'Error uploading file' });
  }
});

// Get file list (admin only)
router.get('/files/list', authenticateToken, requireAdmin, (req, res) => {
  try {
    const uploadsDir = path.join(__dirname, '../uploads');
    
    if (!fs.existsSync(uploadsDir)) {
      return res.json({ files: [] });
    }

    const files = fs.readdirSync(uploadsDir).map(filename => {
      const filePath = path.join(uploadsDir, filename);
      const stats = fs.statSync(filePath);
      
      return {
        filename,
        size: stats.size,
        createdAt: stats.birthtime,
        url: `/uploads/${filename}`
      };
    });

    res.json({ files: files.sort((a, b) => b.createdAt - a.createdAt) });
  } catch (error) {
    console.error('File list error:', error);
    res.status(500).json({ message: 'Error fetching file list' });
  }
});

// Delete file (admin only)
router.delete('/files/:filename', authenticateToken, requireAdmin, (req, res) => {
  try {
    const { filename } = req.params;
    const filePath = path.join(__dirname, '../uploads', filename);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: 'File not found' });
    }

    fs.unlinkSync(filePath);
    res.json({ message: 'File deleted successfully' });
  } catch (error) {
    console.error('File delete error:', error);
    res.status(500).json({ message: 'Error deleting file' });
  }
});

module.exports = router;