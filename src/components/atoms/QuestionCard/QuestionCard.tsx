import React from "react"
import styles from "./QuestionCard.module.css"
import { Question } from "../../../types/quiz"
import MyEditor from "@/components/atoms/InlineEditor/InlineEditor"

interface QuestionCardProps {
    questionInfo: Question;
    saveHandler: (content: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = (props) => {
    const { questionInfo, saveHandler} = props;

    return (
        <div
            key={questionInfo.questionId}
            className={styles.questionCard}
        >
            <div></div>
            <div className={styles.question}>
                <MyEditor saveHandler={saveHandler} content={questionInfo.question} />
            </div>
            <div className={styles.optionContainer}>
                {
                    questionInfo.option.map((optionInfo, index) => {
                        return(
                            <div key={index} className={styles.option}>
                                <div className={styles.optionName}>{optionInfo.selectionName}</div>
                                <div className={styles.optionDescription}>{optionInfo.description}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuestionCard