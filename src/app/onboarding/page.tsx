import { PagePlaceholder } from "@/components/ui/page-placeholder";

export const metadata = { title: "bienvenida" };

export default function OnboardingPage() {
  return (
    <PagePlaceholder
      action={{ href: "/diagnostico", label: "ir al diagnóstico" }}
      description="aquí se definirá tu meta de estudio y se ofrecerá un diagnóstico inicial opcional."
      eyebrow="primeros pasos"
      title="prepara una ruta que se adapte a ti."
    />
  );
}
