import styles from "./Logo.module.css";
import Link from "next/link";
import Image from "next/image";

export const Logo = ({inlineStyle, srcImg}) => {
  return (
    <Link href="/" className={styles.Logo} style={inlineStyle}>
      <Image
        src={srcImg ? srcImg : "./task-flow-prand.svg"}
        alt="Prand"
        width={100}
        height={20}
      />
    </Link>
  );
};