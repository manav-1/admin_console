/* eslint-disable */
import "../css/landing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect } from "react";

import Navbar from "../customComponents/Navbar";
import Header from "../customComponents/Header";
import AboutUs from "../customComponents/AboutUs";
import AboutCollege from "../customComponents/AboutCollege";
import Society from "../customComponents/Society";
import TeamFacultySlider from "../customComponents/TeamFacultySlider";
import Footer from "../customComponents/Footer";

export default function Landing({ navigation }) {
  document.title = "Start@KMV, Placement Cell KMV";

  return (
    <div style={{ width: "100%" }}>
      <Navbar navigation={navigation} />
      <Header />
      <div className="main-landing-content">
        <AboutUs />
        <AboutCollege />
        <Society />
      </div>
      <TeamFacultySlider />
      <Footer />
    </div>
  );
}
