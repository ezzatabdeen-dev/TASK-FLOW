"use client";
import styles from "./LogOutNavBar.module.css";
import Link from "next/link";
import { Logo } from "../../index";
import { usePathname } from "next/navigation";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { useState } from "react";

const useLoginState = false;

export const LogOutNavBar = () => {
  const [isOpenDropDown, setOpenDropDown] = useState(false);
  const handleToggleMenu = () => setOpenDropDown(!isOpenDropDown);

  const data = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Dashboard", path: useLoginState ? "/dashboard" : "/login" },
    { id: 3, name: "Projects", path: useLoginState ? "/projects" : "/login" },
    { id: 5, name: "Tasks", path: useLoginState ? "/tasks" : "/login" },
  ];

  const pathname = usePathname();
  if (pathname === "/login" || pathname === "/register" || pathname === "/reset") return null;
  
  return (
    <header className={styles.LgoOutNavBarHeader}>
      <div className={styles.LgoOutNavBarHeaderContainer}>
        <Logo
          inlineStyle={{
            width: "clamp(120px, 30%, 150px)",
            marginRight: "2rem",
          }}
        />

        <div
          className={`${styles.LgoOutNavBarLinks} ${
            isOpenDropDown ? styles.active : ""
          }`}
        >
          {data.map((link) => (
            <Link
              onClick={handleToggleMenu}
              key={link.id}
              href={link.path}
              className={pathname === link.path ? styles.active : ""}
            >
              {link.name}
            </Link>
          ))}

          {/* sm button */}
          <div className={styles.buttonGroupDropMinue}>
            <Link href={"/login"} className={`${styles.loginButton}`}>
              Log In
            </Link>
            <Link href={"/register"} className={`${styles.registerButton}`}>
              Sign Up
            </Link>
          </div>
        </div>

        <div className={styles.spaceBox} />

        <div className={styles.LgoOutNavBarRightItem}>
          <div className={styles.buttonGroupNavBar}>
            <Link href={"/login"} className={`${styles.loginButton}`}>
              Log In
            </Link>
            <Link href={"/register"} className={`${styles.registerButton}`}>
              Sign Up
            </Link>
          </div>

          <div
            className={styles.toggleMenueContainer}
            onClick={handleToggleMenu}
          >
            {isOpenDropDown ? (
              <MdOutlineClose className={styles.toggleMenue} />
            ) : (
              <MdOutlineMenu className={styles.toggleMenue} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
