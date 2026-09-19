import Link from "next/link";

import { Eyebrow } from "@/components/ui/eyebrow";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <Eyebrow>404</Eyebrow>
      <div className="space-y-4">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          No encontramos esta página.
        </h1>
        <p className="max-w-xl text-lg leading-8 text-ink-muted">
          Revisa la dirección o vuelve a la ruta de estudio disponible.
        </p>
      </div>
      <Link
        className="w-fit rounded-md bg-accent px-4 py-3 text-sm font-semibold text-accent-contrast transition-colors hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        href="/ruta"
      >
        Ir a mi ruta
      </Link>
    </section>
  );
}
