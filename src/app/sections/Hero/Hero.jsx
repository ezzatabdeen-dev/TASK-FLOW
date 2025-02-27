"use client";
import styles from "./Hero.module.css";
import Image from "next/image";
import { data } from './data'
import { PrimaryButton } from '../../components/Buttons/Buttons'

import { useState, useCallback } from "react";

const Hero = () => {
  const [path, setPath] = useState("calendarPlanner");

  const handlePath = useCallback((hash) => {
    setPath(hash);
  }, []);

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1>
            Work management platform <br /> for result-driven teams
          </h1>
          <p className={styles.heroDiscription}>
            Task Flow helps teams to plan the work, track the progress and get
            sh*t done.
          </p>
          <PrimaryButton hash='./login' content='Try Free'/>
          <span>No credit card required.</span>

          <div className={styles.showServices}>
            <div className={styles.showServicesHeader}>
              {data.map((item) => (
                <div
                  onClick={() => handlePath(item.path)}
                  key={item.id}
                  className={`${styles.showServicesHeaderBoxIcon} ${
                    path === item.path ? styles.active : ""
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={20}
                    height={20}
                  />
                  <span className={styles.servicesTitleIcon}>{item.name}</span>
                </div>
              ))}
            </div>
            {data.map((item) => (
              <p key={item.id} className={path === item.path ? styles.servicesTitle : ''}>
                {path === item.path ? item.name : ""}
              </p>
            ))}

            {data.map((item) =>
              path === item.path ? (
                <Image
                  key={item.id}
                  src={item.imgSrc}
                  alt={item.name}
                  width={1200}
                  className={styles.servicesImage}
                />
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
