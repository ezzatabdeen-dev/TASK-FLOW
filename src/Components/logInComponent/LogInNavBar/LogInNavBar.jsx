"use client";
import styles from "./LogInNavBar.module.css";
import Image from "next/image";
import { useAppContext } from "@/Context/index";

export const LogInNavBar = () => {
  const { isOpen } = useAppContext();

  const navBarClass =  isOpen ? styles.ContainerNavBarResize : null;

  return (
    <div className={`${styles.ContainerNavBar} ${navBarClass}`}>

    </div>
  );
};
