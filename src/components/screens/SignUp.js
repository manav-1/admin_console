import "../css/style.css";
import logo from "../../assets/logo.png";
import React, { useState } from "react";
import SnackBar from "../customComponents/SnackBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [snackBarText, setSnackBarText] = useState("");
  const [snackBarType, setSnackBarType] = useState("");

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
  function registerButtonClicked() {
    if (email.includes("@keshav.du.ac.in")) {
      axios
        .post("http://127.0.0.1:3001/signup", {
          email,
          password,
          mobile,
          name,
        })
        .then(async (resp) => {
          if (resp.data !== "Error") {
            await AsyncStorage.setItem("loggedUserEmail", email);
            await AsyncStorage.setItem("loggedUserId", resp.data.uid);

            displaySnackBar("success", "Successfully Registered");
            navigation.navigate("Portal");
          } else {
            displaySnackBar("error", "Failed to register user");
          }
        });
    } else {
      displaySnackBar("error", "Please Enter your official college email-id");
    }
  }

  function handleLoginClick() {
    navigation.navigate("Login");
  }
  return (
    <div className="main-container">
      <button
        onClick={() => navigation.navigate("Landing")}
        className="header-logo"
      >
        <img src={logo} alt="Logo" />
      </button>
      <div className="sign-container">
        <form id="form" className="form-login" method="post">
          <ul className="login-nav">
            <li className="login-nav__item active">
              <a href="https://google.com">SignUp</a>
            </li>
          </ul>
          <label htmlFor="username" className="login__label">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="login__input"
            value={name}
            onInput={(e) => setName(e.target.value)}
          />
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

          <label htmlFor="pass" className="login__label mt-3">
            Confirm Password
          </label>
          <input
            id="pass"
            type={showPass ? "text" : "password"}
            name="confpassword"
            className="login__input"
            value={confirmPassword}
            onInput={(e) => setConfirmPassword(e.target.value)}
          />
          <label htmlFor="pass" className="login__label mt-3">
            Mobile
          </label>
          <input
            id="pass"
            type="number"
            name="number"
            className="login__input"
            value={mobile}
            onInput={(e) => setMobile(e.target.value)}
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
            onClick={registerButtonClicked}
          >
            Sign Up
          </button>

          <p className="login__forgot">
            Already Registered <br />
            <button type="button" className="reg" onClick={handleLoginClick}>
              Login Here
            </button>
          </p>
        </form>
      </div>
      {snackBarVisible ? (
        <SnackBar
          isVisible={snackBarVisible}
          text={snackBarText}
          type={snackBarType}
          onClose={hideSnackBar}
        />
      ) : null}
    </div>
  );
}
