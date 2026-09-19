import { PagePlaceholder } from "@/components/ui/page-placeholder";

export const metadata = { title: "bienvenida" };

export default function OnboardingPage() {
  return (
    <PagePlaceholder
      action={{ href: "/diagnostico", label: "Ir al diagnóstico" }}
      description="Aquí se definirá tu meta de estudio y se ofrecerá un diagnóstico inicial opcional."
      eyebrow="Primeros pasos"
      title="Prepara una ruta que se adapte a ti."
    />
  );
}
