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
  metadataBase: new URL('https://conchalito-tours.ozzyym97.chatgpt.site'),
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
    icon: '/images/conchalito-brand-board.png',
    apple: '/images/conchalito-brand-board.png',
  },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    alternateLocale: 'en_US',
    siteName: 'Conchalito Tours',
    url: '/',
    title: 'Tours a Balandra e Isla Espíritu Santo | Conchalito Tours',
    description:
      'Tres rutas desde La Paz, atención directa del Capitán Héctor y experiencias reales para familias y grupos.',
  },
  twitter: {
    card: 'summary',
    title: 'Conchalito Tours | Balandra e Isla Espíritu Santo',
    description: 'Tours en lancha desde La Paz con atención directa del Capitán Héctor.',
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
