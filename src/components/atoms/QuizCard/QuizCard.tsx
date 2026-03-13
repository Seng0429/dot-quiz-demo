import React, { useState } from 'react';
import styles from './QuizCard.module.css';
import { 
  EditOutlined,
  PlayCircleOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

interface QuizCardITF {
    id: string,
    title: string,
    questions: number,
    actionHandler: (id: string, action: string) => void
}

const QuizCard: React.FC<QuizCardITF> = ({ id, title, questions, actionHandler }) => {
    return(
        <div className={styles.quizCard}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-main)' }}>{title}</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-sub)', margin: 0 }}>{questions}</p>
            
            <div className={styles.controls} style={{marginTop: '1rem', display: 'flex', gap: '0.5rem'}}>
                <button className={styles.iconBtn} onClick={() => actionHandler(id, 'Edit')}>
                    <EditOutlined /> Edit
                </button>
                <button className={styles.iconBtn} onClick={() => actionHandler(id, 'Host')}>
                    <PlayCircleOutlined /> Host
                </button>
                <button className={styles.iconBtn} onClick={() => actionHandler(id, 'Delete')}>
                    <DeleteOutlined />
                </button>
            </div>
        </div>
    )
}

export default QuizCard;