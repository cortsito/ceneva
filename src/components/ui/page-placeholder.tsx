import Link from "next/link";

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
      <p className="text-sm font-semibold tracking-wide text-teal-800">{eyebrow}</p>
      <div className="space-y-4">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          {title}
        </h1>
        <p className="max-w-xl text-lg leading-8 text-slate-600">{description}</p>
      </div>
      {action ? (
        <Link
          className="w-fit rounded-md bg-teal-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          href={action.href}
        >
          {action.label}
        </Link>
      ) : null}
    </section>
  );
}
