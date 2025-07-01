const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const Content = require('../models/Content');

// Load environment variables
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/webplatform';

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Clear existing data (optional - comment out if you want to keep existing data)
    // await User.deleteMany({});
    // await Content.deleteMany({});
    // console.log('Cleared existing data');

    // Create admin user
    const adminExists = await User.findOne({ email: process.env.ADMIN_EMAIL || 'admin@example.com' });
    
    if (!adminExists) {
      const admin = new User({
        username: process.env.ADMIN_USERNAME || 'admin',
        email: process.env.ADMIN_EMAIL || 'admin@example.com',
        password: process.env.ADMIN_PASSWORD || 'admin123',
        role: 'admin',
        profile: {
          firstName: 'Admin',
          lastName: 'User'
        }
      });

      await admin.save();
      console.log('Admin user created successfully');
      console.log(`Email: ${admin.email}`);
      console.log(`Password: ${process.env.ADMIN_PASSWORD || 'admin123'}`);
    } else {
      console.log('Admin user already exists');
    }

    // Create sample content
    const contentExists = await Content.findOne({ type: 'page', slug: 'home' });
    
    if (!contentExists) {
      const admin = await User.findOne({ role: 'admin' });
      
      const sampleContent = [
        {
          type: 'page',
          title: 'Welcome to Our Platform',
          slug: 'home',
          content: `
            <h1>Welcome to Our Professional Platform</h1>
            <p>We provide exceptional services and solutions for your business needs. Our team is dedicated to delivering high-quality results that exceed expectations.</p>
            
            <h2>Why Choose Us?</h2>
            <ul>
              <li>Professional expertise and experience</li>
              <li>Customized solutions for your needs</li>
              <li>Reliable support and maintenance</li>
              <li>Competitive pricing and transparent communication</li>
            </ul>
            
            <p>Contact us today to learn more about how we can help your business grow.</p>
          `,
          excerpt: 'Welcome to our professional platform. We provide exceptional services and solutions for your business needs.',
          status: 'published',
          author: admin._id,
          seo: {
            metaTitle: 'Welcome to Our Platform - Professional Services',
            metaDescription: 'Professional platform providing exceptional services and solutions for business needs. Contact us for customized solutions.',
            keywords: ['professional', 'services', 'solutions', 'business']
          }
        },
        {
          type: 'page',
          title: 'About Us',
          slug: 'about',
          content: `
            <h1>About Our Company</h1>
            <p>We are a dedicated team of professionals committed to delivering excellence in everything we do. With years of experience in the industry, we have built a reputation for quality, reliability, and innovation.</p>
            
            <h2>Our Mission</h2>
            <p>To provide outstanding services that help our clients achieve their goals while maintaining the highest standards of professionalism and integrity.</p>
            
            <h2>Our Values</h2>
            <ul>
              <li><strong>Quality:</strong> We never compromise on the quality of our work</li>
              <li><strong>Innovation:</strong> We stay ahead of industry trends and technologies</li>
              <li><strong>Integrity:</strong> We conduct business with honesty and transparency</li>
              <li><strong>Customer Focus:</strong> Our clients' success is our priority</li>
            </ul>
          `,
          excerpt: 'Learn about our company, mission, and values. We are dedicated professionals committed to delivering excellence.',
          status: 'published',
          author: admin._id,
          seo: {
            metaTitle: 'About Us - Our Mission and Values',
            metaDescription: 'Learn about our company, dedicated team, mission, and values. Professional services with integrity and innovation.',
            keywords: ['about', 'company', 'mission', 'values', 'team']
          }
        },
        {
          type: 'service',
          title: 'Web Development',
          slug: 'web-development',
          content: `
            <h1>Professional Web Development Services</h1>
            <p>We create modern, responsive websites that engage your audience and drive business growth. Our web development services include:</p>
            
            <ul>
              <li>Custom website design and development</li>
              <li>Responsive mobile-friendly layouts</li>
              <li>E-commerce solutions</li>
              <li>Content management systems</li>
              <li>Website maintenance and support</li>
            </ul>
            
            <h2>Technologies We Use</h2>
            <p>We work with the latest technologies to ensure your website is fast, secure, and scalable:</p>
            <ul>
              <li>React, Angular, Vue.js</li>
              <li>Node.js, Python, PHP</li>
              <li>MongoDB, PostgreSQL, MySQL</li>
              <li>AWS, Google Cloud, Azure</li>
            </ul>
          `,
          excerpt: 'Professional web development services including custom design, responsive layouts, and modern technologies.',
          status: 'published',
          author: admin._id,
          category: 'Technology',
          tags: ['web development', 'responsive design', 'modern technology'],
          seo: {
            metaTitle: 'Web Development Services - Modern Responsive Websites',
            metaDescription: 'Professional web development services. Custom responsive websites using modern technologies. E-commerce and CMS solutions.',
            keywords: ['web development', 'responsive', 'modern', 'technology', 'custom']
          }
        },
        {
          type: 'blog',
          title: 'The Future of Web Development',
          slug: 'future-of-web-development',
          content: `
            <h1>The Future of Web Development: Trends to Watch</h1>
            <p>Web development is constantly evolving, with new technologies and methodologies emerging regularly. Here are some key trends shaping the future:</p>
            
            <h2>1. Progressive Web Apps (PWAs)</h2>
            <p>PWAs combine the best of web and mobile apps, offering offline functionality, push notifications, and app-like experiences through the browser.</p>
            
            <h2>2. Artificial Intelligence Integration</h2>
            <p>AI is becoming more integrated into web development, from chatbots to personalized user experiences and automated testing.</p>
            
            <h2>3. Voice User Interfaces</h2>
            <p>With the rise of voice assistants, optimizing websites for voice search and implementing voice controls is becoming crucial.</p>
            
            <h2>4. Serverless Architecture</h2>
            <p>Serverless computing allows developers to focus on code without managing infrastructure, leading to more efficient and scalable applications.</p>
            
            <p>Staying ahead of these trends is essential for creating modern, competitive web applications.</p>
          `,
          excerpt: 'Explore the key trends shaping the future of web development, from PWAs to AI integration and serverless architecture.',
          status: 'published',
          author: admin._id,
          category: 'Technology',
          tags: ['web development', 'trends', 'future', 'technology', 'PWA', 'AI'],
          seo: {
            metaTitle: 'Future of Web Development - Key Trends and Technologies',
            metaDescription: 'Discover the future trends in web development including PWAs, AI integration, voice interfaces, and serverless architecture.',
            keywords: ['future', 'web development', 'trends', 'PWA', 'AI', 'serverless']
          }
        }
      ];

      await Content.insertMany(sampleContent);
      console.log('Sample content created successfully');
    } else {
      console.log('Sample content already exists');
    }

    console.log('Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedData();