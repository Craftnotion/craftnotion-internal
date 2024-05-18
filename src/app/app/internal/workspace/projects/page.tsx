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
                            <PlusIcon />
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
                            <div className={styles.cn_projects_list_wrap_inner}>
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
                                                            <div className={styles.cn_project_badge_dot}/>
                                                            <p className={styles.cn_project_badge_label}>Start</p>
                                                            <p className={styles.cn_project_badge_value}>{project.start}</p>
                                                        </div>
                                                        <div className={styles.cn_project_badge}>
                                                            <div className={styles.cn_project_badge_dot}/>
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
        </div>
    )
}

export default ManagementProjectsPage

const ProjectsData = [
    {
        id: '001',
        name: 'Lyt Til Danke Salmer',
        start: '5th March, 24',
        deadline: '20th March, 24',
        updated_at: '2 hours ago',
        team: [

        ],
    },
    {
        id: '002',
        name: 'Lyt Til Danke Salmer',
        start: '5th March, 24',
        deadline: '20th March, 24',
        updated_at: '2 hours ago',
        team: [

        ],
    },
]