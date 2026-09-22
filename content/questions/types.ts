export type question_use_case = 'diagnostic' | 'practice' | 'review' | 'simulator'

export type question = {
  id: string
  topic_id: string
  stimulus?: string
  prompt: string
  options: string[]
  correct_option_index: number
  explanation: string
  common_error?: string
  source_reference?: string
  difficulty: 'basic' | 'intermediate' | 'advanced'
  use_cases: question_use_case[]
}
