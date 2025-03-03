"use client"
import styles from './WraperPageContent.module.css'
import { useAppContext } from "@/Context/index";

export const WraperPageContent = ({children}) => {
    const { isOpen } = useAppContext();
    return (
        <div className={`${styles.WraperPageContent} ${isOpen ? styles.WraperPageContentResize : null}`}>
            {children}
        </div>
    )
}