const express = require('express');
const User = require('../models/User');
const Content = require('../models/Content');
const Contact = require('../models/Contact');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// Apply authentication and admin check to all routes
router.use(authenticateToken);
router.use(requireAdmin);

// Dashboard statistics
router.get('/dashboard', async (req, res) => {
  try {
    const [
      totalUsers,
      totalContent,
      totalContacts,
      newContacts,
      publishedContent,
      recentUsers
    ] = await Promise.all([
      User.countDocuments(),
      Content.countDocuments(),
      Contact.countDocuments(),
      Contact.countDocuments({ status: 'new' }),
      Content.countDocuments({ status: 'published' }),
      User.find().sort({ createdAt: -1 }).limit(5).select('-password')
    ]);

    res.json({
      stats: {
        totalUsers,
        totalContent,
        totalContacts,
        newContacts,
        publishedContent
      },
      recentUsers
    });
  } catch (error) {
    console.error('Dashboard error:', error);
    res.status(500).json({ message: 'Error fetching dashboard data' });
  }
});

// Get all users with pagination
router.get('/users', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || '';
    const skip = (page - 1) * limit;

    const query = search
      ? {
          $or: [
            { username: { $regex: search, $options: 'i' } },
            { email: { $regex: search, $options: 'i' } },
            { 'profile.firstName': { $regex: search, $options: 'i' } },
            { 'profile.lastName': { $regex: search, $options: 'i' } }
          ]
        }
      : {};

    const [users, total] = await Promise.all([
      User.find(query)
        .select('-password')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      User.countDocuments(query)
    ]);

    res.json({
      users,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalUsers: total,
        hasNext: page < Math.ceil(total / limit),
        hasPrev: page > 1
      }
    });
  } catch (error) {
    console.error('Users fetch error:', error);
    res.status(500).json({ message: 'Error fetching users' });
  }
});

// Get single user
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ user });
  } catch (error) {
    console.error('User fetch error:', error);
    res.status(500).json({ message: 'Error fetching user' });
  }
});

// Update user
router.put('/users/:id', async (req, res) => {
  try {
    const { username, email, role, isActive, profile } = req.body;
    
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Prevent admin from deactivating themselves
    if (req.params.id === req.user._id.toString() && isActive === false) {
      return res.status(400).json({ message: 'Cannot deactivate your own account' });
    }

    // Update fields
    if (username) user.username = username;
    if (email) user.email = email;
    if (role) user.role = role;
    if (typeof isActive === 'boolean') user.isActive = isActive;
    if (profile) {
      user.profile = { ...user.profile, ...profile };
    }

    await user.save();

    res.json({
      message: 'User updated successfully',
      user
    });
  } catch (error) {
    console.error('User update error:', error);
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }
    res.status(500).json({ message: 'Error updating user' });
  }
});

// Delete user
router.delete('/users/:id', async (req, res) => {
  try {
    // Prevent admin from deleting themselves
    if (req.params.id === req.user._id.toString()) {
      return res.status(400).json({ message: 'Cannot delete your own account' });
    }

    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('User delete error:', error);
    res.status(500).json({ message: 'Error deleting user' });
  }
});

// Toggle user status (activate/deactivate)
router.patch('/users/:id/toggle-status', async (req, res) => {
  try {
    // Prevent admin from deactivating themselves
    if (req.params.id === req.user._id.toString()) {
      return res.status(400).json({ message: 'Cannot change your own status' });
    }

    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.isActive = !user.isActive;
    await user.save();

    res.json({
      message: `User ${user.isActive ? 'activated' : 'deactivated'} successfully`,
      user
    });
  } catch (error) {
    console.error('User status toggle error:', error);
    res.status(500).json({ message: 'Error updating user status' });
  }
});

// Get system logs/activities (placeholder for future implementation)
router.get('/logs', async (req, res) => {
  try {
    // This is a placeholder for system logs
    // In a real application, you might want to implement proper logging
    const recentActivities = [
      {
        action: 'User login',
        user: 'admin@example.com',
        timestamp: new Date(),
        details: 'Admin logged in successfully'
      },
      {
        action: 'Content created',
        user: 'admin@example.com',
        timestamp: new Date(Date.now() - 3600000),
        details: 'New blog post created'
      }
    ];

    res.json({ activities: recentActivities });
  } catch (error) {
    console.error('Logs fetch error:', error);
    res.status(500).json({ message: 'Error fetching logs' });
  }
});

module.exports = router;