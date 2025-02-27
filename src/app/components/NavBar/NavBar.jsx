"use client";
import styles from "./NavBar.module.css";
import Link from "next/link";
import { Logo } from "../../components/index";
import { usePathname } from "next/navigation";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { useState } from "react";

const login = false;

const NavBar = () => {
  const pathname = usePathname();
  if (pathname === "/login" || pathname === "/register" || pathname === "/reset") return null;
  return <>{login ? <h1>NavBar</h1> : <LgoOutNavBar />}</>;
};
export default NavBar;

// LgoOut NavBar
const LgoOutNavBar = () => {
  const [isOpenDropDown, setOpenDropDown] = useState(false);
  const handleToggleMenu = () => setOpenDropDown(!isOpenDropDown);

  const data = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Dashboard", path: login ? "/dashboard" : "/login" },
    { id: 3, name: "Projects", path: login ? "/projects" : "/login" },
    { id: 5, name: "Tasks", path: login ? "/tasks" : "/login" },
  ];

  const pathname = usePathname();
  return (
    <header className={styles.LgoOutNavBarHeader}>
      <div className={styles.LgoOutNavBarHeaderContainer}>

        <Logo inlineStyle={{width: "clamp(120px, 30%, 150px)", marginRight: "2rem"}} />

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
