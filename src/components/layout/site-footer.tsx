import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>Ceneva · Guía de estudio para el Acuerdo 286</p>
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
