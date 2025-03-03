import styles from './FooterForm.module.css'
import { PrimaryButton } from '../Buttons/Buttons'

const FooterForm = () => {
    return (
        <div className={styles.FooterForm}>
            <div className={styles.FooterFormContainer}>
                <h2>Transform the way your team works</h2>
                <p>Start managing your team instead of managing tools. Your team will thank you!</p>
                <PrimaryButton hash='./login' content='Try Free'/>
            </div>
        </div>
    )
}
export default FooterForm