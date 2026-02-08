import styles from './index.module.css'
import ItemCard from '../../components/ItemCard/ItemCard'
import CardButton from '../../components/CardButton/CardButton'
import Header from '../../components/Header/Header'

const Dashboard = () => {
  const boxInfo = [
    {
      sessionId: '2342734',
      name: 'Primary 1',
      dateCreated: '23 May 2025',
      status: 'Open'
    },
    {
      sessionId: '2342734', 
      name: 'Primary 1',
      dateCreated: '23 May 2025',
      status: 'Open'
    },
    {
      sessionId: '2342734',
      name: 'Primary 11231231 23123123',
      dateCreated: '23 May 2025',
      status: 'Open'
    },
    {
      sessionId: '2342734',
      name: 'Primary 1',
      dateCreated: '23 May 2025',
      status: 'Open'
    }
  ]

  return (
    <div className={styles.pageContainer}>
      <div>
        <Header />
        <div className={styles.pageBody}>
          <div className={styles.section}>
            <h2>Your quiz</h2>
            <div className={styles.itemBoxContainer}>
              <CardButton />
              {
                boxInfo.map((item, index) => {
                  return (
                    <ItemCard
                      key={index}
                      cardInfo={item}
                      dropDownMenu={['Duplicate', 'Delete']}
                    />
                  )
                })
              }
            </div>
          </div>
          <div className={styles.section}>
            <h2>Completed</h2>
            <div className={styles.itemBoxContainer}>
              {
                boxInfo.map((item, index) => {
                  return (
                    <ItemCard key={index} cardInfo={item} dropDownMenu={['Duplicate', 'Delete']}/>
                  )
                })
              }
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard