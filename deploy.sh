#!/bin/bash

# NexSys BMS Website Deployment Script
echo "🚀 Starting NexSys BMS Website Deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo ""
    echo "🎯 Next Steps:"
    echo "1. Push your code to GitHub"
    echo "2. Go to https://vercel.com"
    echo "3. Import your GitHub repository"
    echo "4. Configure domain: bms.nexsys.global"
    echo "5. Deploy!"
    echo ""
    echo "📋 SEO Checklist:"
    echo "✅ Meta tags configured"
    echo "✅ Structured data added"
    echo "✅ Sitemap.xml generated"
    echo "✅ Robots.txt configured"
    echo "✅ Manifest.json created"
    echo "✅ Image optimization enabled"
    echo ""
    echo "🔧 Don't forget to:"
    echo "- Update Google verification code in src/app/layout.js"
    echo "- Add real contact information"
    echo "- Configure DNS for bms.nexsys.global"
    echo "- Submit sitemap to Google Search Console"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
