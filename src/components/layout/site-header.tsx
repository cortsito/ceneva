import Link from "next/link";

import { MobileNavigation } from "./mobile-navigation";
import { PrimaryNavigation } from "./primary-navigation";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-brand" href="/">
          <span className="site-brand__name">Ceneva</span>
          <span className="site-brand__descriptor">Guía de estudio · Acuerdo 286</span>
        </Link>
        <PrimaryNavigation />
        <div className="site-header__actions">
          <ThemeToggle />
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
