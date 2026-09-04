'use client';

import { useEffect, useState, type FormEvent } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Anchor,
  ArrowDownRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Compass,
  Fish,
  LifeBuoy,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
  UtensilsCrossed,
  X,
} from 'lucide-react';

type Language = 'es' | 'en';

const content = {
  es: {
    langLabel: 'EN',
    langAria: 'Cambiar idioma a inglés',
    navAria: 'Navegación principal',
    mobileAria: 'Abrir menú',
    mobileCloseAria: 'Cerrar menú',
    place: 'La Paz · Baja California Sur',
    topline: 'Exploramos el Mar de Cortés contigo',
    nav: ['Experiencias', 'Rutas y precios', 'Nosotros', 'Galería', 'Preguntas'],
    reserve: 'Reservar',
    lead: {
      trigger: 'Planear mi tour',
      eyebrow: 'Cotización guiada',
      title: 'Cuéntanos tu plan',
      description: 'Déjanos los datos esenciales y Héctor podrá orientarte con una ruta, fecha y salida adecuada para tu grupo.',
      benefits: ['Revisión de disponibilidad', 'Recomendación de ruta', 'Seguimiento directo por WhatsApp'],
      name: 'Nombre completo',
      namePlaceholder: '¿Cómo te llamas?',
      phone: 'Tu WhatsApp',
      phonePlaceholder: 'Incluye lada',
      date: 'Fecha aproximada',
      travelers: 'Número de viajeros',
      route: 'Ruta de interés',
      routePlaceholder: 'Selecciona una ruta',
      tripType: 'Tipo de salida',
      shared: 'Compartida',
      private: 'Privada / grupo completo',
      notes: '¿Qué te gustaría vivir?',
      notesPlaceholder: 'Cuéntanos si viajan niños, si desean snorkel o si tienen alguna necesidad especial.',
      submit: 'Enviar solicitud a Héctor',
      privacy: 'Al continuar se abrirá WhatsApp con tus datos organizados. El sitio no almacena esta información.',
      close: 'Cerrar formulario',
      noDate: 'Por definir',
    },
    eyebrow: 'Isla Espíritu Santo · Mar de Cortés',
    heroLine1: 'El mar se vive',
    heroLine2: 'desde dentro.',
    heroCopy:
      'Navega, haz snorkel y descubre la vida silvestre de una isla Patrimonio Natural de la Humanidad, acompañado por un equipo local que conoce cada rincón.',
    quote: 'Cotizar por WhatsApp',
    explore: 'Explorar rutas',
    from: 'Tours desde',
    perPerson: 'MXN · por persona',
    threeRoutes: 'Tres rutas para elegir hasta dónde quieres llegar.',
    availability: 'Consultar disponibilidad',
    proof: [
      ['Experiencia', 'Día completo'],
      ['Atención', 'Familias y grupos'],
      ['Operación', 'Máximo 17 viajeros'],
    ],
    kicker: 'Elige tu forma de explorar',
    experienceTitle: 'Un día que se queda contigo.',
    experienceLead:
      'Salidas desde La Paz para conectar con el paisaje, la fauna y el ritmo extraordinario de la isla.',
    experienceCards: [
      {
        label: '01 · La experiencia esencial',
        title: 'Isla Espíritu Santo',
        text: 'Navegación, vida marina, bahías turquesa y tiempo de playa.',
        link: 'Ver rutas',
      },
      {
        label: '02 · En tu propio ritmo',
        title: 'Familias y grupos',
        text: 'Una aventura pensada para compartir.',
        link: 'Cómo reservar',
      },
    ],
    humanLabel: 'Plan local, trato humano',
    humanTitle: 'Tu aventura empieza con una conversación.',
    humanText:
      'Cuéntanos quién viaja, cuándo y qué te gustaría vivir. Héctor te ayuda a elegir la ruta adecuada para tu grupo.',
    talkHector: 'Hablar con Héctor',
    routesKicker: 'Tres maneras de llegar a la isla',
    routesTitle: 'Elige la ruta. Nosotros preparamos el día.',
    routesLead:
      'Precios directos y transparentes. Las salidas compartidas se confirman al reunir un mínimo de 10 lugares pagados.',
    routes: [
      {
        badge: 'Ruta esencial',
        name: 'La Dispensa',
        price: '$990',
        description: 'La primera gran playa de la isla: un escape cercano para nadar, descansar y disfrutar del paisaje.',
        features: ['Viaje en lancha ida y vuelta', 'Chaleco salvavidas', 'Tiempo para nadar y estar en playa', 'Alimentos no incluidos'],
        note: 'Ideal para grupos que buscan la opción más accesible.',
        image: '/images/snorkel.webp',
      },
      {
        badge: 'La favorita',
        name: 'El Candelero',
        price: '$1,300',
        description: 'Una ruta más profunda hacia una bahía protegida, aproximadamente a mitad del archipiélago.',
        features: ['Alimentos incluidos', 'Equipo de snorkel', 'Mesa y sombra en playa', 'Kayak sujeto a disponibilidad'],
        note: 'Puede incluir parada panorámica en Balandra al regreso.',
        image: '/images/cave.webp',
        featured: true,
      },
      {
        badge: 'Ruta completa',
        name: 'La Lobera',
        price: '$1,500',
        description: 'La travesía hasta el extremo norte y Los Islotes, el punto más lejano y salvaje del recorrido.',
        features: ['Alimentos incluidos', 'Equipo de snorkel', 'Mesa y sombra en playa', 'Avistamiento de vida marina'],
        note: 'Acceso y actividades sujetos a temporada y disposiciones del parque.',
        image: '/images/boat.webp',
      },
    ],
    priceSuffix: 'MXN por persona',
    chooseRoute: 'Cotizar esta ruta',
    priceNote:
      'Itinerarios y actividades sujetos a condiciones del mar, clima, temporada, aforo y autorización de las autoridades del Área Natural Protegida.',
    includeKicker: 'Lo que cuidamos por ti',
    includeTitle: 'Listos para disfrutar, de principio a fin.',
    includes: [
      ['Lancha equipada', 'Embarcación con capacidad máxima para 17 viajeros.'],
      ['Seguridad', 'Chalecos salvavidas y conducción responsable.'],
      ['Equipo de snorkel', 'Disponible en las rutas El Candelero y La Lobera.'],
      ['Comida y sombra', 'En las rutas completas preparamos alimentos, mesa y sombra.'],
      ['Atención local', 'Comunicación directa con Héctor antes de salir.'],
      ['Plan flexible', 'La ruta se adapta a las condiciones del día.'],
    ],
    aboutKicker: 'Más que un paseo en lancha',
    aboutTitle: 'El espíritu de Baja se comparte.',
    aboutText1:
      'Baja Spirit Adventures nace de la experiencia de Héctor en el mar y de su gusto por reunir a familias y amigos alrededor de un día extraordinario.',
    aboutText2:
      'Antes de cada salida se prepara la embarcación, el equipo y cada detalle de la jornada. El resultado es un recorrido cercano, sin prisas y con la atención de alguien que conoce el camino.',
    aboutQuote: '“La idea es que vengan familias y grupos, y que disfruten el día completo.”',
    aboutQuoteBy: '— Héctor, propietario y anfitrión',
    howKicker: 'Así funciona',
    howTitle: 'De tu mensaje al mar.',
    steps: [
      ['Cuéntanos tu plan', 'Escríbenos cuántas personas viajan y la fecha que tienen en mente.'],
      ['Elige una ruta', 'Te orientamos entre La Dispensa, El Candelero y La Lobera.'],
      ['Confirmamos la salida', 'Las salidas compartidas requieren un mínimo de 10 lugares pagados.'],
      ['Disfruta el día', 'Llegas listo para navegar; nosotros nos encargamos de la preparación.'],
    ],
    scheduleTitle: 'Salidas compartidas',
    scheduleText:
      'Normalmente los domingos, con preparación de la embarcación el sábado. Para una familia, grupo completo o fecha distinta, consulta disponibilidad.',
    capacityTitle: 'Capacidad',
    capacityText: 'Hasta 17 viajeros. El mínimo operativo para una salida compartida es de 10 lugares pagados.',
    galleryKicker: 'Momentos reales',
    galleryTitle: 'Así se siente Espíritu Santo.',
    galleryLead: 'Fotografías tomadas durante una salida real con Baja Spirit Adventures.',
    galleryAlts: [
      'Niña sonriendo con chaleco salvavidas en la lancha',
      'Familia nadando en agua turquesa en Isla Espíritu Santo',
      'Grupo junto a la embarcación en una playa de la isla',
      'Viajeros junto a una formación rocosa de Isla Espíritu Santo',
      'Dos niñas disfrutando del mar durante el tour',
      'Pareja visitando una formación rocosa en la costa',
    ],
    faqKicker: 'Antes de reservar',
    faqTitle: 'Preguntas frecuentes',
    faqs: [
      ['¿Desde dónde salen los tours?', 'Las salidas son desde La Paz, Baja California Sur. El punto y la hora exactos se confirman por WhatsApp antes del recorrido.'],
      ['¿Qué días hay salidas?', 'Las salidas compartidas se programan normalmente los domingos. Si viajas con una familia o grupo completo, pregunta por otras fechas disponibles.'],
      ['¿Cuántas personas se necesitan?', 'La embarcación tiene capacidad para 17 personas y una salida compartida se confirma con un mínimo de 10 lugares pagados. Si son menos, podemos buscar una fecha con grupo abierto.'],
      ['¿Qué debo llevar?', 'Traje de baño, toalla, sombrero o gorra, lentes de sol, ropa ligera, bloqueador biodegradable y cualquier artículo personal que necesites.'],
      ['¿La comida está incluida?', 'En La Dispensa ($990) los alimentos no están incluidos. Las rutas El Candelero ($1,300) y La Lobera ($1,500) sí incluyen alimentos.'],
      ['¿Siempre se visita Balandra y la lobera?', 'La ruta y las paradas dependen del clima, las condiciones del mar, la temporada, los accesos y las indicaciones de las autoridades del Área Natural Protegida.'],
      ['¿Cómo reservo?', 'Escríbenos por WhatsApp. Te pediremos fecha, número de viajeros y ruta de interés para confirmar disponibilidad y condiciones de pago.'],
    ],
    finalKicker: 'Tu próxima aventura',
    finalTitle: 'El Mar de Cortés ya te está esperando.',
    finalText: 'Escríbenos para elegir fecha, ruta y organizar la mejor salida para tu familia o grupo.',
    finalButton: 'Reservar con Héctor',
    call: 'Llamar al 612 117 8086',
    social: 'Síguenos y descubre próximas salidas',
    footerNav: ['Inicio', 'Rutas y precios', 'Galería', 'Preguntas'],
    legal:
      'Precios en pesos mexicanos. Sujeto a disponibilidad y condiciones del mar. Respeta siempre las indicaciones del capitán y del Área Natural Protegida.',
    rights: 'Baja Spirit Adventures. Todos los derechos reservados.',
    float: 'Cotizar por WhatsApp',
  },
  en: {
    langLabel: 'ES',
    langAria: 'Cambiar idioma a español',
    navAria: 'Main navigation',
    mobileAria: 'Open menu',
    mobileCloseAria: 'Close menu',
    place: 'La Paz · Baja California Sur',
    topline: 'Explore the Sea of Cortez with us',
    nav: ['Experiences', 'Routes & prices', 'About us', 'Gallery', 'Questions'],
    reserve: 'Book now',
    lead: {
      trigger: 'Plan my tour',
      eyebrow: 'Guided quote',
      title: 'Tell us about your trip',
      description: 'Share the essentials so Héctor can recommend the right route, date and departure for your group.',
      benefits: ['Availability review', 'Route recommendation', 'Direct WhatsApp follow-up'],
      name: 'Full name',
      namePlaceholder: 'What is your name?',
      phone: 'Your WhatsApp',
      phonePlaceholder: 'Include country code',
      date: 'Approximate date',
      travelers: 'Number of travelers',
      route: 'Route of interest',
      routePlaceholder: 'Select a route',
      tripType: 'Departure type',
      shared: 'Shared',
      private: 'Private / full group',
      notes: 'What would you like to experience?',
      notesPlaceholder: 'Tell us if children are traveling, if you want to snorkel, or if your group has any special needs.',
      submit: 'Send request to Héctor',
      privacy: 'WhatsApp will open with your details organized. This website does not store your information.',
      close: 'Close form',
      noDate: 'To be decided',
    },
    eyebrow: 'Espíritu Santo Island · Sea of Cortez',
    heroLine1: 'Experience the sea',
    heroLine2: 'from within.',
    heroCopy:
      'Sail, snorkel and discover the wildlife of a UNESCO World Heritage island with a local crew that knows every corner of the coast.',
    quote: 'Get a WhatsApp quote',
    explore: 'Explore routes',
    from: 'Tours from',
    perPerson: 'MXN · per person',
    threeRoutes: 'Three routes, depending on how far you want to explore.',
    availability: 'Check availability',
    proof: [
      ['Experience', 'Full day'],
      ['Made for', 'Families & groups'],
      ['Capacity', 'Up to 17 guests'],
    ],
    kicker: 'Choose how you explore',
    experienceTitle: 'A day you will remember.',
    experienceLead:
      'Depart from La Paz and connect with the landscape, wildlife and extraordinary rhythm of the island.',
    experienceCards: [
      {
        label: '01 · The essential experience',
        title: 'Espíritu Santo Island',
        text: 'Coastal cruising, wildlife, turquoise bays and beach time.',
        link: 'View routes',
      },
      {
        label: '02 · At your own pace',
        title: 'Families & groups',
        text: 'An adventure designed to be shared.',
        link: 'How to book',
      },
    ],
    humanLabel: 'Local plan, personal care',
    humanTitle: 'Your adventure starts with a conversation.',
    humanText:
      'Tell us who is traveling, when, and what you would like to experience. Héctor will help you choose the right route for your group.',
    talkHector: 'Talk to Héctor',
    routesKicker: 'Three ways to reach the island',
    routesTitle: 'Choose the route. We prepare the day.',
    routesLead:
      'Clear, direct pricing. Shared departures are confirmed once a minimum of 10 paid seats is reached.',
    routes: [
      {
        badge: 'Essential route',
        name: 'La Dispensa',
        price: '$990',
        description: 'The island’s first great beach: a nearby escape to swim, relax and enjoy the landscape.',
        features: ['Round-trip boat ride', 'Life jacket', 'Time to swim and enjoy the beach', 'Food not included'],
        note: 'Ideal for groups looking for the most accessible option.',
        image: '/images/snorkel.webp',
      },
      {
        badge: 'Guest favorite',
        name: 'El Candelero',
        price: '$1,300',
        description: 'A deeper route to a protected bay, approximately halfway through the archipelago.',
        features: ['Food included', 'Snorkel equipment', 'Beach table and shade', 'Kayak subject to availability'],
        note: 'May include a scenic stop at Balandra on the way back.',
        image: '/images/cave.webp',
        featured: true,
      },
      {
        badge: 'Complete route',
        name: 'Sea Lion Colony',
        price: '$1,500',
        description: 'The journey to the northern tip and Los Islotes, the farthest and wildest point on the route.',
        features: ['Food included', 'Snorkel equipment', 'Beach table and shade', 'Marine wildlife viewing'],
        note: 'Access and activities are subject to season and park regulations.',
        image: '/images/boat.webp',
      },
    ],
    priceSuffix: 'MXN per person',
    chooseRoute: 'Get a quote',
    priceNote:
      'Itineraries and activities are subject to sea and weather conditions, season, capacity and authorization from the Protected Natural Area authorities.',
    includeKicker: 'What we take care of',
    includeTitle: 'Ready to enjoy, from start to finish.',
    includes: [
      ['Equipped boat', 'Vessel with a maximum capacity of 17 guests.'],
      ['Safety', 'Life jackets and responsible navigation.'],
      ['Snorkel gear', 'Available on El Candelero and Sea Lion Colony routes.'],
      ['Food and shade', 'Complete routes include food, a beach table and shade.'],
      ['Local attention', 'Direct communication with Héctor before departure.'],
      ['Flexible plan', 'The route adapts to the day’s conditions.'],
    ],
    aboutKicker: 'More than a boat ride',
    aboutTitle: 'The spirit of Baja is meant to be shared.',
    aboutText1:
      'Baja Spirit Adventures grew from Héctor’s experience at sea and his love of bringing families and friends together for an extraordinary day.',
    aboutText2:
      'Before every departure, the boat, equipment and every detail are prepared with care. The result is an easygoing, personal journey guided by someone who knows the way.',
    aboutQuote: '“The idea is to welcome families and groups so they can enjoy the whole day.”',
    aboutQuoteBy: '— Héctor, owner and host',
    howKicker: 'How it works',
    howTitle: 'From your message to the sea.',
    steps: [
      ['Tell us your plan', 'Message us with your preferred date and number of travelers.'],
      ['Choose a route', 'We help you choose between La Dispensa, El Candelero and the Sea Lion Colony.'],
      ['We confirm departure', 'Shared tours require a minimum of 10 paid seats.'],
      ['Enjoy the day', 'Arrive ready to sail; we take care of the preparation.'],
    ],
    scheduleTitle: 'Shared departures',
    scheduleText:
      'Normally on Sundays, with boat preparation on Saturday. For a family, full group or a different date, ask about availability.',
    capacityTitle: 'Capacity',
    capacityText: 'Up to 17 guests. A shared departure requires a minimum of 10 paid seats.',
    galleryKicker: 'Real moments',
    galleryTitle: 'This is how Espíritu Santo feels.',
    galleryLead: 'Photos taken during a real Baja Spirit Adventures trip.',
    galleryAlts: [
      'Smiling girl wearing a life jacket on the boat',
      'Family swimming in turquoise water at Espíritu Santo Island',
      'Group beside the boat on an island beach',
      'Travelers beside a rock formation at Espíritu Santo Island',
      'Two girls enjoying the sea during the tour',
      'Couple visiting a coastal rock formation',
    ],
    faqKicker: 'Before you book',
    faqTitle: 'Frequently asked questions',
    faqs: [
      ['Where do tours depart from?', 'Tours depart from La Paz, Baja California Sur. The exact meeting point and time are confirmed by WhatsApp before the trip.'],
      ['What days do you go out?', 'Shared departures are normally scheduled on Sundays. If you are traveling with a family or full group, ask about other available dates.'],
      ['How many people are required?', 'The boat holds up to 17 guests and shared departures are confirmed with at least 10 paid seats. Smaller groups can ask to join an open date.'],
      ['What should I bring?', 'Swimsuit, towel, hat, sunglasses, lightweight clothing, biodegradable sunscreen and any personal items you may need.'],
      ['Is food included?', 'Food is not included on the La Dispensa route ($990). El Candelero ($1,300) and the Sea Lion Colony route ($1,500) include food.'],
      ['Do we always visit Balandra and the sea lion colony?', 'Routes and stops depend on weather, sea conditions, season, access and guidance from the Protected Natural Area authorities.'],
      ['How do I book?', 'Message us on WhatsApp. We will ask for your preferred date, group size and route, then confirm availability and payment terms.'],
    ],
    finalKicker: 'Your next adventure',
    finalTitle: 'The Sea of Cortez is waiting for you.',
    finalText: 'Message us to choose your date and route and organize the best trip for your family or group.',
    finalButton: 'Book with Héctor',
    call: 'Call +52 612 117 8086',
    social: 'Follow us and discover upcoming trips',
    footerNav: ['Home', 'Routes & prices', 'Gallery', 'Questions'],
    legal:
      'Prices are in Mexican pesos. Subject to availability and sea conditions. Always follow the captain’s and Protected Natural Area’s guidance.',
    rights: 'Baja Spirit Adventures. All rights reserved.',
    float: 'WhatsApp quote',
  },
} as const;

