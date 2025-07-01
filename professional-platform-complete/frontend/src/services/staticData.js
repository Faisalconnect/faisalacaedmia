// Static Data Service for Demo/Offline Mode
// This file provides demo data when the backend is not available
// Perfect for static hosting on InfinityFree or other platforms

export const staticContent = [
  {
    _id: '1',
    title: 'Welcome to Our Professional Platform',
    slug: 'welcome-to-our-platform',
    excerpt: 'Discover our comprehensive business solutions designed to drive growth and success for your organization.',
    content: `
      <p>We are excited to welcome you to our professional platform, where innovation meets excellence. Our comprehensive suite of business solutions is designed to help organizations of all sizes achieve their goals and drive sustainable growth.</p>
      
      <h3>What We Offer</h3>
      <p>Our platform provides cutting-edge solutions including strategic consulting, technology implementation, digital transformation services, and performance optimization. We work closely with our clients to understand their unique challenges and deliver tailored solutions that exceed expectations.</p>
      
      <h3>Our Commitment</h3>
      <p>We are committed to delivering exceptional value through innovative approaches, expert guidance, and unwavering dedication to client success. Our team of experienced professionals brings deep industry knowledge and technical expertise to every project.</p>
      
      <p>Contact us today to learn how we can help transform your business and achieve remarkable results.</p>
    `,
    category: 'Business',
    author: 'Professional Team',
    featuredImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop',
    tags: ['business', 'solutions', 'growth'],
    createdAt: new Date('2024-01-15').toISOString(),
    updatedAt: new Date('2024-01-15').toISOString()
  },
  {
    _id: '2',
    title: 'Digital Transformation in Modern Business',
    slug: 'digital-transformation-modern-business',
    excerpt: 'Learn how digital transformation is reshaping industries and how your business can leverage technology for competitive advantage.',
    content: `
      <p>Digital transformation has become a critical imperative for businesses across all industries. As technology continues to evolve at an unprecedented pace, organizations must adapt and innovate to remain competitive in today's digital-first world.</p>
      
      <h3>The Digital Revolution</h3>
      <p>From artificial intelligence and machine learning to cloud computing and IoT, emerging technologies are fundamentally changing how businesses operate, serve customers, and create value. Companies that embrace this transformation are positioning themselves for long-term success.</p>
      
      <h3>Key Areas of Focus</h3>
      <ul>
        <li>Process automation and optimization</li>
        <li>Customer experience enhancement</li>
        <li>Data-driven decision making</li>
        <li>Agile and flexible operations</li>
        <li>Digital workforce enablement</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>Successful digital transformation requires a strategic approach, strong leadership commitment, and a clear roadmap. Our experts can help you navigate this journey and achieve measurable results.</p>
    `,
    category: 'Technology',
    author: 'Digital Strategy Team',
    featuredImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop',
    tags: ['digital transformation', 'technology', 'innovation'],
    createdAt: new Date('2024-01-10').toISOString(),
    updatedAt: new Date('2024-01-10').toISOString()
  },
  {
    _id: '3',
    title: 'Strategic Planning for Business Growth',
    slug: 'strategic-planning-business-growth',
    excerpt: 'Effective strategic planning is the foundation of sustainable business growth. Discover proven methodologies and best practices.',
    content: `
      <p>Strategic planning is the cornerstone of successful business growth. It provides direction, aligns resources, and enables organizations to make informed decisions that drive long-term success.</p>
      
      <h3>The Planning Process</h3>
      <p>Our strategic planning methodology encompasses market analysis, competitive assessment, goal setting, and action planning. We work with leadership teams to develop comprehensive strategies that are both ambitious and achievable.</p>
      
      <h3>Key Components</h3>
      <ul>
        <li>Vision and mission alignment</li>
        <li>Market opportunity analysis</li>
        <li>Competitive positioning</li>
        <li>Resource allocation</li>
        <li>Performance metrics and KPIs</li>
      </ul>
      
      <h3>Implementation Excellence</h3>
      <p>A great strategy is only as good as its execution. We provide ongoing support to ensure your strategic initiatives are implemented effectively and deliver the expected results.</p>
      
      <p>Partner with us to develop and execute a winning strategy for your business.</p>
    `,
    category: 'Strategy',
    author: 'Strategy Consultants',
    featuredImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop',
    tags: ['strategy', 'planning', 'growth'],
    createdAt: new Date('2024-01-05').toISOString(),
    updatedAt: new Date('2024-01-05').toISOString()
  },
  {
    _id: '4',
    title: 'Customer Experience Excellence',
    slug: 'customer-experience-excellence',
    excerpt: 'Delivering exceptional customer experiences is key to business success. Learn how to create memorable interactions.',
    content: `
      <p>In today's competitive marketplace, customer experience has become a primary differentiator. Organizations that prioritize customer-centricity consistently outperform their peers and build lasting competitive advantages.</p>
      
      <h3>Understanding Your Customers</h3>
      <p>Exceptional customer experience starts with deep understanding of customer needs, preferences, and pain points. Through research, analytics, and feedback mechanisms, we help you gain valuable insights into your customer base.</p>
      
      <h3>Designing Better Experiences</h3>
      <p>Our experience design approach focuses on creating seamless, intuitive, and delightful interactions across all touchpoints. From initial awareness to post-purchase support, every interaction matters.</p>
      
      <h3>Measuring Success</h3>
      <p>We implement comprehensive measurement frameworks to track customer satisfaction, loyalty, and advocacy. These insights drive continuous improvement and innovation in your customer experience strategy.</p>
    `,
    category: 'Customer Experience',
    author: 'CX Design Team',
    featuredImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
    tags: ['customer experience', 'design', 'satisfaction'],
    createdAt: new Date('2024-01-01').toISOString(),
    updatedAt: new Date('2024-01-01').toISOString()
  },
  {
    _id: '5',
    title: 'Innovation and Future Trends',
    slug: 'innovation-future-trends',
    excerpt: 'Stay ahead of the curve with insights into emerging trends and innovation opportunities in your industry.',
    content: `
      <p>Innovation is the engine of growth and competitive advantage. By understanding emerging trends and fostering a culture of innovation, organizations can position themselves for future success.</p>
      
      <h3>Emerging Technologies</h3>
      <p>From AI and blockchain to quantum computing and biotechnology, new technologies are creating unprecedented opportunities for innovation and disruption across industries.</p>
      
      <h3>Innovation Framework</h3>
      <p>Our innovation methodology helps organizations systematically identify opportunities, evaluate potential, and implement breakthrough solutions that drive meaningful impact.</p>
      
      <h3>Future-Ready Organizations</h3>
      <p>Building future-ready capabilities requires investment in people, processes, and technology. We help organizations develop the agility and resilience needed to thrive in an uncertain world.</p>
    `,
    category: 'Innovation',
    author: 'Innovation Lab',
    featuredImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop',
    tags: ['innovation', 'trends', 'future'],
    createdAt: new Date('2023-12-28').toISOString(),
    updatedAt: new Date('2023-12-28').toISOString()
  }
];

