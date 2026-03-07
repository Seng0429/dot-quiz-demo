import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import { 
  SettingOutlined, 
  LogoutOutlined,
  PlusOutlined,
  EditOutlined,
  PlayCircleOutlined,
  DeleteOutlined,
  DashboardOutlined
} from '@ant-design/icons';

const Dashboard: React.FC = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userEmail = "user@dotquiz.com";

  const getInitial = (email: string) => email.charAt(0).toUpperCase();

  const handleLogout = () => {
    console.log("Logging out...");
  };

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
            <div className={styles.quizCard}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-main)' }}>Cyber Security 101</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-sub)', margin: 0 }}>Questions: 20</p>
              
              <div className={styles.controls} style={{marginTop: '1rem', display: 'flex', gap: '0.5rem'}}>
                <button className={styles.iconBtn}><EditOutlined /> Edit</button>
                <button className={styles.iconBtn}><PlayCircleOutlined /> Host</button>
                <button className={styles.iconBtn}><DeleteOutlined /></button>
              </div>
            </div>
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