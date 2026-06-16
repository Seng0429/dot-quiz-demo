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

export type { Option, Question, Quiz };