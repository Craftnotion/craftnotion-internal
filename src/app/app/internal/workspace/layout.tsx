/** React Imports */
import React, { FC } from 'react'

/** Components */
import WorkspaceHeader from '../components/workspace-header'

/** Styles */
import styles from './layout.module.scss'

/** Main Export Props */
type Props = {
    children: React.ReactNode
}

/** Main Export */
const layout: FC<Props> = ({ children }) => {
    return (
        <div className={styles.cn_layout}>
            <WorkspaceHeader />
            {children}
        </div>
    )
}

export default layout