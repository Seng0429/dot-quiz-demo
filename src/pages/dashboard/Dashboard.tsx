import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';
import { 
  SettingOutlined, 
  LogoutOutlined,
  PlusOutlined,
  PlayCircleOutlined,
  DashboardOutlined
} from '@ant-design/icons';
import { getCurrentUser } from '@/services/auth/auth';
import QuizCard from '@/components/atoms/QuizCard/QuizCard';

const Dashboard: React.FC = () => {
  const navigate = useNavigate()
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userEmail = getCurrentUser()?.email || '';

  const getInitial = (email: string) => email.charAt(0).toUpperCase();

  const handleLogout = () => {
    console.log("Logging out...");
  };

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
    <div className={styles.dashboardContainer} onClick={() => setShowUserMenu(false)}>
      
      <header className={styles.header}>
        <div>
          <h1 className={styles.appTitle}>Welcome to dotQuiz</h1>
        </div>

        <div className={styles.headerActions} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div 
            className={styles.userArea} 
            onClick={(e) => {
              e.stopPropagation();
              setShowUserMenu(!showUserMenu);
            }}
          >
            <span className={styles.userEmail} style={{fontSize: '0.8rem'}}>{userEmail}</span>
            <div className={styles.avatar}>{getInitial(userEmail)}</div>

            {showUserMenu && (
              <div className={styles.dropdown}>
                <button className={styles.dropdownItem}>
                  <SettingOutlined /> SETTINGS
                </button>
                <button 
                  className={`${styles.dropdownItem} ${styles.logoutBtn}`}
                  onClick={handleLogout}
                >
                  <LogoutOutlined /> LOGOUT
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
      
      <main className={styles.mainContent}>
        
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitle}>QUIZZES</div>
            <button className={styles.btnPrimary}>
              <PlusOutlined /> New Quiz
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