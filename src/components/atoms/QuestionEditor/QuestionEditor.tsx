import React from "react"
import styles from "./QuestionEditor.module.css"
import { Option, Question } from "../../../types/quiz"
import MyEditor from "@/components/atoms/InlineEditor/InlineEditor"

type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (action: A) => void;

interface QuestionEditorProps {
    questionInfo: Question;
    questionSaveHandler: Dispatch<SetStateAction<Question>>;
    optionList: Option[];
    optionSaveHandler: Dispatch<SetStateAction<Option[]>>;
}

const QuestionEditor: React.FC<QuestionEditorProps> = (props) => {
    const { questionInfo, questionSaveHandler, optionList, optionSaveHandler } = props;

    const questionValueEditHandler = (value: string) => {
        questionSaveHandler(prev => ({
            ...prev,
            questions: value
        }))
    }

    const optionValueEditHandler = (value: string, index: number) => {
        optionSaveHandler((prev) => {
            const optionListCopy = [...prev]
            const selectedOption = optionListCopy.find((option) => option.optionId === index)
            if (selectedOption) selectedOption.description = value
            return optionListCopy
        })
    }

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
                    onChange={(e) => questionValueEditHandler(e.target.value)}
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
                                        onChange={(e) => optionValueEditHandler(e.target.value, index)}
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

export default QuestionEditor