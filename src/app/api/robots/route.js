import { NextResponse } from 'next/server';

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://bms.nexsys.global/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow search engines to crawl important pages
Allow: /
Allow: /about
Allow: /services
Allow: /projects
Allow: /contact
Allow: /blog-grid
Allow: /blog-standard
Allow: /blog-details/*

# Crawl delay for respectful crawling
Crawl-delay: 1`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
