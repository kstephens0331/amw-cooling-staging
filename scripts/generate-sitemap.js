const fs = require('fs');
const path = require('path');

const baseUrl = 'https://amwairconditioning.com';
const today = new Date().toISOString().split('T')[0];

// All existing and new routes
const pages = [
  { url: '', priority: '1.0', changefreq: 'weekly' }, // homepage
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'monthly' },
  { url: '/additional-services', priority: '0.7', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact-us', priority: '0.8', changefreq: 'monthly' },
  { url: '/faqs', priority: '0.7', changefreq: 'monthly' },
  { url: '/financing', priority: '0.7', changefreq: 'monthly' },
  { url: '/testimonials', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog', priority: '0.8', changefreq: 'weekly' },

  // Blog posts - will add dynamically later
  { url: '/blog/winter-maintenance-tips-conroe', priority: '0.6', changefreq: 'monthly' },
  { url: '/blog/winter-hvac-preparation-conroe', priority: '0.6', changefreq: 'monthly' },
  { url: '/blog/dryer-vent-cleaning-safety-conroe', priority: '0.6', changefreq: 'monthly' },
  { url: '/blog/prep-ac-conroe-summer', priority: '0.6', changefreq: 'monthly' },
  { url: '/blog/fall-furnace-maintenance-conroe', priority: '0.6', changefreq: 'monthly' },
  { url: '/blog/hvac-maintenance-dryer-vent-special', priority: '0.6', changefreq: 'monthly' },
  { url: '/blog/hvac-maintenance-costs-conroe', priority: '0.6', changefreq: 'monthly' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemap);
console.log('✅ Sitemap generated at public/sitemap.xml');
console.log(`📄 Total pages: ${pages.length}`);
