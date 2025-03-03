"use client";
import { useAppContext } from "@/Context/index";
import { LogInNavBar, LogOutNavBar, HeaderSideBar, SideBar } from "@/Components/index";

export const NavBar = () => {
  const { usLoginState } = useAppContext();

  return (
    <>
      {usLoginState ? (
        <>
          <LogInNavBar />
          <HeaderSideBar />
          <SideBar />
        </>
      ) : (
        <LogOutNavBar />
      )}
    </>
  );
};
