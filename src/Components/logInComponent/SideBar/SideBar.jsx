"use client"
import styles from "./SideBar.module.css";
import { useAppContext } from "@/Context/index";

export const SideBar = () => {
  const { isOpen } = useAppContext();

return (
  <div
    className={`${styles.ContainerSideBarActive} ${
      !isOpen ? styles.ContainerSideBarUnActive : null
    }`}
  ></div>
);
};
