import { notFound } from "next/navigation";

import { LessonView } from "@/features/lesson/lesson-view";
import { get_available_lesson } from "@/features/lesson/unit-lessons";

type lesson_page_props = {
  params: Promise<{ "lesson-id": string }>;
};

export default async function LessonPage({ params }: lesson_page_props) {
  const { "lesson-id": lesson_id } = await params;
  const lesson = await get_available_lesson(lesson_id);

  if (!lesson) {
    notFound();
  }

  return <LessonView lesson={lesson} />;
}
