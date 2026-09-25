type stat_props = {
  label: string;
  value: React.ReactNode;
};

export function Stat({ label, value }: stat_props) {
  return (
    <div className="stat">
      <dt className="stat__label">{label}</dt>
      <dd className="stat__value">{value}</dd>
    </div>
  );
}
