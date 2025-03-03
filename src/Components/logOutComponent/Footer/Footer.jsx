import styles from "./Footer.module.css";
import Link from "next/link";
import { Logo } from "../../index";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterContainer}>
        <Logo inlineStyle={{width: "180px"}} />
        <p className={styles.FooterRowTow}>
          Work management platform for result-driven teams
        </p>
        <div className={styles.FooterRowThree}>
          <span className={styles.FooterText}>
            Copyright © TaskFlow 2025
            <code>v1.0</code>
          </span>
          <span className={styles.FooterLinks}>
            <Link href={"/policy"}>Privacy Policy</Link>&
            <Link href={"/service"}>Terms of Service</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
