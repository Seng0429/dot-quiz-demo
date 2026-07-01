import { useEffect, useState } from "react"
import styles from "./QuizEditBoard.module.css"
import { Option, Question } from "../../types/quiz"
import QuestionCard from "@/components/atoms/QuestionCard/QuestionCard"
import { mockQuestionList } from "@/utils/mockData"
import QuizEditBoardHeader from "@/components/molecules/QuizEditBoardHeader/QuizEditBoardHeader"

interface QuizEditBoardProps {
    mode: 'create' | 'edit';
}

const QuizEditBoard: React.FC<QuizEditBoardProps> = (props: QuizEditBoardProps) => {
    const { mode } = props;
    const [questionList, setQuestionList] = useState<Question[]>([])
    const [currentQuestion, setCurrentQuestion] = useState<Question>({
        questionId: 0,
        question: '',
        answer: ''
    })
    const [currentOptionList, setCurrentOptionList] = useState<Option[]>([
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
    ])

    useEffect(() => {
        setQuestionList(mockQuestionList)
        setCurrentQuestion(mockQuestionList[0])
    }, [])

    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageHeader}>
                <QuizEditBoardHeader />
            </div>
            <div className={styles.pageContent}>
                <div className={styles.leftMenu}>
                    <div>Questions</div>
                    <div className={styles.questionPreviewBox}>1. Questions</div>
                    <div className={styles.addQuestionButton}>Add Question</div>
                </div>
                <div className={styles.questionContainer}>
                    {currentQuestion &&
                        <QuestionCard
                            questionInfo={currentQuestion}
                            questionSaveHandler={setCurrentQuestion}
                            optionList={currentOptionList}
                            optionSaveHandler={setCurrentOptionList}
                        />
                    }
                </div>
                <div className={styles.rightMenu}>
                    <div>Quiz Setting</div>
                </div>
            </div>
        </div>
    )
}

export default QuizEditBoard 