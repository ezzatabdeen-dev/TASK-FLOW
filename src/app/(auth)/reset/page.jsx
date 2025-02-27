import styles from "./reset.module.css";
import { Forms } from "../../components/index";

const reset = () => {
  return (
    <Forms>
      <div className={styles.resetBox}>
        <h2>Forgot Your Password?</h2>
        <form className={styles.resetForm}>
          <input
            autoFocus
            type="text"
            placeholder="Email"
            name="email"
            className={styles.mb}
            // emailError ? styles.inputError : 
          />
          {/* {emailError ? (
            <p className={styles.errorText}>
              {" "}
              <MdError /> {emailError}
            </p>
          ) : null} */}
          <button type="submit">Request password reset</button>
        </form>
      </div>
    </Forms>
  );
};
export default reset;
