import Link from "next/link";

import { primary_navigation } from "@/lib/navigation";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          className="shrink-0 text-lg font-semibold tracking-tight text-slate-950"
          href="/"
        >
          ceneva
        </Link>
        <nav aria-label="navegación principal" className="min-w-0 overflow-x-auto">
          <ul className="flex min-w-max items-center gap-1">
            {primary_navigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="block rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
