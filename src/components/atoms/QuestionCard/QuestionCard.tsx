import React from "react"
import styles from "./QuestionCard.module.css"
import { Option, Question } from "../../../types/quiz"
import MyEditor from "@/components/atoms/InlineEditor/InlineEditor"

type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (action: A) => void;

interface QuestionCardProps {
    questionInfo: Question;
    questionSaveHandler: Dispatch<SetStateAction<Question>>;
    optionList: Option[];
    optionSaveHandler: Dispatch<SetStateAction<Option[]>>;
}

const QuestionCard: React.FC<QuestionCardProps> = (props) => {
    const { questionInfo, questionSaveHandler, optionList, optionSaveHandler } = props;

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
                    optionList.map((optionInfo, index) => {
                        return(
                            <div key={index} className={styles.option}>
                                <div className={styles.optionName}>{optionInfo.selectionName}</div>
                                <div className={styles.optionDescription}>
                                    <input
                                        className={styles.borderlessInputField}
                                        value={optionList[index].description}
                                        onChange={(e) => optionSaveHandler(
                                            prev => {
                                                const newOptionList = [...prev];
                                                newOptionList[index] = {
                                                    ...newOptionList[index],
                                                    description: e.target.value
                                                };
                                                return newOptionList;
                                            }
                                        )}
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