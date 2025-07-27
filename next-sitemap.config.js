/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.taxinis.rs",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/private/*'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.taxinis.rs/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/api/'],
      },
    ],
  },
};
