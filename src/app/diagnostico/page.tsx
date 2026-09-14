import { PagePlaceholder } from "@/components/ui/page-placeholder";

export const metadata = { title: "diagnóstico" };

export default function DiagnosticPage() {
  return (
    <PagePlaceholder
      action={{ href: "/ruta", label: "ver mi ruta" }}
      description="el diagnóstico breve ordenará un punto de partida por área; no será una calificación oficial."
      eyebrow="diagnóstico"
      title="identifica qué estudiar primero."
    />
  );
}
