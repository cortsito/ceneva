import Link from "next/link";

import { primary_navigation } from "@/lib/navigation";

import { MobileNavigation } from "./mobile-navigation";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur-md">
      <div className="relative mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto] items-center gap-3 px-4 sm:px-6 md:grid-cols-[auto_1fr_auto] lg:px-8">
        <Link className="flex min-w-0 items-baseline gap-3" href="/">
          <span className="font-display text-xl font-semibold tracking-[-0.03em] text-ink">
            Ceneva
          </span>
          <span className="hidden truncate text-[0.68rem] font-semibold tracking-[0.08em] text-ink-subtle uppercase xl:inline">
            Guía de estudio · Acuerdo 286
          </span>
        </Link>
        <nav
          aria-label="Navegación principal"
          className="hidden justify-self-center md:block"
        >
          <ul className="flex items-center gap-0.5 rounded-xl border border-line bg-surface-raised p-1">
            {primary_navigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="block rounded-lg px-2.5 py-2 text-[0.82rem] font-semibold text-ink-muted transition-colors hover:bg-accent-soft hover:text-ink lg:px-3.5"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-end gap-2">
          <ThemeToggle />
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
