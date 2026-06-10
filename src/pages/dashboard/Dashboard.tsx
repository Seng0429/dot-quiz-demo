import { Avatar } from "@mui/material"
import styles from "./Dashboard.module.css"
import { BellOutlined, DashboardOutlined, SettingOutlined,
  ArrowRightOutlined, MoreOutlined
 } from "@ant-design/icons"

const Dashboard = () => {
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
        <div className={styles.pageHeader}>
          <div className={styles.filterBar}>
            <div>My Quizzes</div>
            <div>Upcoming</div>
            <div>Achieved</div>
          </div>
          <div className={styles.searchBar}>
            <BellOutlined />
            <SettingOutlined />
            <Avatar alt="User Avatar" src="/avatar.png" />
          </div>
        </div>
        <div className={styles.mainContent}>
          <div>
            <div className={styles.quizCard}>
              <div>
                <div className={styles.cardTag}>TECHNOLOGY</div>
                <MoreOutlined />
              </div>
              <div>
                <div className={styles.cardTitle}>
                  Advanced Neural Networks
                </div>
                <div className={styles.cardInfo}>
                  Created 1 day ago
                </div>
                <div className={styles.cardInfo}>
                  Hosted 824 times  
                </div>
              </div>
              <div>
                <div>15 Questions</div>
                <ArrowRightOutlined />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard