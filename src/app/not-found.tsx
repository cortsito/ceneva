import Link from "next/link";

import { Eyebrow } from "@/components/ui/eyebrow";

export default function NotFound() {
  return (
    <section className="reading-shell flex flex-col gap-6">
      <Eyebrow>404</Eyebrow>
      <div className="space-y-4">
        <h1 className="page-heading">No encontramos esta página.</h1>
        <p className="page-intro">
          Revisa la dirección o vuelve a la ruta de estudio disponible.
        </p>
      </div>
      <Link className="button-primary sm:w-fit" href="/ruta">
        Ir a mi ruta
      </Link>
    </section>
  );
}
