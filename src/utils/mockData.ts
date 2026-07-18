import { Question, Option } from "@/types/quiz"

const mockQuestionList: Question[] = [
    {
        questionId: 0,
        question: 'What is the capital of France?',
        answer: 'B',
    },
    {
        questionId: 1,
        question: 'What is the capital of France?',
        answer: 'B',
    }
]

const mockOptionList: Option[] = [
    {
        optionId: 0,
        selectionName: 'A',
        description: 'Sample1',
        questionId: 0
    },
    {
        optionId: 1,
        selectionName: 'B',
        description: 'Sample2',
        questionId: 0
    },
    {
        optionId: 2,
        selectionName: 'C',
        description: 'Sample3',
        questionId: 0
    },
    {
        optionId: 3,
        selectionName: 'D',
        description: 'Sample4',
        questionId: 0
    }
]

const mockQuizList = [
    { id: 1, quizTitle: "Advanced Neural Networks", quizTag: "Technology", quizInfo1: "Created 1 day ago", quizInfo2: "Hosted 1 time", quizQuestionsNumTotal: 10 },
    { id: 2, quizTitle: "Introduction to Science", quizTag: "Science", quizInfo1: "Created 2 days ago", quizInfo2: "Hosted  10 times", quizQuestionsNumTotal: 15 },
]

const sampleQuizObj = {
    id: 1,
	quizName: 'The is Sample quiz 1',
	quizTag: 'Technology',
	hostedNum: 2,
	createdDate: 'asdasd',
	author: 'Wei Seng',
	status: "Draft",
    questionList: [
        {
            questionId: 1,
            question: 'This is question 1',
            option: [
                {
                    optionId: 1,
                    selectionName: 'A',
                    description: 'This is answer A'
                },
                                {
                    optionId: 2,
                    selectionName: 'A',
                    description: 'This is answer A'
                },
                                {
                    optionId: 3,
                    selectionName: 'A',
                    description: 'This is answer A'
                },
                {
                    optionId: 4,
                    selectionName: 'A',
                    description: 'This is answer A'
                }
            ],
            answer: 'A'
        },
        {
            questionId: 1,
            question: 'This is question 1',
            option: [
                {
                    optionId: 1,
                    selectionName: 'A',
                    description: 'This is answer A'
                },
                                {
                    optionId: 2,
                    selectionName: 'A',
                    description: 'This is answer A'
                },
                                {
                    optionId: 3,
                    selectionName: 'A',
                    description: 'This is answer A'
                },
                {
                    optionId: 4,
                    selectionName: 'A',
                    description: 'This is answer A'
                }
            ],
            answer: 'A'
        }
    ]
}

export { mockQuestionList, mockQuizList, sampleQuizObj, mockOptionList }