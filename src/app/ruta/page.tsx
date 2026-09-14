import { PagePlaceholder } from "@/components/ui/page-placeholder";

export const metadata = { title: "mi ruta" };

export default function RoutePage() {
  return (
    <PagePlaceholder
      action={{ href: "/practica", label: "ir a práctica" }}
      description="esta pantalla mostrará las áreas, unidades, temas y la siguiente lección recomendada."
      eyebrow="mi ruta"
      title="avanza tema por tema."
    />
  );
}
