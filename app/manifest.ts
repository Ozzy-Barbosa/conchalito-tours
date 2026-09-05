import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Conchalito Tours',
    short_name: 'Conchalito',
    description: 'Tours a Balandra e Isla Espíritu Santo desde La Paz, Baja California Sur.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fbf9f2',
    theme_color: '#063c5a',
    lang: 'es-MX',
    icons: [
      {
        src: '/images/conchalito-symbol-transparent.png',
        sizes: 'any',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
