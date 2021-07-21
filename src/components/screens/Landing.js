import "../css/landing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.png";
import team from "../../assets/team.png";
import $ from "jquery"; // eslint-disable-line
import { Popper } from "react-popper"; // eslint-disable-line
// import {Navbar, Container, NavDropdown} from 'react-bootstrap'
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";

export default function Landing({ navigation }) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div style={{ width: "100%" }}>
      <nav className="navbar navbar-expand-lg bg-light py-0 navbar-light fixed-top">
        <button
          className="navbar-brand"
          onClick={() => navigation.navigate("Landing")}
        >
          <img src={logo} alt="Logo" className="header__logo" />
        </button>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="main-nav"
        >
          <ul className="bsnav navbar-nav">
            <li className="nav-item pl-4">
              <a href="#About" onClick={handleNavCollapse} className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item pl-4">
              <button
                className="nav-link"
                onClick={() => {
                  handleNavCollapse();
                  navigation.navigate("Dashboard");
                }}
              >
                Placement Portal
              </button>
            </li>
            <li className="nav-item pl-4">
              <a
                href="#Faculty"
                onClick={handleNavCollapse}
                className="nav-link"
              >
                Faculty
              </a>
            </li>
            <li className="nav-item pl-4">
              <a
                href="#contact"
                onClick={handleNavCollapse}
                className="nav-link"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div style={{ width: "100%", margin: "auto" }}>
        <header style={{ width: "100%" }} className="header mt-5">
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="marginprob heading-primary--main">
                Start@KMV
              </span>
              <span className="heading-primary--sub">The Placement Cell</span>
            </h1>
            <h1 className="heading-primary mt-5">
              {" "}
              <span className="heading-primary--sub">Keshav Mahavidyalaya</span>
            </h1>
            <br />
          </div>
        </header>
      </div>
      <div
        id="About"
        style={{ width: "100%", margin: "auto" }}
        className="landing-about row"
      >
        <h1 className="col-sm-12">About Us</h1>
        <div className="about col-sm-6">
          <h3 className="heading-tert margin-bottom-small">Our Aim</h3>
          <p className="paragraph">
            Start@KMV, the Placement Cell of the college works diligently
            throughout the year in its endeavour to reduce the gap between
            students and recruiters. The sole aim of the cell is to bring vision
            and acts as a guiding force and facilitator for the students. The
            cell strongly aims at inculcating the pursuit of knowledge and
            dexterity to reason and analysis in each and every student.
          </p>

          <h3 className="heading-tert margin-bottom-small">Start@KMV</h3>
          <p className="paragraph">
            To nurture in-demands skills, the cell successfully organised
            activities, some of which are the Virtual Internship Fair, C.V.
            Building workshop and a series of webinars by industry professionals
            and notable alumnus. The past few years have been immensely fruitful
            in terms of the companies that visited the college and it has carved
            a niche for itself by grooming proficient industry ready
            individuals.
          </p>
        </div>
        <div className="col-sm-6">
          <img style={{ width: "100%" }} src={team} alt="Team" />
        </div>
      </div>
      <div
        id="Faculty"
        style={{ width: "100%", margin: "auto" }}
        className="landing-about row"
      >
        <h1 className="col-sm-12">Faculty</h1>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
          style={{ width: "90%", margin: "auto" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={team} alt="First slide" />
              <div className="d-flex flex-direction-row justify-content-around bg-dark text-center text-white">
                <div>
                  <h5>Convener</h5>
                  <p>Mr Subodh Pandit</p>
                </div>
                <div>
                  <h5>Convener</h5>
                  <p>Mr Subodh Pandit</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={team} alt="Second slide" />
              <div className="d-flex flex-direction-row justify-content-around bg-dark text-center text-white">
                <div>
                  <h5>Convener</h5>
                  <p>Mr Subodh Pandit</p>
                </div>
                <div>
                  <h5>Convener</h5>
                  <p>Mr Subodh Pandit</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={team} alt="Third slide" />
              <div className="d-flex flex-direction-row justify-content-around bg-dark text-center text-white">
                <div>
                  <h5>Convener</h5>
                  <p>Mr Subodh Pandit</p>
                </div>
                <div>
                  <h5>Convener</h5>
                  <p>Mr Subodh Pandit</p>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <footer id="contact" className="text-center py-5">
        <div className="social">
          <a
            href="https://www.instagram.com/placementcell_kmv/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/keshavmahavidyalaya/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <p className="copyright text-center">
            <b>Start@KMV, The Placement Cell</b>
            <br />
            Keshav Mahavidyalaya
            <br />
            University of Delhi
          </p>
          <p className="copyright mt-5 mb-0">
            Managed by
            <br />
            <a href="https://github.com/manav-1">Manav Arora</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