export const staticStats = {
  totalUsers: 1247,
  totalContent: 45,
  totalContacts: 89,
  totalFiles: 156,
  recentActivity: [
    { 
      _id: '1',
      action: 'New contact form submission received',
      details: 'Sarah Johnson submitted an inquiry about digital transformation services',
      time: '2 minutes ago',
      type: 'contact'
    },
    { 
      _id: '2',
      action: 'Content published',
      details: 'Article "Customer Experience Excellence" was published',
      time: '1 hour ago',
      type: 'content'
    },
    { 
      _id: '3',
      action: 'File uploaded',
      details: 'New presentation slides added to resources',
      time: '3 hours ago',
      type: 'file'
    },
    { 
      _id: '4',
      action: 'User registration',
      details: 'Michael Chen registered as a new user',
      time: '5 hours ago',
      type: 'user'
    },
    { 
      _id: '5',
      action: 'Contact form submission',
      details: 'Emily Rodriguez inquired about strategic planning services',
      time: '1 day ago',
      type: 'contact'
    }
  ]
};

export const staticUsers = [
  {
    _id: '1',
    name: 'Admin User',
    email: 'admin@professional-platform.com',
    role: 'admin',
    status: 'active',
    lastLogin: new Date('2024-01-15T10:30:00Z').toISOString(),
    createdAt: new Date('2023-12-01').toISOString()
  },
  {
    _id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@techcorp.com',
    role: 'user',
    status: 'active',
    lastLogin: new Date('2024-01-14T15:45:00Z').toISOString(),
    createdAt: new Date('2024-01-10').toISOString()
  },
  {
    _id: '3',
    name: 'Michael Chen',
    email: 'michael.chen@innovation-labs.com',
    role: 'user',
    status: 'active',
    lastLogin: new Date('2024-01-13T09:20:00Z').toISOString(),
    createdAt: new Date('2024-01-08').toISOString()
  },
  {
    _id: '4',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@global-solutions.com',
    role: 'user',
    status: 'active',
    lastLogin: new Date('2024-01-12T14:15:00Z').toISOString(),
    createdAt: new Date('2024-01-05').toISOString()
  }
];

