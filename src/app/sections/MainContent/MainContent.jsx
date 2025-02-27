import styles from "./MainContent.module.css";
import Image from "next/image";
import { data1, data2 } from "./data";

const genrateComponent = (data) => {
  return (
    <div className={styles.MainContent}>
      <div className={styles.MainContentContainer}>
        {data.map((item) => (
          <div key={item.id} className={styles.row}>
            <Image src={item.imgSrc} alt={item.id} />
            <div className={styles.rowConrent}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const MainContent1 = () => {
  return genrateComponent(data1);
};

export const MainContent2 = () => {
  return genrateComponent(data2);
};
