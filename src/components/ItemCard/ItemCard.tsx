import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ItemCard.module.css'
import { PlayCircleOutlined, EllipsisOutlined } from '@ant-design/icons'
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu'
import { appPath } from '../../utils/constants'

interface cardInfoITF {
  sessionId: string,
  name: string,
  dateCreated: string,
  status: string
}

interface ItemCardProps {
  cardInfo: cardInfoITF
  dropDownMenu: string[],
}

const ItemCard:React.FC<ItemCardProps> = ({
  cardInfo,
  dropDownMenu
}) => {
  const navigate = useNavigate()
  const [openDropDownMenu, setOpenDropDownMenu] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const menuIconRef = useRef<HTMLDivElement>(null)

  const toggleMenu = (event: React.MouseEvent) => {
    event.stopPropagation()
    setOpenDropDownMenu(!openDropDownMenu)
  }

  const cardClickhandler = () => {
    navigate(appPath.edit)
  }

  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(event.target as Node)
      ) {
        setOpenDropDownMenu(false)
      }
    }

    if (openDropDownMenu) {
      document.addEventListener('mousedown', handleClickOutSide)
    } else {
      document.removeEventListener('mousedown', handleClickOutSide)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutSide)
    }
  }, [openDropDownMenu])

  return (
    <div className={styles.item}
      onClick={cardClickhandler}
    >
      <div className={styles.itemBox}>
        <div>{cardInfo.sessionId}</div>
        <div>{cardInfo.name}</div>
        <div>
          <div>{cardInfo.dateCreated}</div>
          <div>{cardInfo.status}</div>
        </div>
        <div className={styles.startButton}>
          <PlayCircleOutlined style={{ fontSize: '24px'}}/>
        </div>
        <div className={styles.menuIcon}
          ref={menuIconRef}
          onClick={(event: React.MouseEvent) => toggleMenu(event)}
        >
          <EllipsisOutlined style={{ fontSize: '24px', transform: 'rotate(90deg)'}}/>
        </div>
      </div>
      {
        openDropDownMenu && <DropDownMenu ref={dropdownRef} dropdownList={dropDownMenu} />
      }
    </div>
  )
}

export default ItemCard