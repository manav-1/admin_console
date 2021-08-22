import React from "react";
import "../css/portal.css";
import menuOpen from "../../assets/previous.png";
import menuClose from "../../assets/next.png";
import Profile from "../screens/Profile";
import Placements from "../screens/Placements";
import NewOpportunity from "../screens/NewOpportunity";
import AdminOpportunity from "../screens/AdminOpportunity";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PortalStack({ navigation }) {
  const [component, setComponent] = useState(
    <Placements navigation={navigation} />
  );

  const [open, setOpen] = useState(true);
  const [icon, setIcon] = useState(menuOpen);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    (async () => {
      const loggedUserId = await AsyncStorage.getItem("loggedUserId");
      const loggedUserEmail = await AsyncStorage.getItem("loggedUserEmail");
      if (
        loggedUserEmail === "manav190839@keshav.du.ac.in" &&
        loggedUserId === "Gv7QoIXstBTCnS2rAuv3EgyM3KG3"
      ) {
        setIsAdmin(true);
      }
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
        document.getElementById("main").style.width = "100%";
        setIcon(menuClose);
      } else {
        document.getElementById("side").style.width = "20%";
        document.getElementById("main").style.width = "80%";
        setIcon(menuOpen);
      }
      setOpen(!open);
    } else {
      if (open) {
        document.getElementById("side").style.width = "0%";
        document.getElementById("main").style.width = "100%";
        setIcon(menuClose);
      } else {
        document.getElementById("side").style.width = "40%";
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
        navigation.navigate("Landing");
      } catch (exception) {
      }
    }
  return (
    <div className="main-portal">
      <div className="d-flex flex-row align-items-center justify-content-between p-3">
        <button onClick={hideNav}>
          <img src={icon} alt="menu" style={{ width: "3rem" }} />
        </button>

        <h1 className="pHeading ">Placement Portal</h1>

        <button onClick={logoutClicked} className="logout">Logout</button>
      </div>
      <div className="portal">
        <div id="side" className="portal-side-container">
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
          <button onClick={() => navigation.navigate("Landing")}>
            Back to Website
          </button>
        </div>
        <div id="main" className="portal-main-container">
          <ScrollView style={{ backgroundColor:'#c8d8e4cc',height: "100vh" }}>
            {component}
          </ScrollView>
        </div>
      </div>
    </div>
  );
}
