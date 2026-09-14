import { PagePlaceholder } from "@/components/ui/page-placeholder";

type topic_page_props = {
  params: Promise<{ "topic-id": string }>;
};

export default async function TopicPracticePage({ params }: topic_page_props) {
  await params;

  return (
    <PagePlaceholder
      description="esta práctica usará únicamente las preguntas vinculadas al tema seleccionado."
      eyebrow="práctica por tema"
      title="refuerza un tema específico."
    />
  );
}
