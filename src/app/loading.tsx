export default function Loading() {
  return (
    <div className="route-loading" role="status" aria-live="polite">
      <span className="route-loading__bar" aria-hidden="true" />
      <span className="sr-only">Cargando contenido.</span>
    </div>
  );
}
