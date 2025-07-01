#!/bin/bash

# Professional Platform - InfinityFree Deployment Script
# This script prepares your React frontend for InfinityFree hosting

set -e  # Exit on any error

echo "🚀 Professional Platform - InfinityFree Deployment"
echo "=================================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if frontend directory exists
if [ ! -d "frontend" ]; then
    echo "❌ Error: frontend directory not found."
    exit 1
fi

echo "📁 Navigating to frontend directory..."
cd frontend

# Check if package.json exists in frontend
if [ ! -f "package.json" ]; then
    echo "❌ Error: frontend/package.json not found."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🔧 Building for production..."
npm run build

# Check if build was successful
if [ ! -d "build" ]; then
    echo "❌ Error: Build failed - build directory not found."
    exit 1
fi

echo "📝 Creating .htaccess file for React Router..."
cat > build/.htaccess << 'EOF'
RewriteEngine On

# Handle React Router
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
</IfModule>
EOF

echo "🗺️ Creating sitemap.xml..."
cat > build/sitemap.xml << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.infinityfreeapp.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yoursite.infinityfreeapp.com/about</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yoursite.infinityfreeapp.com/services</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yoursite.infinityfreeapp.com/blog</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://yoursite.infinityfreeapp.com/contact</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>0.9</priority>
  </url>
</urlset>
EOF

echo "🤖 Creating robots.txt..."
cat > build/robots.txt << 'EOF'
User-agent: *
Allow: /

Sitemap: https://yoursite.infinityfreeapp.com/sitemap.xml
EOF

echo "📊 Adding Google Analytics placeholder..."
# Add GA placeholder to index.html
sed -i.bak 's|</head>|  <!-- Google Analytics - Replace GA_MEASUREMENT_ID with your ID -->\n  <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script> -->\n  <!-- <script>\n    window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag("js", new Date());\n    gtag("config", "GA_MEASUREMENT_ID");\n  </script> -->\n</head>|' build/index.html

echo "📋 Creating deployment info file..."
cat > build/DEPLOYMENT_INFO.txt << EOF
Professional Platform - InfinityFree Deployment Package
======================================================

Deployment Date: $(date)
Platform: InfinityFree
Build Version: Production

Files Included:
- index.html (Main application file)
- static/ (CSS, JS, and media files)
- .htaccess (URL rewriting and optimization)
- sitemap.xml (SEO optimization)
- robots.txt (Search engine instructions)
- manifest.json (PWA configuration)

Deployment Instructions:
1. Login to your InfinityFree control panel
2. Go to File Manager
3. Navigate to htdocs folder
4. Upload all files from this package
5. Extract if uploaded as zip
6. Your site will be live immediately!

Important Notes:
- Update the domain in sitemap.xml from yoursite.infinityfreeapp.com to your actual domain
- Uncomment and configure Google Analytics in index.html if needed
- The admin panel requires a backend - consider using external services

For support: Check INFINITYFREE_DEPLOYMENT_GUIDE.md
EOF

echo "📦 Creating deployment package..."
cd build

# Check if zip command exists
if command -v zip &> /dev/null; then
    zip -r ../professional-platform-infinityfree.zip ./*
    echo "✅ ZIP package created: frontend/professional-platform-infinityfree.zip"
else
    echo "⚠️ ZIP command not found. Files are ready in build/ directory."
fi

# Calculate package size
PACKAGE_SIZE=$(du -sh . | cut -f1)
FILE_COUNT=$(find . -type f | wc -l)

cd ..

echo ""
echo "🎉 Deployment package ready!"
echo "================================"
echo "📁 Location: frontend/build/"
echo "📦 Package size: $PACKAGE_SIZE"
echo "📄 Files: $FILE_COUNT"

if [ -f "professional-platform-infinityfree.zip" ]; then
    echo "📦 ZIP file: frontend/professional-platform-infinityfree.zip"
fi

echo ""
echo "📋 Next Steps:"
echo "1. 🌐 Sign up at https://infinityfree.net (if not already done)"
echo "2. 🎯 Choose your subdomain (e.g., yoursite.infinityfreeapp.com)"
echo "3. 📁 Access File Manager in your control panel"
echo "4. 📂 Navigate to htdocs/ folder"
echo "5. ⬆️ Upload all files from frontend/build/ directory"
echo "6. 🚀 Your site will be live immediately!"

echo ""
echo "🔧 Optional Customizations:"
echo "• Update sitemap.xml with your actual domain"
echo "• Enable Google Analytics in index.html"
echo "• Add custom domain in InfinityFree panel"

echo ""
echo "📚 Need help? Check INFINITYFREE_DEPLOYMENT_GUIDE.md"
echo ""
echo "✨ Happy deploying! Your professional platform is ready to go live! ✨"