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
    <section className="reading-shell flex flex-col gap-6">
      <Eyebrow>{eyebrow}</Eyebrow>
      <div className="space-y-4">
        <h1 className="page-heading">{title}</h1>
        <p className="page-intro">{description}</p>
      </div>
      {action ? (
        <Link className="button-primary sm:w-fit" href={action.href}>
          {action.label}
        </Link>
      ) : null}
    </section>
  );
}
