import { useNavigate } from 'react-router-dom'
import styles from './CardButton.module.css'
import { PlusOutlined } from '@ant-design/icons'
import { appPath } from '../../utils/constants'

const CardButton = () => {
  const navigate = useNavigate()

  const createQuiz = () => {
    navigate(appPath.create)
  }

  return (
    <div
      className={styles.cardButton}
      onClick={createQuiz}
    >
      <div>
        <PlusOutlined />
      </div>
      <span>Create quiz</span>
    </div>
  )
}

export default CardButton