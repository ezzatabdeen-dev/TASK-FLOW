"use client";
import styles from "./login.module.css";
import Image from "next/image";
import Link from "next/link";
import { Forms } from "@/Components/index";
import GooglePrand from "@/assets/images/google_logo-UibcS5yq.png";
import { MdError } from "react-icons/md";
import { useState } from "react";

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const validateEmail = (email) => {
    if (!email) {
      setEmailError("Email is Required");
      setEmailError(null);
    } else if (!regEmail.test(email)) {
      setEmailError("Enter Valid Email");
    } else {
      setEmailError(null);
    }
  };

  const validatePassword = (password) => {
    if (!password) {
      setPasswordError("Password is Required");
      setPasswordError(null);
    } else if (!regPassword.test(password)) {
      setPasswordError("Please enter a Valid Password [A-Z a-z 0-9 !@#$%^&*]");
    } else {
      setPasswordError(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);

    if (!emailError && !passwordError) {
      // send data to db her
      const loginData = { email, password, };
      console.log("Data to be sent:", loginData);
      // edit this alert
      alert("Logged in successfully!");
    }
  };

  return (
    <Forms>
      <div className={styles.loginBox}>
        <h2>Log in</h2>
        <button className={styles.googleLogin}>
          <Image src={GooglePrand} alt="Prand" width={100} height={20} />
          Log In With Google
        </button>
        <div className={styles.xyzbxn}>
          <span>or log in with email</span>
        </div>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <input
            autoFocus
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            className={emailError ? styles.inputError : styles.mb}
          />
          {emailError ? (<p className={styles.errorText}> <MdError /> {emailError}</p>) : null}

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
            className={passwordError ? styles.inputError : styles.mb}
          />
          {passwordError ? (<p className={styles.errorText}> <MdError /> {passwordError}</p>) : null}

          <button type="submit">Log in</button>
        </form>
        <div className={styles.loginFooter}>
          <p>
            Forgot password? <Link href={"./reset"}>Reset</Link>
          </p>
          <p>
            Don't have an account? <Link href={"./register"}>Sign up</Link>
          </p>
        </div>
      </div>
    </Forms>
  );
};

export default Login;