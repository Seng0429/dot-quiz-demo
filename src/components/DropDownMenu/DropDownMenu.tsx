import { Ref } from 'react'
import styles from './DropDownMenu.module.css'

interface dropDownMenuProps {
  dropdownList: string[]
  ref: Ref<HTMLDivElement>
}

const dropDownMenu = ({
  dropdownList,
  ref
}: dropDownMenuProps) => {
  return (
    <div
      className={styles.dropDownMenu}
      ref={ref}
    >
      {
        dropdownList.map((item, index) => (
          <div key={index}>{item}</div>
        ))
      }
    </div>
  )
}

export default dropDownMenu