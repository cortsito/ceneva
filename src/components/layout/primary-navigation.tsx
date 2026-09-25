"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { primary_navigation } from "@/lib/navigation";

function is_active_path(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function PrimaryNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Navegación principal" className="primary-navigation">
      <ul className="primary-navigation__list">
        {primary_navigation.map((item) => {
          const is_active = is_active_path(pathname, item.href);

          return (
            <li key={item.href}>
              <Link
                aria-current={is_active ? "page" : undefined}
                className="primary-navigation__link"
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
