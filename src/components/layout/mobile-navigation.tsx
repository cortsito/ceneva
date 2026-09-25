"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <div className="mobile-navigation">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={is_open}
        aria-label={is_open ? "Cerrar menú" : "Abrir menú"}
        className="mobile-navigation__toggle"
        onClick={() => set_is_open((current) => !current)}
        type="button"
      >
        <MenuIcon is_open={is_open} />
      </button>
      {is_open ? (
        <div className="mobile-navigation__panel" id="mobile-navigation">
          <nav aria-label="Navegación móvil">
            <ul className="mobile-navigation__list">
              {primary_navigation.map((item, index) => (
                <li
                  className={
                    index === primary_navigation.length - 1
                      ? "mobile-navigation__item--wide"
                      : ""
                  }
                  key={item.href}
                >
                  <Link
                    aria-current={
                      pathname === item.href ||
                      (item.href !== "/" && pathname.startsWith(`${item.href}/`))
                        ? "page"
                        : undefined
                    }
                    className="mobile-navigation__link"
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
