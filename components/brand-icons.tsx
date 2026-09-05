import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

export function FacebookIcon({ title, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} role={title ? 'img' : undefined} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M14.2 8.2h3V4.4a18 18 0 0 0-2.7-.2c-2.7 0-4.6 1.7-4.6 4.8v2.7H7v4.2h2.9V24h4.3v-8.1h3.5l.6-4.2h-4.1V9.4c0-.8.2-1.2 1.3-1.2Z" fill="currentColor" />
    </svg>
  );
}

export function InstagramIcon({ title, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} role={title ? 'img' : undefined} {...props}>
      {title ? <title>{title}</title> : null}
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.4" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function WhatsAppIcon({ title, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden={title ? undefined : true} role={title ? 'img' : undefined} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L4 20l1.1-4a8.2 8.2 0 1 1 15.1-4.3Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 8.1c.2-.5.4-.5.8-.5h.5c.2 0 .4.1.5.4l.8 2c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .7.7 1.2 1.7 2.1 3 2.7.3.2.5.1.7-.1l.8-1c.2-.3.4-.3.7-.2l1.9.9c.3.1.4.3.4.5 0 .5-.2 1.5-.7 2-.6.6-1.5.9-2.4.8-1.3-.2-3.1-.8-4.8-2.3-1.4-1.3-2.5-2.9-2.8-4.2-.3-1.2.1-2.4.5-3.1Z" fill="currentColor" />
    </svg>
  );
}
