# Professional Web Platform

A modern, responsive web platform with a separate admin panel built with React, Node.js, Express, and MongoDB. Features a clean blue and white design with comprehensive content management capabilities.

## 🚀 Features

### Frontend (User Website)
- **Modern Design**: Clean, professional UI with blue & white color scheme
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Key Sections**:
  - Hero section with call-to-actions
  - About us page with company information
  - Services showcase
  - Blog/News section
  - Contact form with validation
  - Testimonials and features
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Performance**: Fast loading with optimized assets

### Backend (Admin Panel)
- **Secure Authentication**: JWT-based admin login system
- **Dashboard Overview**: Quick stats and recent activity
- **User Management**: View, edit, delete, and manage user accounts
- **Content Management**: Create, edit, and publish website content
- **Contact Management**: View and respond to contact form submissions
- **File Management**: Upload and organize media files
- **Responsive Admin UI**: Works on all devices

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **Lucide React** - Beautiful icons
- **CSS3** - Custom styling with modern features

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (local installation or MongoDB Atlas)

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/Faisalconnect/faisalacaedmia.git
cd faisalacaedmia
```

### 2. Install Dependencies
```bash
npm run install:all
```

### 3. Environment Setup
```bash
npm run setup
```

### 4. Configure Environment Variables

#### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/webplatform
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
FRONTEND_URL=http://localhost:3000
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=admin123
ADMIN_USERNAME=admin
```

#### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### 5. Start MongoDB
Ensure MongoDB is running on your system:
```bash
# If using local MongoDB
mongod

# Or use MongoDB Atlas (cloud) - update MONGODB_URI in backend/.env
```

### 6. Seed the Database (Optional)
```bash
npm run backend:seed
```

### 7. Start the Application
```bash
# Development mode (both frontend and backend)
npm run dev

# Or start individually
npm run backend:dev  # Backend only
npm run frontend:dev # Frontend only
```

## 🌐 Access Points

- **Website**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin/login
- **API**: http://localhost:5000/api

## 🔐 Default Admin Credentials

- **Email**: admin@example.com
- **Password**: admin123

*⚠️ Change these credentials in production!*

## 📁 Project Structure

```
├── backend/                 # Node.js backend
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── scripts/            # Database seeding scripts
│   ├── uploads/            # File uploads directory
│   └── server.js           # Main server file
├── frontend/               # React frontend
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context providers
│   │   ├── services/       # API service functions
│   │   └── utils/          # Utility functions
│   └── package.json
├── package.json            # Root package file
└── README.md
```

## 🔧 Available Scripts

```bash
# Install all dependencies
npm run install:all

# Setup environment files
npm run setup

# Development (both frontend & backend)
npm run dev

# Production build
npm run build

# Backend commands
npm run backend:dev    # Start backend in development
npm run backend:start  # Start backend in production
npm run backend:seed   # Seed database with sample data

# Frontend commands
npm run frontend:dev   # Start frontend development server
npm run frontend:build # Build frontend for production
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: #0056b3
- **Primary Blue Dark**: #004494
- **Primary Blue Light**: #1e7ce8
- **White**: #ffffff
- **Light Gray**: #f8f9fa
- **Gray Scale**: Various shades for text and borders

### Typography
- **Font Family**: Inter, system fonts
- **Headings**: Blue color (#0056b3)
- **Body Text**: Gray (#495057)

## 📱 Responsive Design

The platform is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for password security
- **Input Validation**: Server-side validation for all inputs
- **CORS Configuration**: Controlled cross-origin requests
- **File Upload Security**: Restricted file types and sizes

## 🚀 Deployment

### Frontend (Netlify/Vercel)
1. Build the frontend: `npm run frontend:build`
2. Deploy the `frontend/build` folder
3. Set environment variables in hosting platform

### Backend (Heroku/VPS)
1. Set up MongoDB Atlas or database
2. Configure environment variables
3. Deploy backend code
4. Run database seeding if needed

### Environment Variables for Production
- Update `JWT_SECRET` with a strong secret key
- Set `MONGODB_URI` to production database
- Update `FRONTEND_URL` to production domain
- Change default admin credentials

## 📝 API Documentation

### Authentication Endpoints
- `POST /api/auth/login` - Admin login
- `POST /api/auth/register` - User registration
- `GET /api/auth/profile` - Get user profile
- `GET /api/auth/verify` - Verify JWT token

### Content Endpoints
- `GET /api/content` - Get all content
- `GET /api/content/:id` - Get content by ID
- `POST /api/content` - Create content (admin only)
- `PUT /api/content/:id` - Update content (admin only)
- `DELETE /api/content/:id` - Delete content (admin only)

### Contact Endpoints
- `POST /api/contact/submit` - Submit contact form
- `GET /api/contact` - Get all contacts (admin only)
- `PATCH /api/contact/:id/status` - Update contact status (admin only)

### Admin Endpoints
- `GET /api/admin/dashboard` - Dashboard statistics
- `GET /api/admin/users` - Get all users
- `PUT /api/admin/users/:id` - Update user
- `DELETE /api/admin/users/:id` - Delete user

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin feature-name`
6. Create a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/Faisalconnect/faisalacaedmia/issues) page
2. Create a new issue if your problem isn't already listed
3. Provide detailed information about your environment and the issue

## 🎯 Future Enhancements

- [ ] Advanced content editor (rich text)
- [ ] Email notifications for contact forms
- [ ] User registration and profiles
- [ ] Blog comments system
- [ ] SEO analytics dashboard
- [ ] Multi-language support
- [ ] Payment integration
- [ ] Advanced user roles and permissions

---

**Happy coding! 🚀**