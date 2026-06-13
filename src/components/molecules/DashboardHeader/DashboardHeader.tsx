import styles from './DashboardHeader.module.css'
import PageHeader from '@/components/atoms/Pageheader/Pageheader'


const DashboardHeader = () => {
    return (
        <PageHeader children={
            <div className={styles.filterBar}>
                <div>My Quizzes</div>
                <div>Upcoming</div>
                <div>Achieved</div>
            </div>
        } />
    )
}

export default DashboardHeader