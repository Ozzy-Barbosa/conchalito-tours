import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Anchor,
  ArrowUpRight,
  Download,
  Mail,
  Fish,
  MapPin,
  Phone,
  UsersRound,
} from 'lucide-react';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '@/components/brand-icons';

const cardUrl = 'https://conchalitotours.com/tarjeta/capitan-hector-parra';
const whatsappUrl =
  'https://wa.me/526121178086?text=Hola%20Capit%C3%A1n%20H%C3%A9ctor%2C%20vi%20su%20tarjeta%20digital%20y%20quiero%20informaci%C3%B3n%20sobre%20un%20tour.';

export const metadata: Metadata = {
  title: 'Capitán Héctor Parra | Tarjeta digital',
  description:
    'Contacto directo del Capitán Héctor Parra para recorridos en lancha con Conchalito Tours desde La Paz, Baja California Sur.',
  alternates: { canonical: cardUrl },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

const socialProfiles = [
  {
    name: 'Facebook',
    account: 'Conchalito Tours',
    href: 'https://www.facebook.com/profile.php?id=61572761176971',
    icon: FacebookIcon,
  },
  {
    name: 'Instagram',
    account: '@conchalito.tours',
    href: 'https://www.instagram.com/conchalito.tours/',
    icon: InstagramIcon,
  },
  {
    name: 'Facebook',
    account: 'Tour Espíritu Santo',
    href: 'https://www.facebook.com/tourespiritusanto',
    icon: FacebookIcon,
  },
  {
    name: 'Instagram',
    account: '@tourespiritusanto',
    href: 'https://www.instagram.com/tourespiritusanto/',
    icon: InstagramIcon,
  },
] as const;

export default function CaptainHectorCardPage() {
  return (
    <main className="digital-card-page">
      <div className="digital-card-orb digital-card-orb-one" aria-hidden="true" />
      <div className="digital-card-orb digital-card-orb-two" aria-hidden="true" />

      <div className="digital-card-shell">
        <header className="digital-card-header">
          <Link className="digital-card-brand" href="/" aria-label="Ir al sitio de Conchalito Tours">
            <img src="/images/conchalito-symbol-transparent.png" alt="" width="1536" height="1024" />
            <span><strong>Conchalito</strong><small>Tours</small></span>
          </Link>
          <span className="digital-card-label">Tarjeta digital</span>
        </header>

        <section className="captain-hero">
          <div className="captain-portrait-wrap">
            <img
              className="captain-portrait"
              src="/images/capitan-hector-parra.jpg"
              alt="Capitán Héctor Parra con gorra de capitán durante un recorrido"
              width="3960"
              height="2640"
            />
            <span><Anchor size={18} /> Capitán local</span>
          </div>

          <div className="captain-intro">
            <p className="captain-eyebrow">La Paz · Baja California Sur</p>
            <h1>Capitán<br /><em>Héctor Parra</em></h1>
            <p className="captain-role">Capitán, anfitrión y operador de Conchalito Tours</p>
            <p className="captain-bio">
              Te acompaño a conocer el Mar de Cortés en recorridos en lancha hacia Balandra e Isla Espíritu Santo. Organizamos días de navegación, snorkel, playas y encuentros con la vida marina para familias y grupos, con atención directa desde el primer mensaje.
            </p>

            <div className="captain-actions">
              <a className="captain-action-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                <WhatsAppIcon width="21" height="21" /> Escribir por WhatsApp
              </a>
              <a className="captain-action-secondary" href="tel:+526121178086"><Phone size={19} /> Llamar</a>
              <a className="captain-action-secondary" href="mailto:toursespiritusanto@gmail.com"><Mail size={19} /> Correo</a>
              <a className="captain-action-secondary" href="/capitan-hector-parra.vcf" download><Download size={19} /> Guardar contacto</a>
            </div>
          </div>
        </section>

        <section className="captain-services" aria-label="Experiencias">
          <article><Anchor size={22} /><span><strong>Tours en lancha</strong><small>Balandra e Isla Espíritu Santo</small></span></article>
          <article><Fish size={22} /><span><strong>Vida marina</strong><small>Snorkel y naturaleza</small></span></article>
          <article><UsersRound size={22} /><span><strong>Familias y grupos</strong><small>Atención cercana y directa</small></span></article>
          <article><MapPin size={22} /><span><strong>Salida desde La Paz</strong><small>Encuéntrame en El Conchalito</small></span></article>
        </section>

        <section className="captain-contact-grid">
          <div className="captain-social-panel">
            <p className="captain-section-label">Conecta conmigo</p>
            <h2>Cuatro formas de seguir la aventura.</h2>
            <div className="captain-social-list">
              {socialProfiles.map((profile) => {
                const Icon = profile.icon;
                return (
                  <a key={`${profile.name}-${profile.account}`} href={profile.href} target="_blank" rel="noreferrer">
                    <span className="captain-social-icon"><Icon width="20" height="20" /></span>
                    <span><small>{profile.name}</small><strong>{profile.account}</strong></span>
                    <ArrowUpRight size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <aside className="captain-qr-panel">
            <div className="captain-qr-frame">
              <img src="/images/qr-capitan-hector.svg" alt="Código QR de la tarjeta digital del Capitán Héctor Parra" width="640" height="640" />
            </div>
            <p className="captain-section-label">Comparte esta tarjeta</p>
            <h2>Escanea, guarda y navega.</h2>
            <p>El código abre directamente esta tarjeta de contacto.</p>
            <a href="/images/qr-capitan-hector.svg" download="qr-capitan-hector-parra.svg"><Download size={17} /> Descargar código QR</a>
          </aside>
        </section>

        <footer className="digital-card-footer">
          <span>Capitán Héctor Parra · Conchalito Tours</span>
          <a href="mailto:toursespiritusanto@gmail.com">toursespiritusanto@gmail.com</a>
          <a href="tel:+526121178086">+52 612 117 8086</a>
        </footer>
      </div>
    </main>
  );
}
