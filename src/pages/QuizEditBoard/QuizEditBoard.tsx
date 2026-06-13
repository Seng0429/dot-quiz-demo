import { useEffect, useState } from "react"
import styles from "./QuizEditBoard.module.css"
import { Question } from "../../types/quiz"
import QuestionCard from "@/components/atoms/QuestionCard/QuestionCard"
import { mockQuestionList } from "@/utils/mockData"
import QuizEditBoardHeader from "@/components/molecules/QuizEditBoardHeader/QuizEditBoardHeader"

interface QuizEditBoardProps {
    mode: 'create' | 'edit';
}

const QuizEditBoard: React.FC<QuizEditBoardProps> = (props: QuizEditBoardProps) => {
    const { mode } = props;
    const [selectedQuestionCard, setSelectedQuestionCard] = useState<number>(0)
    const [questionList, setQuestionList] = useState<Question>()

    useEffect(() => {
        setQuestionList(mockQuestionList[0])
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
                    {questionList &&
                        <QuestionCard
                            questionInfo={questionList}
                            setSelectedQuestionCard={setSelectedQuestionCard}
                            saveHandler={(content) => setQuestionList}
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