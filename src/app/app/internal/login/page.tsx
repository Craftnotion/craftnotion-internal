/** Icons */
import Logo from '../../../../../public/brand/logo.svg'
import BackObject from '../../../../../public/textures/back_object.svg'

/** Components */
import InternalLoginForm from './internal-login-form'

/** Styles */
import styles from './styles.module.scss'

/** Main Export */
const InternalLoginPage = () => {

    return (
        <div className={styles.cn_outer}>
            <div className={styles.cn_bg}>
                <BackObject />
            </div>
            <div className={styles.cn_inner}>
                <div className={styles.cn_logo_wrap}>
                    <Logo />
                </div>
                <div className={styles.cn_title_wrap}>
                    <h1>Welcome to Your Project Workspace</h1>
                    <p>Sign in to connect with your team, share ideas, and achieve project goals</p>
                </div>
                <div className={styles.cn_form_wrap}>
                    <InternalLoginForm />
                </div>
            </div>
            <button>back to website</button>
        </div>
    )
}

export default InternalLoginPage