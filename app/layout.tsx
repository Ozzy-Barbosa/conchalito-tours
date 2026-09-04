import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bajaspiritadventures.com'),
  title: {
    default: 'Baja Spirit Adventures | Tours a Isla Espíritu Santo desde La Paz',
    template: '%s | Baja Spirit Adventures',
  },
  description:
    'Tours en lancha a Isla Espíritu Santo desde La Paz, Baja California Sur. Snorkel, lobos marinos, playas, pesca y experiencias privadas con guías locales.',
  keywords: [
    'tour Isla Espíritu Santo',
    'tours La Paz Baja California Sur',
    'tour en lancha Isla Espíritu Santo',
    'snorkel lobos marinos La Paz',
    'La Dispensa Isla Espíritu Santo',
    'El Candelero Isla Espíritu Santo',
    'tour Balandra y Espíritu Santo',
    'Sea of Cortez tours La Paz',
  ],
  applicationName: 'Baja Spirit Adventures',
  authors: [{ name: 'Baja Spirit Adventures' }],
  creator: 'Baja Spirit Adventures',
  icons: {
    icon: '/images/baja-spirit-logo.png',
    apple: '/images/baja-spirit-logo.png',
  },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    alternateLocale: 'en_US',
    siteName: 'Baja Spirit Adventures',
    url: '/',
    title: 'Tours a Isla Espíritu Santo desde La Paz | Baja Spirit Adventures',
    description:
      'Tres rutas a Isla Espíritu Santo desde $990 MXN por persona. Experiencias para familias y grupos con atención local.',
  },
  twitter: {
    card: 'summary',
    title: 'Baja Spirit Adventures | Isla Espíritu Santo',
    description: 'Tours en lancha desde La Paz para familias y grupos.',
  },
  category: 'travel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
