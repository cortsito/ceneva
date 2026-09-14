import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ceneva",
    template: "%s | ceneva",
  },
  description:
    "guía de estudio interactiva para acreditar el bachillerato por acuerdo 286.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <body className="flex min-h-screen flex-col">
        <a
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:font-semibold focus:text-slate-950 focus:shadow-lg"
          href="#contenido-principal"
        >
          saltar al contenido principal
        </a>
        <SiteHeader />
        <main className="flex-1" id="contenido-principal">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
