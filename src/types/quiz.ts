interface Option {
    optionId: number,
    selectionName: string,
    description: string,
    questionId: number
}

interface Question {
    questionId: number,
    question: string,
    answer: string
}

interface Quiz {
    id: Number
	quizName: String
	quizTag: String
	hostedNum: Number
	createdDate: Date
	author: String
	status: "Draft" | "Published" | "Archieve"
    questionList: Question[]
}

interface QuestionPreviewCard {
    id: Number,
    title: String,
    questionId: Number,
    isSelected: Boolean
}

export type { Option, Question, Quiz, QuestionPreviewCard };