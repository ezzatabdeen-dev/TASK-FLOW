"use client";
import styles from "./HeaderSideBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/Context/index";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const HeaderSideBar = () => {
  const { isOpen, handleChange } = useAppContext();

  const sidebarClass = isOpen
    ? styles.headerSideBar
    : styles.headerSideBarClose;
  const imageClass = isOpen ? null : styles.close;

  return (
    <div className={sidebarClass}>
      <Link href={"/"}>
        <Image
          src="/task-flow-prand-light.svg"
          alt="Logo"
          width={100}
          height={100}
          className={imageClass}
        />
      </Link>
      <div className={styles.HeaderSideBarBoxIcon} onClick={handleChange}>
        {isOpen ? (
          <MdChevronLeft className={styles.HeaderSideBarIcon} />
        ) : (
          <MdChevronRight className={styles.HeaderSideBarIcon} />
        )}
      </div>
    </div>
  );
};
