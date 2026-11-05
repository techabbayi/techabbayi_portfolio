import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://techabbayi.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/projects', '/designer'],
        disallow: ['/ravikumar', '/ravikumar/*', '/api/auth', '/api/auth/*'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'Applebot-Extended',
          'cohere-ai',
          'Bytespider',
        ],
        allow: ['/', '/projects', '/designer'],
        disallow: ['/ravikumar', '/ravikumar/*', '/api/auth', '/api/auth/*'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
