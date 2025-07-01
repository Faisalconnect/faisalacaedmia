# Deployment Guide

This guide provides step-by-step instructions for deploying the Professional Web Platform to production.

## 🏗️ Prerequisites for Production

- Domain name
- MongoDB Atlas account (or dedicated MongoDB server)
- Hosting service accounts (Vercel/Netlify for frontend, Heroku/VPS for backend)
- SSL certificate (usually provided by hosting services)

## 🗄️ Database Setup (MongoDB Atlas)

1. **Create MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Sign up for a free account

2. **Create a Cluster**
   - Choose a free tier cluster
   - Select a region close to your users
   - Create the cluster (takes 1-3 minutes)

3. **Configure Database Access**
   - Go to Database Access in the left sidebar
   - Add a new database user
   - Choose "Password" authentication
   - Set username and password (save these for later)
   - Grant "Read and write to any database" privilege

4. **Configure Network Access**
   - Go to Network Access in the left sidebar
   - Add IP Address
   - Add `0.0.0.0/0` to allow access from anywhere (or restrict to your server IPs)

5. **Get Connection String**
   - Go to Clusters and click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password

## 🖥️ Backend Deployment (Heroku)

### Option 1: Heroku CLI

1. **Install Heroku CLI**
   ```bash
   # Install from https://devcenter.heroku.com/articles/heroku-cli
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku App**
   ```bash
   cd backend
   heroku create your-app-name-backend
   ```

4. **Set Environment Variables**
   ```bash
   heroku config:set PORT=5000
   heroku config:set MONGODB_URI="your-mongodb-atlas-connection-string"
   heroku config:set JWT_SECRET="your-super-secret-jwt-key-for-production"
   heroku config:set FRONTEND_URL="https://your-frontend-domain.com"
   heroku config:set ADMIN_EMAIL="admin@yourcompany.com"
   heroku config:set ADMIN_PASSWORD="your-secure-admin-password"
   heroku config:set ADMIN_USERNAME="admin"
   ```

5. **Deploy Backend**
   ```bash
   git add .
   git commit -m "Backend ready for deployment"
   git push heroku main
   ```

6. **Seed Database (Optional)**
   ```bash
   heroku run npm run seed
   ```

### Option 2: Heroku Dashboard

1. Go to [Heroku Dashboard](https://dashboard.heroku.com)
2. Click "New" → "Create new app"
3. Choose app name and region
4. Go to "Settings" tab
5. Click "Reveal Config Vars"
6. Add all environment variables listed above
7. Go to "Deploy" tab
8. Connect to your GitHub repository
9. Choose the branch to deploy
10. Click "Deploy Branch"

## 🌐 Frontend Deployment (Vercel)

### Option 1: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Build and Deploy**
   ```bash
   cd frontend
   npm run build
   vercel --prod
   ```

4. **Set Environment Variables**
   - Go to Vercel dashboard
   - Select your project
   - Go to Settings → Environment Variables
   - Add: `REACT_APP_API_URL` = `https://your-backend-app.herokuapp.com/api`

### Option 2: Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Import Project"
3. Connect to your GitHub repository
4. Select the frontend folder as root directory
5. Set build command: `npm run build`
6. Set output directory: `build`
7. Add environment variables in Settings
8. Deploy

## 🚀 Alternative Deployment Options

### Frontend Alternatives

#### Netlify
1. Go to [Netlify](https://netlify.com)
2. Drag and drop the `frontend/build` folder
3. Or connect to GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `build`
6. Add environment variables in Site Settings

#### Amazon S3 + CloudFront
1. Create S3 bucket
2. Upload build files
3. Configure bucket for static website hosting
4. Set up CloudFront distribution
5. Configure custom domain

### Backend Alternatives

#### DigitalOcean App Platform
1. Create account on DigitalOcean
2. Go to App Platform
3. Connect GitHub repository
4. Configure build settings
5. Set environment variables
6. Deploy

#### Railway
1. Go to [Railway](https://railway.app)
2. Connect GitHub repository
3. Configure environment variables
4. Deploy automatically

#### VPS (Ubuntu)
1. **Setup Server**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade

   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs

   # Install PM2
   sudo npm install -g pm2

   # Install Nginx
   sudo apt install nginx
   ```

2. **Deploy Application**
   ```bash
   # Clone repository
   git clone your-repository-url
   cd your-project

   # Install dependencies
   cd backend && npm install
   cd ../frontend && npm install && npm run build

   # Start backend with PM2
   cd ../backend
   pm2 start server.js --name "backend"
   pm2 startup
   pm2 save
   ```

3. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       # Frontend
       location / {
           root /path/to/frontend/build;
           try_files $uri $uri/ /index.html;
       }

       # Backend API
       location /api {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## 🔧 Production Configuration

### Security Checklist
- [ ] Change default admin credentials
- [ ] Use strong JWT secret (minimum 32 characters)
- [ ] Enable HTTPS/SSL
- [ ] Configure CORS for production domains only
- [ ] Set up database backups
- [ ] Configure rate limiting
- [ ] Set up monitoring and logging
- [ ] Update all dependencies to latest versions

### Performance Optimization
- [ ] Enable gzip compression
- [ ] Set up CDN for static assets
- [ ] Configure database indexes
- [ ] Implement caching strategies
- [ ] Optimize images and assets
- [ ] Set up monitoring (CPU, memory, response times)

### Environment Variables for Production

#### Backend
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/webplatform
JWT_SECRET=your-very-secure-random-string-minimum-32-characters
FRONTEND_URL=https://yourdomain.com
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PASSWORD=secure-admin-password
ADMIN_USERNAME=admin
```

#### Frontend
```env
REACT_APP_API_URL=https://your-backend-domain.com/api
```

## 🔍 Post-Deployment Testing

1. **Test Website Functionality**
   - [ ] Homepage loads correctly
   - [ ] All navigation links work
   - [ ] Contact form submits successfully
   - [ ] Images and assets load properly
   - [ ] Mobile responsiveness works

2. **Test Admin Panel**
   - [ ] Admin login works
   - [ ] Dashboard displays correctly
   - [ ] All admin sections load
   - [ ] File uploads work
   - [ ] Database operations function

3. **Performance Testing**
   - [ ] Page load speeds < 3 seconds
   - [ ] API response times < 500ms
   - [ ] No console errors
   - [ ] SEO meta tags present

## 🔄 CI/CD Setup (Optional)

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: akhileshns/heroku-deploy@v3.12.12
        with:
          heroku_api_key: ${{secrets.HEROKU_API_KEY}}
          heroku_app_name: "your-backend-app"
          heroku_email: "your-email@example.com"
          appdir: "backend"

  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{secrets.VERCEL_TOKEN}}
          vercel-org-id: ${{secrets.ORG_ID}}
          vercel-project-id: ${{secrets.PROJECT_ID}}
          working-directory: ./frontend
```

## 📧 Domain and Email Setup

1. **Custom Domain**
   - Point domain to your hosting service
   - Configure DNS records
   - Set up SSL certificate

2. **Email Configuration**
   - Set up business email
   - Configure SMTP for contact forms
   - Set up email forwarding

## 🔧 Maintenance

### Regular Tasks
- Monitor server resources
- Update dependencies monthly
- Backup database weekly
- Check security vulnerabilities
- Monitor error logs
- Update content regularly

### Scaling Considerations
- Database optimization as data grows
- CDN implementation for global users
- Load balancer for high traffic
- Horizontal scaling options
- Caching strategies

---

For any deployment issues, refer to the hosting service documentation or create an issue in the repository.