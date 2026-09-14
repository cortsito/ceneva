import { notFound } from "next/navigation";

import { PilotLesson } from "@/features/lesson/pilot-lesson";
import { get_pilot_lesson } from "@/features/lesson/pilot-lessons";

type lesson_page_props = {
  params: Promise<{ "lesson-id": string }>;
};

export default async function LessonPage({ params }: lesson_page_props) {
  const { "lesson-id": lesson_id } = await params;
  const lesson = await get_pilot_lesson(lesson_id);

  if (!lesson) {
    notFound();
  }

  return <PilotLesson lesson={lesson} />;
}
