import React from "react"
import styles from "./QuestionCard.module.css"
import { Option, Question } from "../../../types/quiz"
import MyEditor from "@/components/atoms/InlineEditor/InlineEditor"

type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (action: A) => void;

interface QuestionCardProps {
    questionInfo: Question;
    questionSaveHandler: Dispatch<SetStateAction<Question>>;
}

const QuestionCard: React.FC<QuestionCardProps> = (props) => {
    const { questionInfo, questionSaveHandler} = props;

    return (
        <div
            key={questionInfo.questionId}
            className={styles.questionCard}
        >
            <div></div>
            <div className={styles.question}>
                <input
                    className={styles.borderlessInputField}
                    value={questionInfo.question}
                    onChange={(e) => questionSaveHandler(prev => ({
                        ...prev,
                        question: e.target.value
                    }))}
                />
            </div>
            <div className={styles.optionContainer}>
                {
                    questionInfo.option.map((optionInfo, index) => {
                        return(
                            <div key={index} className={styles.option}>
                                <div className={styles.optionName}></div>
                                <div className={styles.optionDescription}>
                                    <input
                                        className={styles.borderlessInputField}
                                        value={optionInfo.description}
                                        onChange={(e) => questionSaveHandler(prev => ({
                                            ...prev,
                                            description: e.target.value
                                        }))}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuestionCard