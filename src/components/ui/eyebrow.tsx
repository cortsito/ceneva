type eyebrow_props = {
  children: React.ReactNode;
};

export function Eyebrow({ children }: eyebrow_props) {
  return (
    <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
      {children}
    </p>
  );
}
