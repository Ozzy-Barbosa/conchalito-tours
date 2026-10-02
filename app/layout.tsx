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
  metadataBase: new URL('https://conchalitotours.com'),
  title: {
    default: 'Conchalito Tours | Tours a Balandra e Isla Espíritu Santo desde La Paz',
    template: '%s | Conchalito Tours',
  },
  description:
    'Tours en lancha a Balandra e Isla Espíritu Santo desde La Paz con el Capitán Héctor. Snorkel, playas, vida marina y salidas para familias y grupos.',
  keywords: [
    'Conchalito Tours',
    'tour Isla Espíritu Santo',
    'tour Balandra La Paz',
    'piedra de Balandra tour',
    'Capitán Héctor tours La Paz',
    'tours La Paz Baja California Sur',
    'tour en lancha Isla Espíritu Santo',
    'snorkel lobos marinos La Paz',
    'La Dispensa Isla Espíritu Santo',
    'El Candelero Isla Espíritu Santo',
    'tour Balandra y Espíritu Santo',
    'Sea of Cortez tours La Paz',
  ],
  applicationName: 'Conchalito Tours',
  authors: [{ name: 'Conchalito Tours' }],
  creator: 'Conchalito Tours',
  icons: {
    icon: '/images/conchalito-symbol-transparent.png',
    apple: '/images/conchalito-symbol-transparent.png',
  },
  alternates: { canonical: 'https://conchalitotours.com/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    alternateLocale: 'en_US',
    siteName: 'Conchalito Tours',
    url: 'https://conchalitotours.com/',
    title: 'Conchalito Tours | Balandra e Isla Espíritu Santo',
    description:
      'Tours en lancha desde La Paz con el Capitán Héctor. Elige tu ruta, reúne a tu grupo y reserva por WhatsApp.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Conchalito Tours: tours en lancha a Balandra e Isla Espíritu Santo desde La Paz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conchalito Tours | Balandra e Isla Espíritu Santo',
    description:
      'Tours en lancha desde La Paz con el Capitán Héctor. Elige tu ruta y reserva por WhatsApp.',
    images: ['/og.png'],
  },
  category: 'travel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
