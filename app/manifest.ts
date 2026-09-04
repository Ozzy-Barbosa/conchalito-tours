import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Baja Spirit Adventures',
    short_name: 'Baja Spirit',
    description: 'Tours a Isla Espíritu Santo desde La Paz, Baja California Sur.',
    start_url: '/',
    display: 'standalone',
    background_color: '#041e35',
    theme_color: '#0a3c6d',
    lang: 'es-MX',
    icons: [
      {
        src: '/images/baja-spirit-logo.png',
        sizes: '2048x2048',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
