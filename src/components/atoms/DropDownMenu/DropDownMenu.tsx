import styles from "./DropDownMenu.module.css"

interface DropDownMenuItem {
    name: string;
    clickHandler: () => void;
}

interface DropDownMenuProps {
    menuItemList: DropDownMenuItem[];
}

const DropDownMenu = (props: DropDownMenuProps) => {
    const { menuItemList } = props;

    return (
        <div className={styles.dropDownMenu}>
            {menuItemList.map((item, index) => (
                <div className={styles.dropDownMenuItem} key={index} onClick={item.clickHandler}>
                    {item.name}
                </div>
            ))}
        </div>
    )
}

export default DropDownMenu