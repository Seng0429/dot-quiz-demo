import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';
import { 
  PlusOutlined,
  PlayCircleOutlined,
  DashboardOutlined
} from '@ant-design/icons';
import QuizCard from '@/components/layouts/QuizCard/QuizCard';
import { appPath } from '@/utils/constants';
import DashboardHeader from './DashboardHeader';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();


  const handleQuizAction = (id: string, action: string) => {
    switch (action) {
      case 'Edit':
        console.log(`Navigating to editor for quiz: ${id}`);
        navigate(`/edit/${id}`)
        break;
      case 'Host':
        console.log(`Starting session for quiz: ${id}`);
        break;
      case 'Delete':
        console.log(`Triggering delete modal for: ${id}`);
        break;
      default:
        break;
    }
  };

  const QuizCardList = [
    {
      id: '1',
      title: 'Cyber Security 101',
      questions: 20,
    },
    {
      id: '2',
      title: 'Cyber Security 102',
      questions: 25,
    },
    {
      id: '3',
      title: 'Cyber Security 103',
      questions: 30,
    },
    {
      id: '4',
      title: 'Cyber Security 104',
      questions: 35,
    }
  ]

  return (
    <div className={styles.dashboardContainer}>
      <DashboardHeader />
      <main className={styles.mainContent}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitle}>QUIZZES</div>
            <button className={styles.iconBtn} onClick={() => console.log('I am clicked')}>
              <PlusOutlined /> CREATE NEW QUIZ
            </button>
          </div>
          <div className={styles.quizGrid}>
            {
              QuizCardList.map((quiz) => (
                <QuizCard
                  id={quiz.id}
                  title={quiz.title}
                  questions={quiz.questions}
                  key={quiz.id} actionHandler={handleQuizAction}
                />
              ))
            }
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionTitle}>UPCOMING SESSIONS</div>
          <div className={styles.tableWrapper}>
            <table className={styles.sessionTable}>
              <thead>
                <tr>
                  <th>Log ID</th>
                  <th>Scheduled</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#A9982</td>
                  <td>Tomorrow, 10:00 AM</td>
                  <td><span style={{color: '#10b981', fontWeight: 600}}>ACTIVE</span></td>
                  <td><button className={styles.iconBtn}><PlayCircleOutlined /> LAUNCH</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionTitle}>COMPLETE SESSION</div>
          <div className={styles.tableWrapper}>
            <table className={styles.sessionTable}>
              <thead>
                <tr>
                  <th>Log ID</th>
                  <th>Participants</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#B1003</td>
                  <td>42</td>
                  <td>
                    <button className={styles.btnPrimary} style={{padding: '0.4rem 0.8rem', fontSize: '0.7rem'}}>
                      <DashboardOutlined /> VIEW_DATA
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;