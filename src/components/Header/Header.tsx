import { useState, useRef, useEffect } from 'react'
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu'
import styles from './Header.module.css'
import { getCurrentUser } from '../../services/auth/auth'

const Header = () => {
  const user = getCurrentUser()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const menuIconRef = useRef<HTMLDivElement>(null)
  const [openDropDownMenu, setOpenDropDownMenu] = useState(false)

  const profileClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation()
    setOpenDropDownMenu(!openDropDownMenu)
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
    <div className={styles.pageHeader}>
      <div>
        <div className={styles.profileName}>{user?.email}</div>
        <div onClick={profileClickHandler} className={styles.profile}></div>
      </div>
      {
        openDropDownMenu &&
          <DropDownMenu
            ref={dropdownRef}
            dropdownList={['Logout']}
          />
      }
    </div>
  )
}

export default Header