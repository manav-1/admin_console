import "../css/landing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery"; // eslint-disable-line
import { Popper } from "react-popper"; // eslint-disable-line
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navbar from "../customComponents/Navbar";
import Header from "../customComponents/Header";
import AboutUs from "../customComponents/AboutUs";
import Faculty from "../customComponents/Faculty"; // eslint-disable-line
import AboutCollege from "../customComponents/AboutCollege";
import TeamComponent from "../customComponents/TeamComponent"; // eslint-disable-line
import TeamFacultySlider from "../customComponents/TeamFacultySlider";
import Footer from "../customComponents/Footer";

export default function Landing({ navigation }) {
  return (
    <div style={{ width: "100%" }}>
      <Navbar navigation={navigation} />
      <Header />
      <div className="main-landing-content">
        <AboutUs />
        <AboutCollege />
        <TeamFacultySlider />
        {/* <Faculty/> */}
      </div>
      {/* <TeamComponent/> */}
      <Footer />
    </div>
  );
}
