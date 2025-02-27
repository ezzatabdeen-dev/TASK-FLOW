"use client";
import styles from "./register.module.css";
import Image from "next/image";
import Link from "next/link";
import { Forms } from "../../components/index";
import GooglePrand from "../../assets/images/google_logo-UibcS5yq.png";
import { MdError } from "react-icons/md";
import { useState } from "react";

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const Register = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);

  const [emailError, setEmailError] = useState(null);
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
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

  const validateFN = (fn) => {
    if (!fn) {
      setFirstNameError("First name is required");
      setFirstNameError(null);
    } else if (fn.length < 3) {
      setFirstNameError("Minimum name 3 characters");
    } else {
      setFirstNameError(null);
    }
  };

  const validateLN = (Ln) => {
    if (!Ln) {
      setLastNameError("Last name is required");
      setLastNameError(null);
    } else if (Ln.length < 3) {
      setLastNameError("Minimum name 3 characters");
    } else {
      setLastNameError(null);
    }
  };

  const validatePass = (pass) => {
    if (!pass) {
      setPasswordError("Password is required");
      setPasswordError(null);
    } else if (!regPassword.test(pass)) {
      setPasswordError("Please enter a Valid Password [A-Z a-z 0-9 !@#$%^&*]");
    } else {
      setPasswordError(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateEmail(email);
    validateFN(firstName);
    validateLN(lastName);
    validatePass(password);

    if ( !emailError && !firstNameError && !lastNameError && !passwordError ) {
      const userData = { email, firstName, lastName, password, };
      // send data to db her
      console.log("Data to be sent:", userData);
      // edit this alert
      alert("Successfully Account is Created");
    }
  };

  return (
    <Forms>
      <div className={styles.signUpBox}>
        <h2>Sign Up</h2>
        <button className={styles.googleSignUp}>
          <Image src={GooglePrand} alt="Prand" width={100} height={20} />
          Sign Up With Google
        </button>
        <div className={styles.xyzbxn}>
          <span>or sign up with email</span>
        </div>

        <form className={styles.signUpForm} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            className={emailError ? styles.inputError : styles.mb}
            autoFocus
          />
          {emailError ? (<p className={styles.errorText}> <MdError /> {emailError}</p>) : null}

          <input
            autoComplete="off"
            type="text"
            placeholder="Set Your First Name"
            name="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              validateFN(e.target.value);
            }}
            className={firstNameError ? styles.inputError : styles.mb}
          />
          {firstNameError ? (<p className={styles.errorText}> <MdError /> {firstNameError}</p>) : null}

          <input
            autoComplete="off"
            type="text"
            placeholder="Set Your Last Name"
            name="lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              validateLN(e.target.value);
            }}
            className={lastNameError ? styles.inputError : styles.mb}
          />
          {lastNameError ? (<p className={styles.errorText}> <MdError /> {lastNameError}</p>) : null}

          <input
            type="password"
            placeholder="Set Your Password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePass(e.target.value);
            }}
            className={passwordError ? styles.inputError : styles.mb}
          />
          {passwordError ? (<p className={styles.errorText}> <MdError /> {passwordError}</p>) : null}

          <div className={`${styles.checkAgree}`}>
            <span>
              <input
                type="checkbox"
                name="accepted"
                id="accepted"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              />
              <label htmlFor="accepted" className={styles.lable}>
                I agree with
              </label>
            </span>
            <p>
              <Link href={"/policy"}>Privacy Policy</Link>&
              <Link href={"/service"}>Terms of Service</Link>
            </p>
          </div>

          <button type="submit">Sign Up For Free</button>
        </form>

        <div className={styles.signUpFooter}>
          <p>
            Already have an account? <Link href={"./login"}>Log In</Link>
          </p>
        </div>
      </div>
    </Forms>
  );
};

export default Register;
