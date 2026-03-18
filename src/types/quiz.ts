interface Option {
    optionId: number,
    selectionName: string,
    description: string,
}

interface Question {
    questionId: number,
    question: string,
    option: Option[],
    answer: string
}

export type { Option, Question };