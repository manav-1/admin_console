import React from "react";
import "../css/portal.css";
import menuOpen from "../../assets/previous.png";
import menuClose from "../../assets/next.png";
import Profile from "../screens/Profile";
import Placements from "../screens/Placements";
import NewOpportunity from "../screens/NewOpportunity";
import AdminOpportunity from "../screens/AdminOpportunity";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function PortalStack({ navigation }) {
  const history = useHistory();
  const [component, setComponent] = useState(
    <Placements navigation={navigation} />
  );

  const [open, setOpen] = useState(true);
  const [icon, setIcon] = useState(menuOpen);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    document.title = "Placement Portal";
  }, []);
  useEffect(() => {
    (async () => {
      const loggedUserId = await AsyncStorage.getItem("loggedUserId");
      const loggedUserEmail = await AsyncStorage.getItem("loggedUserEmail");
      axios
        .post("https://placement-portal-server.herokuapp.com/checkadmin", {
          loggedUserId,
          loggedUserEmail,
        })
        .then((response) => {
          if (response.status === 200 && response.data === "Admin") {
            setIsAdmin(true);
          }
        })
        .catch((err) => {});
    })();
    if (window.screen.width > 768) {
      if (open) {
        document.getElementById("side").style.width = "20%";
        document.getElementById("main").style.width = "80%";
      }
    } else {
      if (open) {
        document.getElementById("side").style.width = "40%";
        document.getElementById("main").style.width = "60%";
      }
    }
  });

  function placmentClicked() {
    hideNav();
    setComponent(<Placements navigation={navigation} />);
  }
  function profileClicked() {
    hideNav();
    setComponent(<Profile navigation={navigation} />);
  }
  function newOppurtunityClicked() {
    hideNav();
    setComponent(<NewOpportunity navigation={navigation} />);
  }
  function PlacementClicked() {
    hideNav();
    setComponent(<AdminOpportunity navigation={navigation} />);
  }
  function hideNav() {
    if (window.screen.width > 768) {
      if (open) {
        document.getElementById("side").style.width = "0%";
        document.getElementById("side").style.opacity = 0;
        document.getElementById("main").style.width = "100%";
        setIcon(menuClose);
      } else {
        document.getElementById("side").style.width = "20%";
        document.getElementById("side").style.opacity = 1;
        document.getElementById("main").style.width = "80%";
        setIcon(menuOpen);
      }
      setOpen(!open);
    } else {
      if (open) {
        document.getElementById("side").style.width = "0%";
        document.getElementById("side").style.opacity = 0;
        document.getElementById("main").style.width = "100%";
        setIcon(menuClose);
      } else {
        document.getElementById("side").style.width = "40%";
        document.getElementById("side").style.opacity = 1;
        document.getElementById("main").style.width = "60%";
        setIcon(menuOpen);
      }
      setOpen(!open);
    }
  }
  async function logoutClicked() {
    try {
      await AsyncStorage.removeItem("loggedUserEmail");
      await AsyncStorage.removeItem("loggedUserId");
      // navigation.navigate("Landing");
      history.push("/landing");
    } catch (exception) {}
  }
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div className="d-flex flex-row align-items-center justify-content-between p-3 ">
        <button onClick={hideNav}>
          <img src={icon} alt="menu" style={{ width: "3rem" }} />
        </button>

        <h1 className="pHeading ">Placement Portal</h1>

        <button onClick={logoutClicked} className="logout">
          Logout
        </button>
      </div>
      <div className="portal">
        <div className="portal-side-container" id="side">
          <button id="Placements" onClick={placmentClicked}>
            Placements
          </button>
          <button id="Profile" onClick={profileClicked}>
            Profile
          </button>
          {isAdmin ? (
            <>
              <button onClick={newOppurtunityClicked}>
                Adding New Opportunity
              </button>
              <button onClick={PlacementClicked}>Placement Cell Admin</button>
            </>
          ) : null}
          <button onClick={() => history.push("/landing")}>
            Back to Website
          </button>
        </div>
        <div className="portal-main-container" id="main">
          {component}
        </div>
      </div>
    </div>
  );
}
