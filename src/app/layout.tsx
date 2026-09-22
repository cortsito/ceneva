import type { Metadata } from "next";
import Script from "next/script";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { create_theme_boot_script } from "@/lib/theme/theme-boot-script";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ceneva",
    template: "%s | Ceneva",
  },
  description:
    "Guía de estudio interactiva para acreditar el bachillerato por el Acuerdo 286.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-canvas text-ink">
        <Script
          dangerouslySetInnerHTML={{ __html: create_theme_boot_script() }}
          id="ceneva-theme-boot"
          strategy="beforeInteractive"
        />
        <a
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface-raised focus:px-4 focus:py-3 focus:font-semibold focus:text-ink focus:shadow-lg"
          href="#contenido-principal"
        >
          Saltar al contenido principal
        </a>
        <SiteHeader />
        <main className="flex-1 bg-canvas text-ink" id="contenido-principal">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
