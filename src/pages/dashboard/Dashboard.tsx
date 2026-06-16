import { useState, useEffect } from "react"
import styles from "./Dashboard.module.css"
import {
  DashboardOutlined,
 } from "@ant-design/icons"
 import QuizCard, { QuizCardInfo } from "@/components/molecules/QuizCard/QuizCard"
 import { useNavigate } from "react-router-dom"
import DashboardHeader from "@/components/molecules/DashboardHeader/DashboardHeader"
import {} from "@/utils/mockData"

const Dashboard = () => {
  const [quizList, setQuizList] = useState<QuizCardInfo[]>();
  const navigate = useNavigate();

  useEffect(() => {
    setQuizList([
      { id: 1, quizTitle: "Advanced Neural Networks", quizTag: "Technology", quizInfo1: "Created 1 day ago", quizInfo2: "Hosted 1 time", quizQuestionsNumTotal: 10 },
      { id: 2, quizTitle: "Introduction to Science", quizTag: "Science", quizInfo1: "Created 2 days ago", quizInfo2: "Hosted  10 times", quizQuestionsNumTotal: 15 },
    ]);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftPageContainer}>
        <div className={styles.title}>DotQuiz</div>
        <div className={styles.leftMenu}>
          <div className={styles.menuItem}>
            <DashboardOutlined />
            <div>Dashboard</div>
          </div>
          <div className={styles.menuItem}>
            <DashboardOutlined />
            <div>Statistics</div>
          </div>
          <div className={styles.menuItem}>
            <DashboardOutlined />
            <div>My Quizzes</div>
          </div>
        </div> 
      </div>
      <div className={styles.rightPageContainer}>
        <DashboardHeader />
        <div className={styles.mainContent}>
          <div className={styles.cardListContainer}>
            {
              quizList && quizList.map((quiz) => (
                <QuizCard key={quiz.id} cardInfo={quiz} />
              ))
            }
          </div>
          <div className={styles.createQuizButton} onClick={() => navigate('/create')}>
            <div>+</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard