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

export default function PortalStack({ navigation }) {
  const [component, setComponent] = useState(
    <Placements navigation={navigation} />
  );

  const [open, setOpen] = useState(true);
  const [icon, setIcon] = useState(menuOpen);

  useEffect(() => {
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
  return (
    <div className= "main-portal">
      <div className="toggle-container">
        <button onClick={hideNav}>
          <img src={icon} alt="menu" style={{width: '3rem'}} />
        </button>

        <h1>Placement Portal</h1>
      </div>
      <div className="portal">
        <div id="side" className="portal-side-container">
          {/* <p>Placement Portal</p> */}
          <button id="Placements" onClick={placmentClicked}>
            Placements
          </button>
          <button id="Profile" onClick={profileClicked}>
            Profile
          </button>
          <button onClick={newOppurtunityClicked}>
            Adding New Opportunity
          </button>
          <button onClick={PlacementClicked}>Placement Cell Admin</button>
          <button onClick={() => navigation.navigate("Landing")}>
            Back to Website
          </button>
        </div>
        <div id="main" className="portal-main-container">
          <ScrollView className="scrolls" style={{height:'100vh'}}>{component}</ScrollView>
        </div>
      </div>
    </div>
  );
}
// const Drawer = createDrawerNavigator();
// export default function PortalStack({ navigation }) {
//   return (
//     <div>
//       <div>
//         <button
//           onClick={() => navigation.dispatch(DrawerActions.toggleDrawer())}
//         >
//           Open Drawer
//         </button>
//       </div>
//       <Drawer.Navigator initialRouteName="Placements">
//         <Drawer.Screen name="Placements" component={Placements} />
//         <Drawer.Screen name="Profile" component={Profile} />
//         <Drawer.Screen name="NewOpportunity" component={NewOpportunity} />
//         {/* <Drawer.Screen name="Placements" component={Placements} /> */}
//       </Drawer.Navigator>
//     </div>
//   );
// }
