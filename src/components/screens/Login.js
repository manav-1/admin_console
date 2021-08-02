/* eslint-disable jsx-a11y/anchor-is-valid */
import "../css/style.css";
import logo from "../../assets/logo.png";
import React, { useState, useEffect } from "react";
import SnackBar from "../customComponents/SnackBar";
import firebase from "../FirebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [snackBarText, setSnackBarText] = useState("");
  const [snackBarType, setSnackBarType] = useState("");
  useEffect(() => {
    (async () => {
      //checking if any user is already logged or not
      const loggedUserId = await AsyncStorage.getItem("loggedUserId");

      if (loggedUserId) {
        navigation.navigate("Portal");
      }
    })();
  });

  function displaySnackBar(type, text) {
    setSnackBarType(type);
    setSnackBarText(text);
    setSnackBarVisible(true);
  }

  //function to hide snackbar
  function hideSnackBar() {
    setSnackBarVisible(false);
  }

  function toggle() {
    setShowPass(!showPass);
  }
  function loginButtonClicked() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (user) => {
        try {
          const userId = user.user.uid;

          //making cookie of the logged user
          await AsyncStorage.setItem("loggedUserEmail", email);
          await AsyncStorage.setItem("loggedUserId", userId);
          displaySnackBar("success", "Logged in Successfully");
          navigation.navigate("Portal");
        } catch {
          displaySnackBar("error", "Something went wrong");
        }
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        displaySnackBar("error", errorMessage + errorCode);
      });
  }

  //eslint-disable-next-line
  function handleSignUpClick() {
    navigation.navigate("SignUp");
  }
  function forgotPasswordClick() {
    var email = window.prompt("Enter your email address");
    if (email.trim().includes("@keshav.du.ac.in")) {
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(function () {
          // Password reset email sent.
          displaySnackBar("success", "Password reset email sent");
        })
        .catch(function (error) {
          // Error occurred. Inspect error.code.
          // var message = error.message
          displaySnackBar("error", "User not Found");
        });
    } else {
      displaySnackBar("error", "Please enter your Keshav Id");
    }
  }
  return (
    <>
      <div className="main-container">
        <button
          onClick={() => navigation.navigate("Landing")}
          className="header-logo"
        >
          <img src={logo} alt="Logo" />
        </button>
        <div className="login-container">
          <form id="form" className="form-login" method="post">
            <ul className="login-nav">
              <li className="login-nav__item active">
                <a href="https://google.com">LogIn</a>
              </li>
            </ul>
            <label htmlFor="username" className="login__label">
              Email
            </label>
            <input
              id="username"
              type="text"
              name="username"
              className="login__input"
              value={email}
              onInput={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="pass" className="login__label mt-3">
              Password
            </label>
            <input
              id="pass"
              type={showPass ? "text" : "password"}
              name="password"
              className="login__input"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
            />
            <label className="login__label--checkbox" htmlFor="cbox">
              <input
                className="login__input--checkbox"
                id="cbox"
                type="checkbox"
                name="checkbox"
                onClick={toggle}
              />
              Show Password
            </label>
            <button
              className="login__submit"
              type="button"
              onClick={loginButtonClicked}
            >
              Sign in
            </button>
            <a href="#" onClick={forgotPasswordClick} className="login__forgot">
              Forgot Password?
            </a>

            {/* <p className="login__forgot">
              Haven't signed up <br />
              <button type="button" className="reg" onClick={handleSignUpClick}>
                Register Here
              </button>
            </p> */}
          </form>
        </div>
      </div>
      {snackBarVisible ? (
        <SnackBar
          isVisible={snackBarVisible}
          text={snackBarText}
          type={snackBarType}
          onClose={hideSnackBar}
        />
      ) : null}
    </>
  );
}
