import { useEffect, useState } from "react"
import styles from "./EditQuiz.module.css"
import { Question } from "../../types/quiz"
import QuestionCard from "@/components/layouts/QuestionCard/QuestionCard"

const mockQuestionList: Question[] = [
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

const EditQuiz: React.FC = () => {
    const [selectedQuestionCard, setSelectedQuestionCard] = useState<number>(0)
    const [questionList, setQuestionList] = useState<Question[]>([])

    useEffect(() => {
        setQuestionList(mockQuestionList)
    }, [])

    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageHeader}>
                <h1>Edit Quiz</h1>
                <button className={styles.saveButton}>Save Progress</button>
            </div>
            <div className={styles.pageContent}>
                {
                    questionList.map((questionInfo) => (
                        <QuestionCard
                            key={questionInfo.questionId}
                            questionInfo={questionInfo}
                            selectedQuestionCard={selectedQuestionCard}
                            setSelectedQuestionCard={setSelectedQuestionCard}
                            saveHandler={(content) => setQuestionList}
                        />
                    ))
                }
                <button className={styles.addQuestionButton}>+ Add Question</button>
            </div>
        </div>
    )
}

export default EditQuiz 