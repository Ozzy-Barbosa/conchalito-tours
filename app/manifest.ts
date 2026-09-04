import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Baja Spirit Adventures',
    short_name: 'Baja Spirit',
    description: 'Tours a Isla Espíritu Santo desde La Paz, Baja California Sur.',
    start_url: '/',
    display: 'standalone',
    background_color: '#031923',
    theme_color: '#06263a',
    lang: 'es-MX',
  };
}