export const staticContacts = [
  {
    _id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    subject: 'Digital Transformation Inquiry',
    message: 'I am interested in learning more about your digital transformation services for our manufacturing company. We have about 500 employees and are looking to modernize our operations.',
    status: 'new',
    createdAt: new Date('2024-01-15T08:30:00Z').toISOString()
  },
  {
    _id: '2',
    name: 'Lisa Davis',
    email: 'lisa.davis@startup.io',
    subject: 'Strategic Planning Services',
    message: 'Our startup is growing rapidly and we need help with strategic planning for the next phase of growth. Could we schedule a consultation?',
    status: 'responded',
    createdAt: new Date('2024-01-14T16:45:00Z').toISOString()
  },
  {
    _id: '3',
    name: 'Robert Wilson',
    email: 'robert.wilson@enterprise.com',
    subject: 'Customer Experience Consulting',
    message: 'We are looking to improve our customer experience across all touchpoints. What does your process look like and what are your typical engagement timelines?',
    status: 'in-progress',
    createdAt: new Date('2024-01-13T11:20:00Z').toISOString()
  },
  {
    _id: '4',
    name: 'Jennifer Brown',
    email: 'jennifer.brown@retail-corp.com',
    subject: 'Innovation Workshop',
    message: 'We would like to organize an innovation workshop for our leadership team. Do you offer custom workshops and what would be the format?',
    status: 'resolved',
    createdAt: new Date('2024-01-12T09:15:00Z').toISOString()
  }
];

export const staticFiles = [
  {
    _id: '1',
    filename: 'Digital_Transformation_Guide.pdf',
    originalName: 'Digital Transformation Guide.pdf',
    mimetype: 'application/pdf',
    size: 2847563,
    category: 'resource',
    description: 'Comprehensive guide to digital transformation strategies',
    uploadedBy: 'admin',
    createdAt: new Date('2024-01-15T10:00:00Z').toISOString()
  },
  {
    _id: '2',
    filename: 'Strategic_Planning_Template.xlsx',
    originalName: 'Strategic Planning Template.xlsx',
    mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    size: 156789,
    category: 'template',
    description: 'Strategic planning template and framework',
    uploadedBy: 'admin',
    createdAt: new Date('2024-01-14T14:30:00Z').toISOString()
  },
  {
    _id: '3',
    filename: 'Customer_Journey_Map.png',
    originalName: 'Customer Journey Map.png',
    mimetype: 'image/png',
    size: 894567,
    category: 'visual',
    description: 'Customer journey mapping template',
    uploadedBy: 'admin',
    createdAt: new Date('2024-01-13T09:45:00Z').toISOString()
  }
];

// Helper functions for static data
export const getStaticContentBySlug = (slug) => {
  return staticContent.find(item => item.slug === slug);
};

export const getStaticContentByCategory = (category) => {
  return staticContent.filter(item => item.category.toLowerCase() === category.toLowerCase());
};

export const getStaticContentPaginated = (page = 1, limit = 10) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const items = staticContent.slice(startIndex, endIndex);
  
  return {
    content: items,
    currentPage: page,
    totalPages: Math.ceil(staticContent.length / limit),
    totalItems: staticContent.length,
    hasNext: endIndex < staticContent.length,
    hasPrev: page > 1
  };
};

export const searchStaticContent = (query) => {
  const searchTerm = query.toLowerCase();
  return staticContent.filter(item => 
    item.title.toLowerCase().includes(searchTerm) ||
    item.excerpt.toLowerCase().includes(searchTerm) ||
    item.content.toLowerCase().includes(searchTerm) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

// Static data service for when backend is not available
export const staticDataService = {
  // Content operations
  getContent: (options = {}) => {
    const { page = 1, limit = 10, category, search } = options;
    
    let filteredContent = staticContent;
    
    if (category) {
      filteredContent = getStaticContentByCategory(category);
    }
    
    if (search) {
      filteredContent = searchStaticContent(search);
    }
    
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const items = filteredContent.slice(startIndex, endIndex);
    
    return Promise.resolve({
      data: {
        content: items,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(filteredContent.length / limit),
          totalItems: filteredContent.length,
          hasNext: endIndex < filteredContent.length,
          hasPrev: page > 1
        }
      }
    });
  },
  
  getContentBySlug: (slug) => {
    const content = getStaticContentBySlug(slug);
    return Promise.resolve({ data: content });
  },
  
  // Admin operations
  getDashboardStats: () => {
    return Promise.resolve({ data: staticStats });
  },
  
  getUsers: () => {
    return Promise.resolve({ data: staticUsers });
  },
  
  getContacts: () => {
    return Promise.resolve({ data: staticContacts });
  },
  
  getFiles: () => {
    return Promise.resolve({ data: staticFiles });
  },
  
  // Mock contact form submission
  submitContact: (formData) => {
    console.log('Contact form submitted (demo mode):', formData);
    return Promise.resolve({ 
      data: { 
        message: 'Thank you for your message! We will get back to you soon.',
        id: Date.now().toString()
      } 
    });
  }
};

export default staticDataService;