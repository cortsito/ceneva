"use client";

import { useState } from "react";
import Link from "next/link";

import { primary_navigation } from "@/lib/navigation";

function MenuIcon({ is_open }: { is_open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      {is_open ? (
        <path d="M6 6l12 12M18 6 6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

export function MobileNavigation() {
  const [is_open, set_is_open] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={is_open}
        aria-label={is_open ? "Cerrar menú" : "Abrir menú"}
        className="grid size-10 place-items-center rounded-xl border border-line bg-surface-raised text-ink transition-colors hover:border-accent hover:bg-accent-soft"
        onClick={() => set_is_open((current) => !current)}
        type="button"
      >
        <MenuIcon is_open={is_open} />
      </button>
      {is_open ? (
        <div
          className="absolute top-full right-0 left-0 border-b border-line bg-surface p-3 shadow-[var(--shadow-md)]"
          id="mobile-navigation"
        >
          <nav aria-label="Navegación móvil">
            <ul className="grid grid-cols-2 gap-2">
              {primary_navigation.map((item, index) => (
                <li
                  className={
                    index === primary_navigation.length - 1 ? "col-span-2" : ""
                  }
                  key={item.href}
                >
                  <Link
                    className="flex min-h-12 items-center justify-between rounded-xl border border-line bg-surface-raised px-4 text-sm font-semibold text-ink transition-colors hover:border-accent hover:bg-accent-soft"
                    href={item.href}
                    onClick={() => set_is_open(false)}
                  >
                    {item.label}
                    <span aria-hidden="true" className="text-accent">
                      ↗
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
