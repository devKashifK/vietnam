import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';

// Determine the hostname dynamically based on environment (Node.js)
const hostname = process.env.NODE_ENV === 'production'
  ? 'https://vietnam-ten.vercel.app'  // Production URL
  : 'http://localhost:5173';  // Development URL

// Define the URLs for your routes
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/ve-icanpr', changefreq: 'weekly', priority: 0.8 },
  { url: '/doi-tac-icanpr', changefreq: 'monthly', priority: 0.7 },
  { url: '/immigration/express-entry/federal-skilled-worker', changefreq: 'weekly', priority: 0.9 },
  { url: '/immigration/express-entry/federal-skilled-trade', changefreq: 'weekly', priority: 0.9 },
  { url: '/immigration/express-entry/canadian-experience-class', changefreq: 'weekly', priority: 0.9 },
  { url: '/immigration/express-entry/crs-score-calculation', changefreq: 'monthly', priority: 0.7 },
  { url: '/immigration/việc-làm-định-cư', changefreq: 'monthly', priority: 0.7 },
  { url: '/immigration/du-hoc-dinh-cu', changefreq: 'monthly', priority: 0.7 },
  { url: '/immigration/doanh-nghiệp-C11-visa', changefreq: 'monthly', priority: 0.7 },
  { url: '/immigration/start-up-visa', changefreq: 'monthly', priority: 0.7 },
  { url: '/immigration/bảo-lãnh-gia-đình', changefreq: 'monthly', priority: 0.7 },
  { url: '/immigration/khách-hàng-thành-công', changefreq: 'monthly', priority: 0.7 },
  { url: '/dề-cử-tỉnh-bang-pnp/alberta-immigration-aaip', changefreq: 'monthly', priority: 0.7 },
  { url: '/dề-cử-tỉnh-bang-pnp/british-columbia-bcpnp', changefreq: 'monthly', priority: 0.7 },
  { url: '/dề-cử-tỉnh-bang-pnp/ontario-oinp', changefreq: 'monthly', priority: 0.7 },
  { url: '/dề-cử-tỉnh-bang-pnp/manitoba-mpnp', changefreq: 'monthly', priority: 0.7 },
  { url: '/dề-cử-tỉnh-bang-pnp/new-brunswick-nbpnp', changefreq: 'monthly', priority: 0.7 },
  { url: '/dề-cử-tỉnh-bang-pnp/nova-scotia-nsnp', changefreq: 'monthly', priority: 0.7 },
  { url: '/dề-cử-tỉnh-bang-pnp/prince-edward-island-peipnp', changefreq: 'monthly', priority: 0.7 },
  { url: '/dề-cử-tỉnh-bang-pnp/saskatchewan-sinp', changefreq: 'monthly', priority: 0.7 },
  { url: '/dề-cử-tỉnh-bang-pnp/quebec', changefreq: 'monthly', priority: 0.7 },
  { url: '/dề-cử-tỉnh-bang-pnp/yukon-ynp', changefreq: 'monthly', priority: 0.7 },
  { url: '/cuộc-sống-canada/các-tỉnh-bang-canada/albertaP', changefreq: 'monthly', priority: 0.7 },
  { url: '/cuộc-sống-canada/các-tỉnh-bang-canada/brcolumbiaP', changefreq: 'monthly', priority: 0.7 },
  { url: '/cuộc-sống-canada/các-tỉnh-bang-canada/manitobaP', changefreq: 'monthly', priority: 0.7 },
  { url: '/cuộc-sống-canada/các-tỉnh-bang-canada/new-brunswickP', changefreq: 'monthly', priority: 0.7 },
  { url: '/cuộc-sống-canada/các-tỉnh-bang-canada/newfoundland-labradorP', changefreq: 'monthly', priority: 0.7 },
  { url: '/cuộc-sống-canada/các-tỉnh-bang-canada/northwest-territoriesP', changefreq: 'monthly', priority: 0.7 },
  { url: '/cuộc-sống-canada/các-tỉnh-bang-canada/nova-scotiaP', changefreq: 'monthly', priority: 0.7 },
  { url: '/cuộc-sống-canada/các-tỉnh-bang-canada/nunavutP', changefreq: 'monthly', priority: 0.7 },
  { url: '/cuộc-sống-canada/các-tỉnh-bang-canada/ontarioP', changefreq: 'monthly', priority: 0.7 },
  { url: '/cuộc-sống-canada/các-tỉnh-bang-canada/saskatchewanP', changefreq: 'monthly', priority: 0.7 },
  { url: '/cuộc-sống-canada/môi-trường-canada', changefreq: 'monthly', priority: 0.7 },
  { url: '/cuộc-sống-canada/văn-hóa-tôn-giáo', changefreq: 'monthly', priority: 0.7 },
  { url: '/cuộc-sống-canada/giáo-dục-canada', changefreq: 'monthly', priority: 0.7 },
  { url: '/cuộc-sống-canada/y-tế', changefreq: 'monthly', priority: 0.7 },
  { url: '/cuộc-sống-canada/tỷ-giá-đô-canada', changefreq: 'monthly', priority: 0.7 },
  { url: '/cuộc-sống-canada/chính-sách-thuế', changefreq: 'monthly', priority: 0.7 },
  { url: '/thông-tin-hữu-ích/câu-hỏi-thường-gặp', changefreq: 'monthly', priority: 0.7 },
  { url: '/thông-tin-hữu-ích/trang-web-hữu-ích', changefreq: 'monthly', priority: 0.7 },
  { url: '/thông-tin-hữu-ích/thuật-ngữ-trong-di-trú', changefreq: 'monthly', priority: 0.7 },
  { url: '/tuyển-dụng/làm-việc-cho-icanpr', changefreq: 'monthly', priority: 0.7 },
  { url: '/doanh-nghiệp', changefreq: 'monthly', priority: 0.7 },
];

// Function to generate the sitemap
const generateSitemap = () => {
  try {
    const sitemapStream = new SitemapStream({ hostname });
    const writeStream = createWriteStream('./public/sitemap.xml');

    sitemapStream.pipe(writeStream);  // Pipe the stream to the file

    // Add each URL to the sitemap stream
    links.forEach(link => {
      sitemapStream.write(link);
    });

    sitemapStream.end();  // Close the sitemap stream

    writeStream.on('finish', () => {
      console.log('Sitemap generated successfully!');
    });

    writeStream.on('error', (err) => {
      console.error('Error writing sitemap:', err);
    });

  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

// Run the sitemap generation
generateSitemap();
