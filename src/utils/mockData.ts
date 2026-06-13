import { Question } from "@/types/quiz"

export const mockQuestionList: Question[] = [
    {
        questionId: 0,
        question: 'What is the capital of France?',
        option: [
            {
                optionId: 1,
                selectionName: 'A',
                description: 'Option 1 asdasdasdasdas 1231231231231231231 123123 12123 123123123 123123121231231231231231231231233123123123123d',
            },
            {
                optionId: 2,
                selectionName: 'B',
                description: 'description 2',
            },
            {
                optionId: 3,
                selectionName: 'C',
                description: 'description 3',
            },
            {
                optionId: 4,
                selectionName: 'D',
                description: 'description 4',
            },
        ],
        answer: 'B',
    },
    {
        questionId: 1,
        question: 'What is the capital of France?',
        option: [
            {
                optionId: 1,
                selectionName: 'A',
                description: 'Option 1 asdasdasdasdas 1231231231231231231 123123 12123 123123123 123123121231231231231231231231233123123123123d',
            },
            {
                optionId: 2,
                selectionName: 'B',
                description: 'description 2 asdasdasdasda asdasdasd asdasdasdasdasdsd',
            },
            {
                optionId: 3,
                selectionName: 'C',
                description: 'description 3',
            },
            {
                optionId: 4,
                selectionName: 'D',
                description: 'description 4',
            },
        ],
        answer: 'B',
    }
]