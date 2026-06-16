import styles from './QuizEditBoardHeader.module.css'
import PageHeader from '@/components/atoms/Pageheader/Pageheader'


const QuizEditBoardHeader = () => {
    return (
        <PageHeader children={
            <div className={styles.headerContainer}>
                <div className={styles.functionBar}>
                    <div className={styles.button}>Preview</div>
                    <div className={styles.button}>Publish</div>
                </div>
            </div>
        } />
    )
}

export default QuizEditBoardHeader