const sectionHrefs = ['#experiencias', '#tours', '#nosotros', '#galeria', '#preguntas'];
const footerHrefs = ['#inicio', '#tours', '#galeria', '#preguntas'];
const featureIcons = [Anchor, ShieldCheck, Fish, UtensilsCrossed, MessageCircle, Compass];
const galleryImages = [
  '/images/group.webp',
  '/images/swim.webp',
  '/images/boat.webp',
  '/images/rock-group.webp',
  '/images/family.webp',
  '/images/couple.webp',
];

function whatsappLink(message: string) {
  return `https://wa.me/526121178086?text=${encodeURIComponent(message)}`;
}

export default function SiteClient() {
  const [language, setLanguage] = useState<Language>('es');
  const [menuOpen, setMenuOpen] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);
  const t = content[language];
  const genericWhatsApp = whatsappLink(
    language === 'es'
      ? 'Hola Baja Spirit Adventures, quiero cotizar un tour a Isla Espíritu Santo.'
      : 'Hello Baja Spirit Adventures, I would like a quote for an Espíritu Santo Island tour.',
  );

  useEffect(() => {
    const saved = window.localStorage.getItem('bsa-language');
    if (saved === 'es' || saved === 'en') setLanguage(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem('bsa-language', language);
  }, [language]);

  const toggleLanguage = () => setLanguage((current) => (current === 'es' ? 'en' : 'es'));

  const handleLeadSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '');
    const phone = String(data.get('phone') || '');
    const date = String(data.get('date') || '') || t.lead.noDate;
    const travelers = String(data.get('travelers') || '');
    const route = String(data.get('route') || '');
    const tripType = String(data.get('tripType') || '');
    const notes = String(data.get('notes') || '').trim();
    const message = language === 'es'
      ? [
          'Hola Héctor, quiero recibir información para organizar un tour con Baja Spirit Adventures.',
          '',
          `Nombre: ${name}`,
          `WhatsApp: ${phone}`,
          `Fecha aproximada: ${date}`,
          `Viajeros: ${travelers}`,
          `Ruta de interés: ${route}`,
          `Tipo de salida: ${tripType}`,
          notes ? `Comentarios: ${notes}` : '',
        ].filter(Boolean).join('\n')
      : [
          'Hello Héctor, I would like information to plan a tour with Baja Spirit Adventures.',
          '',
          `Name: ${name}`,
          `WhatsApp: ${phone}`,
          `Approximate date: ${date}`,
          `Travelers: ${travelers}`,
          `Route of interest: ${route}`,
          `Departure type: ${tripType}`,
          notes ? `Comments: ${notes}` : '',
        ].filter(Boolean).join('\n');

    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
    form.reset();
    setLeadOpen(false);
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TravelAgency',
            name: 'Baja Spirit Adventures',
            url: 'https://bajaspiritadventures.com',
            telephone: '+52-612-117-8086',
            description:
              'Tours en lancha a Isla Espíritu Santo desde La Paz, Baja California Sur, para familias y grupos.',
            priceRange: '$990–$1,500 MXN',
            image: 'https://bajaspiritadventures.com/images/hero.webp',
            logo: 'https://bajaspiritadventures.com/images/baja-spirit-symbol-transparent.png',
            areaServed: { '@type': 'Place', name: 'La Paz, Baja California Sur' },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'La Paz',
              addressRegion: 'Baja California Sur',
              addressCountry: 'MX',
            },
            sameAs: [
              'https://www.facebook.com/tourespiritusanto',
              'https://www.instagram.com/tourespiritusanto/',
            ],
            makesOffer: t.routes.map((route) => ({
              '@type': 'Offer',
              priceCurrency: 'MXN',
              price: route.price.replace(/[$,]/g, ''),
              itemOffered: { '@type': 'TouristTrip', name: `Tour ${route.name}` },
            })),
          }),
        }}
      />

      <section className="hero" id="inicio">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />

        <div className="topline">
          <span>{t.place}</span>
          <span className="topline-note">{t.topline}</span>
        </div>

        <nav className="nav-shell" aria-label={t.navAria}>
          <a className="brand" href="#inicio" aria-label="Baja Spirit Adventures">
            <span className="brand-symbol" aria-hidden="true">
              <img src="/images/baja-spirit-symbol-transparent.png" alt="" width="1535" height="1025" />
            </span>
            <span className="brand-name"><strong>BAJA SPIRIT</strong><small>ADVENTURES</small></span>
          </a>
          <div className="nav-links">
            {t.nav.map((item, index) => <a key={item} href={sectionHrefs[index]}>{item}</a>)}
          </div>
          <div className="nav-actions">
            <button className="lang-button" type="button" onClick={toggleLanguage} aria-label={t.langAria}>{t.langLabel}</button>
            <button className="nav-cta" type="button" onClick={() => setLeadOpen(true)}>
              <MessageCircle size={17} /> {t.reserve}
            </button>
            <button
              className="menu-button"
              type="button"
              aria-label={menuOpen ? t.mobileCloseAria : t.mobileAria}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="mobile-menu">
            {t.nav.map((item, index) => (
              <a key={item} href={sectionHrefs[index]} onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
            <a href={genericWhatsApp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> {t.quote}</a>
          </div>
        )}

        <div className="hero-content page-width">
          <p className="eyebrow"><span /> {t.eyebrow}</p>
          <h1>{t.heroLine1}<br /><em>{t.heroLine2}</em></h1>
          <p className="hero-copy">{t.heroCopy}</p>
          <div className="hero-actions">
            <button className="button-primary" type="button" onClick={() => setLeadOpen(true)}>
              <CalendarDays size={19} /> {t.lead.trigger}
            </button>
            <a className="button-ghost" href="#tours">{t.explore}</a>
          </div>
        </div>

        <aside className="hero-card">
          <div className="hero-card-top"><Sparkles size={17} /> {t.from}</div>
          <div className="hero-card-price"><strong>$990</strong><span>{t.perPerson}</span></div>
          <p>{t.threeRoutes}</p>
          <a href={genericWhatsApp} target="_blank" rel="noreferrer">{t.availability} <ArrowDownRight size={17} /></a>
        </aside>

        <div className="hero-proof page-width" aria-label="Tour details">
          {[Clock3, Users, ShieldCheck].map((Icon, index) => (
            <div key={t.proof[index][0]}><Icon size={18} /><span><small>{t.proof[index][0]}</small>{t.proof[index][1]}</span></div>
          ))}
        </div>
      </section>

      <section className="experience-preview page-width" id="experiencias">
        <div className="section-heading">
          <div><p className="kicker">{t.kicker}</p><h2>{t.experienceTitle}</h2></div>
          <p>{t.experienceLead}</p>
        </div>
        <div className="preview-grid">
          <article className="preview-card preview-card-wide">
            <img src="/images/hero.webp" alt="Navegación frente a la costa de Isla Espíritu Santo" />
            <div className="preview-overlay" />
            <div className="preview-copy">
              <span>{t.experienceCards[0].label}</span>
              <h3>{t.experienceCards[0].title}</h3>
              <p>{t.experienceCards[0].text}</p>
              <a href="#tours">{t.experienceCards[0].link} <ArrowDownRight size={18} /></a>
            </div>
          </article>
          <article className="preview-card">
            <img src="/images/group.webp" alt="Viajeros con chalecos salvavidas durante el recorrido" />
            <div className="preview-overlay" />
            <div className="preview-copy">
              <span>{t.experienceCards[1].label}</span>
              <h3>{t.experienceCards[1].title}</h3>
              <p>{t.experienceCards[1].text}</p>
              <a href="#como-funciona">{t.experienceCards[1].link} <ArrowDownRight size={18} /></a>
            </div>
          </article>
          <article className="preview-card preview-card-blue">
            <div className="card-icon"><Compass size={30} /></div>
            <div><span>{t.humanLabel}</span><h3>{t.humanTitle}</h3><p>{t.humanText}</p></div>
            <a href={genericWhatsApp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> {t.talkHector}</a>
          </article>
        </div>
      </section>

      <section className="routes-section" id="tours">
        <div className="page-width">
          <div className="routes-heading">
            <p className="kicker">{t.routesKicker}</p>
            <h2>{t.routesTitle}</h2>
            <p>{t.routesLead}</p>
          </div>
          <div className="route-grid">
            {t.routes.map((route) => {
              const routeWhatsApp = whatsappLink(
                language === 'es'
                  ? `Hola Baja Spirit Adventures, quiero cotizar la ruta ${route.name} de ${route.price} MXN por persona.`
                  : `Hello Baja Spirit Adventures, I would like a quote for the ${route.name} route at ${route.price} MXN per person.`,
              );
              return (
                <article className={`route-card ${'featured' in route && route.featured ? 'route-featured' : ''}`} key={route.name}>
                  <div className="route-image"><img src={route.image} alt={`Tour ${route.name}, Isla Espíritu Santo`} /><span>{route.badge}</span></div>
                  <div className="route-body">
                    <div className="route-title"><h3>{route.name}</h3><div><strong>{route.price}</strong><small>{t.priceSuffix}</small></div></div>
                    <p>{route.description}</p>
                    <ul>{route.features.map((feature) => <li key={feature}><Check size={16} />{feature}</li>)}</ul>
                    <p className="route-note">{route.note}</p>
                    <a href={routeWhatsApp} target="_blank" rel="noreferrer">{t.chooseRoute}<ArrowDownRight size={18} /></a>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="pricing-disclaimer"><ShieldCheck size={17} />{t.priceNote}</p>
        </div>
      </section>

      <section className="included-section page-width">
        <div className="included-heading"><p className="kicker">{t.includeKicker}</p><h2>{t.includeTitle}</h2></div>
        <div className="included-grid">
          {t.includes.map(([title, text], index) => {
            const Icon = featureIcons[index];
            return <article key={title}><span><Icon size={23} /></span><h3>{title}</h3><p>{text}</p></article>;
          })}
        </div>
      </section>

      <section className="about-section" id="nosotros">
        <div className="about-image"><img src="/images/rock-group.webp" alt="Grupo de viajeros de Baja Spirit Adventures en Isla Espíritu Santo" /></div>
        <div className="about-copy">
          <p className="kicker">{t.aboutKicker}</p>
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText1}</p><p>{t.aboutText2}</p>
          <blockquote>{t.aboutQuote}<cite>{t.aboutQuoteBy}</cite></blockquote>
          <a className="button-dark" href={genericWhatsApp} target="_blank" rel="noreferrer">{t.talkHector}<ArrowDownRight size={18} /></a>
        </div>
      </section>

      <section className="how-section page-width" id="como-funciona">
        <div className="how-heading"><p className="kicker">{t.howKicker}</p><h2>{t.howTitle}</h2></div>
        <ol className="step-grid">
          {t.steps.map(([title, text], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}
        </ol>
        <div className="operations-panel">
          <div><CalendarDays size={26} /><span><strong>{t.scheduleTitle}</strong><p>{t.scheduleText}</p></span></div>
          <div><Users size={26} /><span><strong>{t.capacityTitle}</strong><p>{t.capacityText}</p></span></div>
        </div>
      </section>

      <section className="gallery-section" id="galeria">
        <div className="page-width gallery-heading">
          <div><p className="kicker">{t.galleryKicker}</p><h2>{t.galleryTitle}</h2></div><p>{t.galleryLead}</p>
        </div>
        <div className="gallery-grid page-width">
          {galleryImages.map((image, index) => <figure key={image}><img src={image} alt={t.galleryAlts[index]} loading="lazy" /></figure>)}
        </div>
      </section>

      <section className="faq-section page-width" id="preguntas">
        <div className="faq-heading"><p className="kicker">{t.faqKicker}</p><h2>{t.faqTitle}</h2></div>
        <div className="faq-list">
          {t.faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary><span>{question}</span><ChevronDown size={21} /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="final-photo" aria-hidden="true" />
        <div className="page-width final-content">
          <p className="kicker">{t.finalKicker}</p>
          <h2>{t.finalTitle}</h2><p>{t.finalText}</p>
          <div><button className="button-primary" type="button" onClick={() => setLeadOpen(true)}><CalendarDays size={19} />{t.lead.trigger}</button><a href="tel:+526121178086">{t.call}</a></div>
        </div>
      </section>

      <footer>
        <div className="page-width footer-main">
          <div className="footer-brand">
            <a className="footer-logo-card" href="#inicio" aria-label="Baja Spirit Adventures">
              <img
                src="/images/baja-spirit-symbol-transparent.png"
                alt="Baja Spirit Adventures"
                width="1535"
                height="1025"
                loading="lazy"
              />
            </a>
            <p>{t.social}</p>
            <div className="social-links">
              <a href="https://www.facebook.com/tourespiritusanto" target="_blank" rel="noreferrer" aria-label="Facebook"><span aria-hidden="true">f</span></a>
              <a href="https://www.instagram.com/tourespiritusanto/" target="_blank" rel="noreferrer" aria-label="Instagram"><span aria-hidden="true">◎</span></a>
              <a href={genericWhatsApp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={20} /></a>
            </div>
          </div>
          <div className="footer-links">{t.footerNav.map((item, index) => <a key={item} href={footerHrefs[index]}>{item}</a>)}</div>
          <div className="footer-contact"><span><MapPin size={17} />La Paz, Baja California Sur</span><a href="tel:+526121178086">+52 612 117 8086</a><a href={genericWhatsApp} target="_blank" rel="noreferrer">WhatsApp</a></div>
        </div>
        <div className="page-width footer-legal"><span>© {new Date().getFullYear()} {t.rights}</span><span>{t.legal}</span></div>
      </footer>

      <Dialog open={leadOpen} onOpenChange={setLeadOpen}>
        <DialogContent className="lead-dialog" showCloseButton={false}>
          <DialogClose className="lead-dialog-close" aria-label={t.lead.close}>
            <X size={20} />
          </DialogClose>
          <div className="lead-dialog-shell">
            <aside className="lead-dialog-brand">
              <img src="/images/baja-spirit-symbol-transparent.png" alt="" width="1535" height="1025" aria-hidden="true" />
              <div>
                <p>{t.lead.eyebrow}</p>
                <h3>Baja Spirit<br />Adventures</h3>
                <ul>
                  {t.lead.benefits.map((benefit) => <li key={benefit}><Check size={16} />{benefit}</li>)}
                </ul>
              </div>
            </aside>
            <div className="lead-dialog-form-panel">
              <DialogHeader className="lead-dialog-header">
                <DialogTitle>{t.lead.title}</DialogTitle>
                <DialogDescription>{t.lead.description}</DialogDescription>
              </DialogHeader>
              <form className="lead-form" onSubmit={handleLeadSubmit}>
                <label className="lead-field">
                  <span>{t.lead.name}</span>
                  <input name="name" type="text" autoComplete="name" placeholder={t.lead.namePlaceholder} required />
                </label>
                <label className="lead-field">
                  <span>{t.lead.phone}</span>
                  <input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder={t.lead.phonePlaceholder} required />
                </label>
                <label className="lead-field">
                  <span>{t.lead.date}</span>
                  <input name="date" type="date" />
                </label>
                <label className="lead-field">
                  <span>{t.lead.travelers}</span>
                  <input name="travelers" type="number" inputMode="numeric" min="1" max="17" placeholder="2" required />
                </label>
                <label className="lead-field">
                  <span>{t.lead.route}</span>
                  <select name="route" defaultValue="" required>
                    <option value="" disabled>{t.lead.routePlaceholder}</option>
                    {t.routes.map((route) => <option key={route.name} value={route.name}>{route.name} · {route.price} MXN</option>)}
                  </select>
                </label>
                <label className="lead-field">
                  <span>{t.lead.tripType}</span>
                  <select name="tripType" defaultValue={t.lead.shared} required>
                    <option value={t.lead.shared}>{t.lead.shared}</option>
                    <option value={t.lead.private}>{t.lead.private}</option>
                  </select>
                </label>
                <label className="lead-field lead-field-full">
                  <span>{t.lead.notes}</span>
                  <textarea name="notes" rows={3} placeholder={t.lead.notesPlaceholder} />
                </label>
                <button className="lead-submit" type="submit"><MessageCircle size={19} />{t.lead.submit}</button>
                <p className="lead-privacy"><ShieldCheck size={15} />{t.lead.privacy}</p>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <a className="floating-whatsapp" href={genericWhatsApp} target="_blank" rel="noreferrer" aria-label={t.float}><MessageCircle size={22} /><span>{t.float}</span></a>
    </main>
  );
}
