type eyebrow_props = {
  children: React.ReactNode;
};

export function Eyebrow({ children }: eyebrow_props) {
  return (
    <p className="text-[0.7rem] font-extrabold tracking-[0.18em] text-accent uppercase">
      {children}
    </p>
  );
}
