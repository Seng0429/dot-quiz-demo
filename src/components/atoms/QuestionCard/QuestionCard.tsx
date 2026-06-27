import React from "react"
import styles from "./QuestionCard.module.css"
import { Option, Question } from "../../../types/quiz"
import MyEditor from "@/components/atoms/InlineEditor/InlineEditor"

type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (action: A) => void;

interface QuestionCardProps {
    questionInfo: Question;
    questionSaveHandler: Dispatch<SetStateAction<Question | undefined>>;
    option: Option[];
    optionSaveHandler: Dispatch<SetStateAction<Option[]>>
}

const QuestionCard: React.FC<QuestionCardProps> = (props) => {
    const { questionInfo, questionSaveHandler, option, optionSaveHandler} = props;

    return (
        <div
            key={questionInfo.questionId}
            className={styles.questionCard}
        >
            <div></div>
            <div className={styles.question}>
                <MyEditor saveHandler={questionSaveHandler} content={questionInfo.question} />
            </div>
            <div className={styles.optionContainer}>
                {
                    questionInfo.option.map((optionInfo, index) => {
                        return(
                            <div key={index} className={styles.option}>
                                <div className={styles.optionName}>
                                    <MyEditor saveHandler={optionSaveHandler} content={option[index]}/>
                                </div>
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