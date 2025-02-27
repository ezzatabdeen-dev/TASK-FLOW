import styles from './TextBlock.module.css'
import Image from 'next/image'
import textBlack from '../../assets/images/text-block.webp'

const TextBlock = () => {
    return (
        <>
        <div className={styles.TextBlock} id='s1'>
            <div className={styles.TextBlockContainer}>
                <h2>View all employee to-dos across <br className={styles.displaybr}/> all projects at the team level</h2>
                <p>In a typical company employees are working on several projects simultaneously. But how to track their <br className={styles.displaybr}/> performance if their tasks are distributed between different projects? Bordio solves this problem by brining all these tasks to a single board at the team level. One place where you can manage all employees’ work.</p>
                <Image src={textBlack} alt='textBlack' />
            </div>
        </div>
        </>
    )
}
export default TextBlock