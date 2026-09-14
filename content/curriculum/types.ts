export type curriculum_reference = {
  guide: 'docs/guiaoficial.pdf'
  pages: number[]
  code: string
}

export type curriculum_topic = {
  id: string
  title: string
  lesson_ids: string[]
  source: curriculum_reference
}

export type curriculum_unit = {
  id: string
  title: string
  source: curriculum_reference
  topics: curriculum_topic[]
}

export type curriculum_area = {
  id: string
  title: string
  description: string
  source: curriculum_reference
  units: curriculum_unit[]
}


