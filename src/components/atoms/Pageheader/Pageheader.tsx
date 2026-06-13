import styles from './PageHeader.module.css'
import { Avatar } from "@mui/material"
import {
  BellOutlined, SettingOutlined,
 } from "@ant-design/icons"

interface PageHeaderProps {
    children?: React.ReactNode;
}

const PageHeader = (props: PageHeaderProps) => {
    const { children } = props;

    return (
        <div className={styles.pageHeader}>
            <div>
                {children}
            </div>
            <div className={styles.actionBar}>
                <BellOutlined />
                <SettingOutlined />
                <Avatar alt="User Avatar" src="/avatar.png" />
            </div>
        </div>
    )
}

export default PageHeader