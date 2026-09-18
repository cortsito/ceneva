import Link from "next/link";

import { primary_navigation } from "@/lib/navigation";

import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface">
      <div className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3 sm:flex-nowrap sm:px-6 lg:px-8">
        <Link className="flex shrink-0 items-baseline gap-3" href="/">
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            Ceneva
          </span>
          <span className="hidden text-xs font-medium tracking-wide text-ink-muted sm:inline">
            Guía de estudio · Acuerdo 286
          </span>
        </Link>
        <div className="flex w-full flex-wrap items-center justify-between gap-3 sm:w-auto sm:justify-end">
          <nav aria-label="Navegación principal" className="min-w-0">
            <ul className="flex flex-wrap items-center gap-1">
              {primary_navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="block rounded-md px-1.5 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-accent-soft hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-3"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
