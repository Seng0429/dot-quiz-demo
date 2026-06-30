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
        option: [],
        answer: ''
    })

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