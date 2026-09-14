import { PagePlaceholder } from "@/components/ui/page-placeholder";

type lesson_page_props = {
  params: Promise<{ "lesson-id": string }>;
};

export default async function LessonPage({ params }: lesson_page_props) {
  await params;

  return (
    <PagePlaceholder
      description="esta ruta renderizará una lección breve con explicación, ejemplo, práctica guiada y comprobación."
      eyebrow="lección"
      title="aprende y comprueba."
    />
  );
}
