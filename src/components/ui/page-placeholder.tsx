import Link from "next/link";

import { Eyebrow } from "@/components/ui/eyebrow";

type page_placeholder_props = {
  eyebrow: string;
  title: string;
  description: string;
  action?: {
    href: string;
    label: string;
  };
};

export function PagePlaceholder({
  eyebrow,
  title,
  description,
  action,
}: page_placeholder_props) {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <Eyebrow>{eyebrow}</Eyebrow>
      <div className="space-y-4">
        <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="max-w-xl text-lg leading-8 text-ink-muted">{description}</p>
      </div>
      {action ? (
        <Link
          className="w-fit rounded-md bg-accent px-4 py-3 text-sm font-semibold text-accent-contrast transition-colors hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          href={action.href}
        >
          {action.label}
        </Link>
      ) : null}
    </section>
  );
}
