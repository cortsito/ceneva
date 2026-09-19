type index_list_props = {
  aria_label: string;
  children: React.ReactNode;
};

export function IndexList({ aria_label, children }: index_list_props) {
  return (
    <ol aria-label={aria_label} className="divide-y divide-line border-y border-line">
      {children}
    </ol>
  );
}

type index_item_props = {
  index: number;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  status?: React.ReactNode;
  children?: React.ReactNode;
};

export function IndexItem({
  index,
  eyebrow,
  title,
  status,
  children,
}: index_item_props) {
  return (
    <li>
      <article className="py-8 sm:py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div className="flex gap-4 sm:gap-6">
            <span
              aria-hidden="true"
              className="font-display text-xl text-ink-muted/70 sm:text-2xl"
            >
              {String(index).padStart(2, "0")}
            </span>
            <div className="space-y-1">
              <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                {eyebrow}
              </p>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {title}
              </h2>
            </div>
          </div>
          {status}
        </div>
        {children ? (
          <div className="mt-5 space-y-4 sm:ml-[calc(1.5rem+1.5rem)]">{children}</div>
        ) : null}
      </article>
    </li>
  );
}
