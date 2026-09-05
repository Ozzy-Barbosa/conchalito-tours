import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://conchalito-tours.ozzyym97.chatgpt.site/sitemap.xml',
    host: 'https://conchalito-tours.ozzyym97.chatgpt.site',
  };
}
