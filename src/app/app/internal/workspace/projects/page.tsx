/** React Imports */
import React from 'react'
import Image from 'next/image'

/** React Imports */
import { DateTime } from "luxon"

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
                                            <div className={styles.cn_projects_list_item_main}>
                                                <div className={styles.cn_icon}>
                                                    <ProjectIcon />
                                                </div>
                                                <div className={styles.cn_project_info}>
                                                    <p className={styles.cn_project_name}>{project.name}</p>
                                                    <div className={styles.cn_project_badge}>
                                                        <p>{project.status}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.cn_projects_list_item_control}>
                                                <div className={styles.cn_project_team_members}>
                                                    <div className={styles.cn_project_team_member_item}>
                                                        <Image
                                                            src="https://i.pravatar.cc/300"
                                                            fill
                                                            sizes='50'
                                                            alt='name'
                                                        />
                                                    </div>
                                                    <div className={styles.cn_project_team_member_item}>
                                                        <Image
                                                            src="https://i.pravatar.cc/300"
                                                            fill
                                                            sizes='50'
                                                            alt='name'
                                                        />
                                                    </div>
                                                    <div className={styles.cn_project_team_member_item}>
                                                        <Image
                                                            src="https://i.pravatar.cc/300"
                                                            fill
                                                            sizes='50'
                                                            alt='name'
                                                        />
                                                    </div>
                                                    <button className={styles.cn_project_team_member_add}>
                                                        <PlusIcon />
                                                    </button>
                                                </div>
                                                <div className={styles.cn_projects_list_item_content_inner}>
                                                    {
                                                        project.start ?
                                                        <div className={styles.cn_project_badge}>
                                                            <p className={styles.cn_project_badge_label}>Started On</p>
                                                            <p className={styles.cn_project_badge_value}>{DateTime.fromJSDate(project.start).toFormat('ccc, dd MMM')}</p>
                                                        </div> : null
                                                    }
                                                    <div className={styles.cn_project_badge}>
                                                        <p className={styles.cn_project_badge_label}>Due Date</p>
                                                        <p className={styles.cn_project_badge_value}>{DateTime.fromJSDate(project.deadline).toFormat('ccc, dd MMM')}</p>
                                                    </div>
                                                    <div className={styles.cn_project_badge}>
                                                        <p className={styles.cn_project_badge_label}>Milestones</p>
                                                        <p className={styles.cn_project_badge_value}>
                                                            <span>{project.milestones.completed}</span>/{project.milestones.completed}
                                                        </p>
                                                    </div>
                                                    <div className={styles.cn_project_badge}>
                                                        <p className={styles.cn_project_badge_label}>Tasks</p>
                                                        <p className={styles.cn_project_badge_value}>
                                                            <span>{project.tasks.completed}</span>/{project.tasks.completed}
                                                        </p>
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

type StatusListProps = 'Completed' | 'Overdue' | 'On Track' | 'Priority' | 'On Hold'

type ProjectsDataProps = {
    id: string;
    name: string;
    start?: Date;
    deadline: Date;
    updated_at: string;
    client: {
        name: string;
        slug?: string;
    };
    status: StatusListProps;
    milestones: {
        total: string;
        completed: string;
    };
    tasks: {
        total: string;
        completed: string;
    };
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
        name: 'ProjectPal',
        start: new Date(),
        deadline: new Date(),
        updated_at: '2 hours ago',
        client: {
            name: 'Himanshu Sharma'
        },
        status: 'Completed',
        milestones: {
            total: '03',
            completed: '09'
        },
        tasks: {
            total: '17',
            completed: '42'
        },
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
        deadline: new Date(),
        updated_at: '2 hours ago',
        client: {
            name: 'Himanshu Sharma'
        },
        status: 'Priority',
        milestones: {
            total: '03',
            completed: '09'
        },
        tasks: {
            total: '17',
            completed: '42'
        },
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
        name: 'SecondAid App',
        start: new Date(),
        deadline: new Date(),
        updated_at: '2 hours ago',
        client: {
            name: 'Himanshu Sharma'
        },
        status: 'On Track',
        milestones: {
            total: '03',
            completed: '09'
        },
        tasks: {
            total: '17',
            completed: '42'
        },
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
        name: 'MGA',
        start: new Date(),
        deadline: new Date(),
        updated_at: '2 hours ago',
        client: {
            name: 'Himanshu Sharma'
        },
        status: 'Overdue',
        milestones: {
            total: '03',
            completed: '09'
        },
        tasks: {
            total: '17',
            completed: '42'
        },
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
        name: 'Farmstax',
        deadline: new Date(),
        updated_at: '2 hours ago',
        client: {
            name: 'Himanshu Sharma'
        },
        status: 'On Hold',
        milestones: {
            total: '03',
            completed: '09'
        },
        tasks: {
            total: '17',
            completed: '42'
        },
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
        name: 'Nordisk Yoga',
        start: new Date(),
        deadline: new Date(),
        updated_at: '2 hours ago',
        client: {
            name: 'Himanshu Sharma'
        },
        status: 'On Hold',
        milestones: {
            total: '03',
            completed: '09'
        },
        tasks: {
            total: '17',
            completed: '42'
        },
        team: [
            {
                id: 'hs01',
                name: 'Himanshu Sharma',
                email: 'himanshu@gmail.com'
            }
        ],
    },
]