import { useEffect, useState } from "react"
import styles from "./QuizEditBoard.module.css"
import { Option, Question, QuestionPreviewCard } from "../../types/quiz"
import QuestionEditor from "@/components/atoms/QuestionEditor/QuestionEditor"
import QuestionPreviewCardComp from "@/components/atoms/QuestionPreviewCard/QuestionPreviewCard"

import { mockOptionList, mockQuestionList } from "@/utils/mockData"
import QuizEditBoardHeader from "@/components/molecules/QuizEditBoardHeader/QuizEditBoardHeader"

interface QuizEditBoardProps {
    mode: 'create' | 'edit';
}

const QuizEditBoard: React.FC<QuizEditBoardProps> = (props: QuizEditBoardProps) => {
    const { mode } = props;
    const [questionList, setQuestionList] = useState<Question[]>([])
    const [questionPreviewCardList, setQuestionPreviewCardList] = useState<QuestionPreviewCard[]>([])
    const [currentQuestion, setCurrentQuestion] = useState<Question>({
        questionId: 0,
        question: '',
        answer: ''
    })
    const [currentOptionList, setCurrentOptionList] = useState<Option[]>([])

    useEffect(() => {
        setQuestionList(mockQuestionList)
        setCurrentQuestion(mockQuestionList[0])
        setCurrentOptionList(mockOptionList)
        setQuestionPreviewCardList([
            {   
                id: 0,
                title: 'Question 1',
                questionId: 0,
                isSelected: true
            },
            {   
                id: 1,
                title: 'Question 2',
                questionId: 0,
                isSelected: false
            }
        ])
    }, [])

    useEffect(() => {
        setQuestionList((prev => [...prev, ]))
    }, [currentQuestion])

    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageHeader}>
                <QuizEditBoardHeader />
            </div>
            <div className={styles.pageContent}>
                <div className={styles.leftMenu}>
                    <div>Questions</div>
                    {questionPreviewCardList.map(
                        () => (<QuestionPreviewCardComp />))
                    }
                    <div className={styles.addQuestionButton}>Add Question</div>
                </div>
                <div className={styles.questionContainer}>
                    {currentQuestion &&
                        <QuestionEditor
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