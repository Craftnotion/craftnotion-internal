/** React Imports */
import React from 'react'

/** Icons */
import PlusIcon from '../../../../../../public/icons/plus.svg'
import SearchIcon from '../../../../../../public/icons/search.svg'
import ProjectIcon from '../../../../../../public/icons/projects.svg'

/** Styles */
import styles from './styles.module.scss'

/** Main Export */
const ManagementProjectsPage = () => {
    return (
        <div className={styles.cn_page}>
            <div className={styles.cn_page_header}>
                <div className="contain">
                    <div className={styles.cn_page_header_wrap}>
                        <h1>Projects</h1>
                        <button>
                            <span><PlusIcon /></span>
                            <p>Add Project</p>
                        </button>
                    </div>
                    <div className={styles.cn_page_search}>
                        <div>
                            <SearchIcon />
                        </div>
                        <input type="text" placeholder='Search Projects' tabIndex={0} />
                    </div>
                </div>
            </div>
            <div className={styles.cn_page_body}>
                <div className={styles.cn_projects_list}>
                    <div className="contain">
                        <div className={styles.cn_projects_list_wrap}>
                            {
                                ProjectsData.map(project => {
                                    return (
                                        <div className={styles.cn_projects_list_item} key={project.id}>
                                            <div className={styles.cn_projects_list_item_icon}>
                                                <ProjectIcon />                                                    
                                            </div>
                                            <div className={styles.cn_projects_list_item_content}>
                                                <p className={styles.cn_project_name}>{project.name}</p>
                                                <div className={styles.cn_projects_list_item_content_inner}>
                                                    <div className={styles.cn_project_badge}>
                                                        <p className={styles.cn_project_badge_label}>Start</p>
                                                        <p className={styles.cn_project_badge_value}>{project.start}</p>
                                                    </div>
                                                    <div className={styles.cn_project_badge}>
                                                        <p className={styles.cn_project_badge_label}>Due</p>
                                                        <p className={styles.cn_project_badge_value}>{project.deadline}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default ManagementProjectsPage

type StatusListProps = 'Completed' | 'Overdue' | 'On Track' | 'Priority'

type ProjectsDataProps = {
    id: string;
    name: string;
    start: string;
    deadline: string;
    updated_at: string;
    client: {
        name: string;
        slug?: string;
    };
    status: StatusListProps;
    team: {
        id: string;
        name: string;
        email: string;
        slug?: string;
    }[]
}[]

const ProjectsData: ProjectsDataProps = [
    {
        id: '001',
        name: 'Lyt Til Danke Salmer',
        start: '5th March, 24',
        deadline: '20th March, 24',
        updated_at: '2 hours ago',
        client: {
            name: 'Himanshu Sharma'
        },
        status: 'Completed',
        team: [
            {
                id: 'hs01',
                name: 'Himanshu Sharma',
                email: 'himanshu@gmail.com'
            }
        ],
    },
    {
        id: '002',
        name: 'Lyt Til Danke Salmer',
        start: '5th March, 24',
        deadline: '20th March, 24',
        updated_at: '2 hours ago',
        client: {
            name: 'Himanshu Sharma'
        },
        status: 'Completed',
        team: [
            {
                id: 'hs01',
                name: 'Himanshu Sharma',
                email: 'himanshu@gmail.com'
            }
        ],
    },
    {
        id: '003',
        name: 'Lyt Til Danke Salmer',
        start: '5th March, 24',
        deadline: '20th March, 24',
        updated_at: '2 hours ago',
        client: {
            name: 'Himanshu Sharma'
        },
        status: 'Completed',
        team: [
            {
                id: 'hs01',
                name: 'Himanshu Sharma',
                email: 'himanshu@gmail.com'
            }
        ],
    },
    {
        id: '004',
        name: 'Lyt Til Danke Salmer',
        start: '5th March, 24',
        deadline: '20th March, 24',
        updated_at: '2 hours ago',
        client: {
            name: 'Himanshu Sharma'
        },
        status: 'Completed',
        team: [
            {
                id: 'hs01',
                name: 'Himanshu Sharma',
                email: 'himanshu@gmail.com'
            }
        ],
    },
    {
        id: '005',
        name: 'Lyt Til Danke Salmer',
        start: '5th March, 24',
        deadline: '20th March, 24',
        updated_at: '2 hours ago',
        client: {
            name: 'Himanshu Sharma'
        },
        status: 'Completed',
        team: [
            {
                id: 'hs01',
                name: 'Himanshu Sharma',
                email: 'himanshu@gmail.com'
            }
        ],
    },
    {
        id: '006',
        name: 'Lyt Til Danke Salmer',
        start: '5th March, 24',
        deadline: '20th March, 24',
        updated_at: '2 hours ago',
        client: {
            name: 'Himanshu Sharma'
        },
        status: 'Completed',
        team: [
            {
                id: 'hs01',
                name: 'Himanshu Sharma',
                email: 'himanshu@gmail.com'
            }
        ],
    },
]