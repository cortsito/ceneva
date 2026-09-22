type index_list_props = {
  aria_label: string;
  children: React.ReactNode;
};

export function IndexList({ aria_label, children }: index_list_props) {
  return (
    <ol
      aria-label={aria_label}
      className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow-sm)]"
    >
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
      <article className="p-5 sm:p-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div className="flex gap-4 sm:gap-6">
            <span
              aria-hidden="true"
              className="pt-0.5 font-mono text-sm font-bold text-ink-subtle sm:text-base"
            >
              {String(index).padStart(2, "0")}
            </span>
            <div className="space-y-1">
              <p className="text-[0.68rem] font-extrabold tracking-[0.16em] text-accent uppercase">
                {eyebrow}
              </p>
              <h2 className="font-display text-2xl font-semibold tracking-[-0.025em] text-ink sm:text-3xl">
                {title}
              </h2>
            </div>
          </div>
          {status}
        </div>
        {children ? <div className="mt-5 space-y-4 sm:ml-11">{children}</div> : null}
      </article>
    </li>
  );
}
