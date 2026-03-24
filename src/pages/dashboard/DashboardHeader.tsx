import React, { useState } from 'react';
import { 
  SettingOutlined, 
  LogoutOutlined
} from '@ant-design/icons';
import { getCurrentUser } from '@/services/auth/auth';
import styles from './Dashboard.module.css';

const DashboardHeader = () => {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const userEmail = getCurrentUser()?.email || '';

    const getInitial = (email: string) => email.charAt(0).toUpperCase();

    const handleLogout = () => {
        console.log("Logging out...");
    };

    return (
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
    )
}

export default DashboardHeader