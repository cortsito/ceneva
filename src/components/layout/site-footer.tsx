import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          <span className="font-display text-base font-semibold text-ink">Ceneva</span>
          {" · Guía de estudio para el Acuerdo 286"}
        </p>
        <Link
          className="w-fit font-medium text-ink underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          href="/recursos"
        >
          Recursos
        </Link>
      </div>
    </footer>
  );
}
