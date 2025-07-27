export default function sitemap() {
  const baseUrl = 'https://www.taxinis.rs';
  
  const blogPosts = [
    {
      slug: 'kako-izabrati-najbolji-taxi-nis',
      lastModified: new Date('2025-01-15'),
    },
    {
      slug: 'taxi-beogradski-aerodrom',
      lastModified: new Date('2025-01-10'),
    },
    {
      slug: 'najbolje-banje-srbija-taxi',
      lastModified: new Date('2025-01-05'),
    },
    {
      slug: 'ekoloski-taxi-prevoz',
      lastModified: new Date('2025-01-01'),
    },
  ];

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogUrls,
  ];
} 