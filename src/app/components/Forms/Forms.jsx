import styles from "./Forms.module.css";
import { Logo } from "../../components/index";

const Forms = (props) => {
  return (
    <div className={styles.Forms}>
      <div className={styles.headerForm}>
        <Logo
          srcImg={"./task-flow-prand-light.svg"}
          inlineStyle={{ width: "230px"}}
          className={styles.prand}
        />
      </div>
      {props.children}
    </div>
  );
};
export default Forms;
