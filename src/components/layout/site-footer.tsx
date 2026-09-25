import Link from "next/link";

type icon_props = {
  className?: string;
};

function WebsiteIcon({ className }: icon_props) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.5 4 5.6 4 9s-1.4 6.5-4 9c-2.6-2.5-4-5.6-4-9s1.4-6.5 4-9Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: icon_props) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6.5 8.4H3.2V19h3.3V8.4ZM4.85 3A1.92 1.92 0 1 0 4.85 6.84 1.92 1.92 0 0 0 4.85 3ZM19.4 12.92c0-3.2-1.71-4.69-4-4.69a3.45 3.45 0 0 0-3.13 1.72V8.4H9V19h3.3v-5.25c0-1.38.26-2.72 1.98-2.72 1.7 0 1.72 1.59 1.72 2.81V19h3.3l.1-6.08Z" />
    </svg>
  );
}

function CoffeeIcon({ className }: icon_props) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      <path d="M5 8h12v5.5a5.5 5.5 0 0 1-5.5 5.5h-1A5.5 5.5 0 0 1 5 13.5V8Z" />
      <path d="M17 10h1a3 3 0 0 1 0 6h-2M7 4v1M11 3v2M15 4v1M4 21h15" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      aria-hidden="true"
      className="site-footer__external-icon"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      <path d="M14 5h5v5M19 5l-8 8M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

const social_links = [
  {
    href: "https://corshex.com",
    label: "corshex.com",
    description: "Sitio personal",
    Icon: WebsiteIcon,
  },
  {
    href: "https://www.linkedin.com/in/corshex",
    label: "LinkedIn",
    description: "/in/corshex",
    Icon: LinkedinIcon,
  },
  {
    href: "https://ko-fi.com/corshex",
    label: "Invítame un café",
    description: "Apoya el proyecto",
    Icon: CoffeeIcon,
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__identity">
          <Link className="site-footer__brand" href="/">
            Ceneva
          </Link>
          <p>Una guía de estudio independiente para el Acuerdo 286.</p>
        </div>

        <nav aria-label="enlaces de Corshex" className="site-footer__links">
          {social_links.map(({ href, label, description, Icon }) => (
            <a
              className="site-footer__social-link"
              href={href}
              key={href}
              rel="noreferrer"
              target="_blank"
            >
              <Icon className="site-footer__social-icon" />
              <span>
                <strong>{label}</strong>
                <small>{description}</small>
              </span>
              <ExternalIcon />
            </a>
          ))}
        </nav>
      </div>
      <div className="site-footer__meta">
        <p>Ceneva no está afiliada a Ceneval.</p>
        <p>Creado por Corshex.</p>
      </div>
    </footer>
  );
}
