type stat_props = {
  label: string;
  value: React.ReactNode;
};

export function Stat({ label, value }: stat_props) {
  return (
    <div>
      <dt className="text-xs font-medium tracking-wide text-ink-muted uppercase">
        {label}
      </dt>
      <dd className="mt-1 font-display text-xl font-semibold text-ink sm:text-2xl">
        {value}
      </dd>
    </div>
  );
}
