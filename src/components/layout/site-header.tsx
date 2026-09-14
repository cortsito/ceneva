import Link from "next/link";

import { primary_navigation } from "@/lib/navigation";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center gap-x-6 gap-y-1 px-4 py-2 sm:flex-nowrap sm:px-6 lg:px-8">
        <Link
          className="shrink-0 text-lg font-semibold tracking-tight text-slate-950"
          href="/"
        >
          ceneva
        </Link>
        <nav aria-label="navegación principal" className="w-full sm:min-w-0 sm:w-auto">
          <ul className="flex flex-wrap items-center gap-1 sm:min-w-max">
            {primary_navigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="block rounded-md px-1.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 sm:px-3"
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
