"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const AppContext = createContext(null);

export const AppWrapper = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 920 });
  const [isOpen, setIsOpen] = useState(false);
  const [usLoginState, setUsLoginState] = useState(true);

  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile]);

  const handleChange = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <AppContext.Provider
      value={{ 
        isOpen,
        setIsOpen,
        handleChange,
        usLoginState,
        setUsLoginState,
    }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
}
