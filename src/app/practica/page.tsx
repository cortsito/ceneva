import { PagePlaceholder } from "@/components/ui/page-placeholder";

export const metadata = { title: "práctica" };

export default function PracticePage() {
  return (
    <PagePlaceholder
      action={{ href: "/simulacro", label: "ver simulacros" }}
      description="aquí podrás responder preguntas por tema y retomar errores pendientes de repaso."
      eyebrow="práctica"
      title="convierte errores en una siguiente acción."
    />
  );
}
