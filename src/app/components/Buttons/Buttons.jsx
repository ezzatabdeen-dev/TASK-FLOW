import styles from './Buttons.module.css'
import Link from "next/link";

export const PrimaryButton = (props) => {
    return (
        <>
            <Link href={props.hash} className={styles.PrimaryButton}>{props.content}</Link>
        </>
    )
}