type stat_props = {
  label: string;
  value: React.ReactNode;
};

export function Stat({ label, value }: stat_props) {
  return (
    <div>
      <dt className="text-[0.68rem] font-bold tracking-[0.12em] text-ink-subtle uppercase">
        {label}
      </dt>
      <dd className="mt-1 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
        {value}
      </dd>
    </div>
  );
}
