import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, ShieldCheck } from 'lucide-react';

const privacyUrl = 'https://conchalitotours.com/aviso-de-privacidad';

export const metadata: Metadata = {
  title: 'Aviso de privacidad',
  description:
    'Aviso de privacidad integral de Conchalito Tours para visitantes y personas interesadas en recorridos a Balandra e Isla Espíritu Santo.',
  alternates: { canonical: privacyUrl },
  robots: { index: true, follow: true },
};

export default function PrivacyNoticePage() {
  return (
    <main className="privacy-page">
      <header className="privacy-header">
        <Link className="privacy-brand" href="/" aria-label="Ir al inicio de Conchalito Tours">
          <img src="/images/conchalito-symbol-transparent.png" alt="" width="1536" height="1024" />
          <span><strong>Conchalito</strong><small>Tours</small></span>
        </Link>
        <Link className="privacy-back" href="/"><ArrowLeft size={18} /> Volver al sitio</Link>
      </header>

      <article className="privacy-document">
        <p className="privacy-eyebrow"><ShieldCheck size={17} /> Información clara y responsable</p>
        <h1>Aviso de privacidad</h1>
        <p className="privacy-updated">Última actualización: 4 de septiembre de 2026</p>
        <p className="privacy-intro">
          En Conchalito Tours respetamos tu privacidad. Este aviso explica qué información puede compartirse al solicitar una cotización o comunicarse con nosotros, para qué se utiliza y cómo puedes ejercer tus derechos sobre ella.
        </p>

        <section>
          <h2>1. Identidad y domicilio del responsable</h2>
          <p><strong>Conchalito Tours, operado por el Capitán Héctor Parra</strong>, es responsable del tratamiento de los datos personales relacionados con la atención y contratación de sus servicios.</p>
          <p className="privacy-contact"><MapPin size={18} /> Nahvyla Yachts, Antonio Navarro y Topete, Playa S/N-C, Zona Central, C.P. 23000, La Paz, Baja California Sur, México.</p>
          <p className="privacy-contact"><Mail size={18} /> <a href="mailto:toursespiritusanto@gmail.com">toursespiritusanto@gmail.com</a></p>
        </section>

        <section>
          <h2>2. Datos personales que pueden tratarse</h2>
          <p>Al solicitar información o una cotización pueden utilizarse: nombre, número de teléfono o WhatsApp, correo electrónico cuando decidas escribir por ese medio, fecha aproximada del viaje, número de viajeros, ruta y tipo de salida de interés, así como los comentarios que compartas voluntariamente.</p>
          <p>No solicitamos datos personales sensibles a través de este sitio. Te pedimos no incluir información médica, financiera, identificaciones oficiales u otros datos sensibles en el campo de comentarios.</p>
        </section>

        <section>
          <h2>3. Finalidades del tratamiento</h2>
          <ul>
            <li>Responder solicitudes de información, disponibilidad y cotización.</li>
            <li>Recomendar una ruta y organizar la salida solicitada.</li>
            <li>Dar seguimiento antes, durante y después del servicio.</li>
            <li>Atender dudas, cambios, cancelaciones o solicitudes relacionadas con la reservación.</li>
            <li>Cumplir obligaciones comerciales, fiscales, de seguridad y legales aplicables.</li>
          </ul>
          <p>No utilizaremos tus datos para campañas publicitarias distintas a la conversación iniciada por ti sin solicitar previamente el consentimiento correspondiente.</p>
        </section>

        <section>
          <h2>4. Cómo funciona el formulario del sitio</h2>
          <p>El formulario de planeación organiza la información que escribes y abre WhatsApp para que tú decidas enviarla. El sitio web no conserva por sí mismo una base de datos con ese formulario. Una vez enviado el mensaje, la información será tratada en la cuenta de WhatsApp de Conchalito Tours y conforme a las condiciones y políticas de Meta.</p>
          <p>El navegador puede guardar localmente tu preferencia de idioma. Esta preferencia no permite identificarte y puedes eliminarla desde la configuración de tu navegador.</p>
        </section>

        <section>
          <h2>5. Servicios de terceros y transferencias</h2>
          <p>Al usar WhatsApp, el mapa de Google o los enlaces a Facebook e Instagram, esos proveedores pueden recibir información técnica o los datos que decidas compartir. También pueden intervenir proveedores de alojamiento, seguridad y funcionamiento del sitio. Cada tercero trata la información conforme a sus propias políticas y puede procesarla fuera de México.</p>
          <p>Conchalito Tours no vende ni renta datos personales. Solo se comunicarán cuando sea necesario para prestar el servicio solicitado, cumplir una obligación legal o cuando exista tu consentimiento.</p>
        </section>

        <section>
          <h2>6. Derechos ARCO, revocación y limitación</h2>
          <p>Puedes solicitar el acceso, rectificación, cancelación u oposición al tratamiento de tus datos, así como revocar tu consentimiento o limitar su uso. Envía tu solicitud a <a href="mailto:toursespiritusanto@gmail.com?subject=Solicitud%20de%20derechos%20ARCO">toursespiritusanto@gmail.com</a> con el asunto <strong>“Solicitud de derechos ARCO”</strong>.</p>
          <p>Incluye tu nombre, un medio para recibir respuesta, la descripción clara del derecho que deseas ejercer y de los datos relacionados, así como los documentos necesarios para acreditar tu identidad o representación. La solicitud será atendida dentro de los plazos previstos por la legislación aplicable.</p>
        </section>

        <section>
          <h2>7. Conservación y seguridad</h2>
          <p>La información se conservará únicamente durante el tiempo necesario para atender la solicitud, prestar el servicio, cumplir obligaciones aplicables y resolver posibles aclaraciones. Se aplican medidas razonables para protegerla contra pérdida, alteración, uso o acceso no autorizado.</p>
        </section>

        <section>
          <h2>8. Cambios al aviso</h2>
          <p>Las modificaciones a este aviso se publicarán en esta misma dirección, indicando la fecha de actualización. Te recomendamos consultarlo antes de volver a compartir información personal.</p>
        </section>

        <aside className="privacy-note">
          <strong>Marco de referencia</strong>
          <p>Este aviso considera la Ley Federal de Protección de Datos Personales en Posesión de los Particulares vigente. Puedes consultar el texto oficial en la <a href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf" target="_blank" rel="noreferrer">Cámara de Diputados</a>.</p>
        </aside>
      </article>
    </main>
  );
}
