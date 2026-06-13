import { useState } from "react"
import styles from './QuizCard.module.css'
import {
  ArrowRightOutlined, MoreOutlined
 } from "@ant-design/icons"
 import DropDownMenu from "@components/atoms/DropDownMenu/DropDownMenu"

 export interface QuizCardInfo {
    id: number;
    quizTag: string;
    quizTitle: string;
    quizInfo1: string;
    quizInfo2: string;
    quizQuestionsNumTotal: number;
 }

 interface QuizCardProps {
    cardInfo: QuizCardInfo;
 }

const QuizCard = (props: QuizCardProps) => {
    const { cardInfo } = props;
    const { quizTag, quizTitle, quizInfo1, quizInfo2, quizQuestionsNumTotal } = cardInfo;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItemList=[
        { name: "Edit Quiz", clickHandler: () => console.log("Edit Quiz clicked") },
        { name: "Delete Quiz", clickHandler: () => console.log("Delete Quiz clicked") },
    ]

    return (
        <div className={styles.quizCard}>
            <div>
                <div className={styles.cardTag}>{quizTag}</div>
                <MoreOutlined onClick={() => setIsMenuOpen(!isMenuOpen)} />
                {isMenuOpen && <DropDownMenu menuItemList={menuItemList} />}
            </div>
            <div>
                <div className={styles.cardTitle}>{quizTitle}</div>
                <div className={styles.cardInfo}>{quizInfo1}</div>
                <div className={styles.cardInfo}>{quizInfo2}</div>
            </div>
            <div>
                <div className={styles.cardQuestions}>{quizQuestionsNumTotal} Questions</div>
                <ArrowRightOutlined />
            </div>
        </div>
    )
}

export default QuizCard