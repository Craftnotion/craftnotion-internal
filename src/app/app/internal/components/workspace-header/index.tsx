/** React Imports */
import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

/** Icons */
import Logo from '../../../../../../public/brand/logo.svg'
import BellIcon from '../../../../../../public/icons/bell.svg'
import DashboardIcon from '../../../../../../public/icons/dash.svg'
import ProjectsIcon from '../../../../../../public/icons/projects.svg'
import UsersIcon from '../../../../../../public/icons/users.svg'
import TaskIcon from '../../../../../../public/icons/tasks.svg'

/** Styles */
import styles from './styles.module.scss'

/** Main Export Props */
type Props = {}

/** Main Export */
const WorkspaceHeader: FC<Props> = () => {
    return (
        <div className={styles.cn_header}>
            <div className={styles.cn_header_wrap}>
                <div className={styles.cn_header_wrap_inner}>
                    <div className={styles.cn_logo_wrap}>
                        <Logo />
                        <p>Craftnotion Workspace</p>
                    </div>
                    <ul className={styles.cn_menu}>
                        <li>
                            <Link href="/" className={styles.cn_active}>
                                <DashboardIcon />
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <ProjectsIcon />
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <UsersIcon />
                                Users
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <TaskIcon />
                                Task
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.cn_other_controls}>
                    <button>
                        <BellIcon />
                    </button>
                    <button>
                        <Image
                            height={50}
                            width={50}
                            src="/placeholder/user.jpg"
                            alt='profile image'
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WorkspaceHeader