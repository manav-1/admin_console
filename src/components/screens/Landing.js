import "../css/landing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.png";
import team from "../../assets/team.png";
import subodhSir from "../../assets/subodhSir.jpg";
import $ from "jquery"; // eslint-disable-line
import { Popper } from "react-popper"; // eslint-disable-line
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import { Dimensions } from "react-native";

export default function Landing({ navigation }) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  function MobileComponent() {
    return (
      <>
        <div
          id="carouselExampleIndicators"
          className="carousel slide  faculty"
          data-ride="carousel"
          style={{ width: '80%', margin: "auto" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={subodhSir}
                alt="First slide"
              />
              <div className="text-center bg-dark text-white">
                <h5>Convener</h5>
                <p>Mr Subodh Pandit</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={subodhSir}
                alt="Second slide"
              />

              <div className="text-center bg-dark text-white ">
                <h5>Convener</h5>
                <p>Mr Subodh Pandit</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={subodhSir}
                alt="Third slide"
              />

              <div className="text-center bg-dark text-white ">
                <h5>Convener</h5>
                <p>Mr Subodh Pandit</p>
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
      </>
    );
  }
  function LaptopComponent() {
    return (
      <>
        <div
          id="carouselExampleIndicators"
          className="carousel slide  faculty"
          data-ride="carousel"
          // style={{ width: '80%', margin: "auto" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="w-100 d-flex justify-content-around my-2">
                <img
                  style={{ width: "30%" }}
                  src={subodhSir}
                  alt="First slide"
                />
                <img
                  style={{ width: "30%" }}
                  src={subodhSir}
                  alt="First slide"
                />
              </div>
              <div className="d-flex flex-direction-row justify-content-around  text-center text-white">
                <div className="bg-dark mx-3 w-50">
                  <h5>Convener</h5>
                  <p>Mr Subodh Pandit</p>
                </div>
                <div className="bg-dark mx-3 w-50">
                  <h5>Convener</h5>
                  <p>Mr Subodh Pandit</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="w-100 d-flex justify-content-around my-2">
                <img
                  style={{ width: "30%" }}
                  src={subodhSir}
                  alt="First slide"
                />
                <img
                  style={{ width: "30%" }}
                  src={subodhSir}
                  alt="First slide"
                />
              </div>
              <div className="d-flex flex-direction-row justify-content-around  text-center text-white">
                <div className="bg-dark mx-3 w-50">
                  <h5>Convener</h5>
                  <p>Mr Subodh Pandit</p>
                </div>
                <div className="bg-dark mx-3 w-50">
                  <h5>Convener</h5>
                  <p>Mr Subodh Pandit</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="w-100 d-flex justify-content-around my-2">
                <img
                  style={{ width: "30%" }}
                  src={subodhSir}
                  alt="First slide"
                />
                <img
                  style={{ width: "30%" }}
                  src={subodhSir}
                  alt="First slide"
                />
              </div>
              <div className="d-flex flex-direction-row justify-content-around  text-center text-white">
                <div className="bg-dark mx-3 w-50">
                  <h5>Convener</h5>
                  <p>Mr Subodh Pandit</p>
                </div>
                <div className="bg-dark mx-3 w-50">
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
      </>
    );
  }

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
      <div className="main-landing-content">
        <div
          id="About"
          style={{ width: "100%", margin: "auto" }}
          className="landing-about row"
        >
          <h1 className="col-sm-12">About Us</h1>
          <div className="about col-sm-5">
            <h3 className="heading-tert margin-bottom-small">Our Aim</h3>
            <p className="paragraph">
              Start@KMV, the Placement Cell of the college works diligently
              throughout the year in its endeavour to reduce the gap between
              students and recruiters. The sole aim of the cell is to bring
              vision and acts as a guiding force and facilitator for the
              students. The cell strongly aims at inculcating the pursuit of
              knowledge and dexterity to reason and analysis in each and every
              student.
            </p>

            <h3 className="heading-tert margin-bottom-small">Start@KMV</h3>
            <p className="paragraph">
              To nurture in-demands skills, the cell successfully organised
              activities, some of which are the Virtual Internship Fair, C.V.
              Building workshop and a series of webinars by industry
              professionals and notable alumnus. The past few years have been
              immensely fruitful in terms of the companies that visited the
              college and it has carved a niche for itself by grooming
              proficient industry ready individuals.
            </p>
          </div>
          <div className="col-sm-7 d-flex justify-content-center">
            <img style={{ width: "100%" }} src={team} alt="Team" />
          </div>
        </div>
        <div
          id="Faculty"
          style={{ width: "100%", margin: "auto" }}
          className="landing-about row"
        >
          <h1 className="col-sm-12">Faculty</h1>
          {Dimensions.get("screen").width > 576 ? (
            <LaptopComponent />
          ) : (
            <MobileComponent />
          )}
        </div>
      </div>
      {/* <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"> */}
      <div class="ftC">
        <div class="orizcontatti">
          <div class="colonnacontatti">
            <a href="mailto:placementcell@keshav.du.ac.in">
              <svg
                class="iconacontatti"
                version="1.1"
                id="play"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                height="40px"
                width="40px"
                viewBox="0 0 40 40"
                enable-background="new 0 0 40 40"
                xmlSpace="preserve"
              >
                <circle
                  class="stroke-under"
                  fill="none"
                  stroke="#808080"
                  cx="20"
                  cy="20.1"
                  r="19.3"
                />
                <path
                  class="stroke-solid"
                  fill="none"
                  stroke="#dcdcdc"
                  d="M39.3,20.1c0,10.7-8.7,19.3-19.3,19.3S0.7,30.7,0.7,20.1"
                />
                <path
                  class="stroke-solid"
                  fill="none"
                  stroke="#dcdcdc"
                  d="M0.7,20.1C0.7,9.4,9.3,0.7,20,0.7s19.3,8.7,19.3,19.3"
                />
                <g class="st0">
                  <g>
                    <path
                      d="M29.2,13.3c-0.5-0.5-1.2-0.8-1.9-0.8H13.1c-1.5,0-2.7,1.2-2.7,2.7v9.7c0,1.5,1.2,2.7,2.7,2.7h14.2
			c1.5,0,2.7-1.2,2.7-2.7v-9.7C29.9,14.4,29.7,13.8,29.2,13.3z M12.2,15.2c0-0.5,0.4-0.9,0.9-0.9h14.2c0.5,0,0.9,0.4,0.9,0.9v9.8
			c0,0.4-0.4,0.8-0.9,0.8H13.1c-0.5,0-0.9-0.4-0.9-0.9V15.2z"
                    />
                    <path
                      d="M17.8,19.9l-4.6,4.3c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.2,0.4,0.2c0.1,0,0.3,0,0.4-0.1l4.7-4.4l1.3,1.1
			c0.1,0.1,0.2,0.1,0.4,0.1c0.1,0,0.3,0,0.3-0.1l1.3-1.2l4.7,4.4c0.1,0.1,0.2,0.1,0.4,0.1c0.1,0,0.3-0.1,0.4-0.2
			c0.2-0.2,0.2-0.5,0-0.7l-4.6-4.4l4.6-4.1c0.2-0.2,0.2-0.5,0-0.7c-0.2-0.2-0.5-0.2-0.7,0l-6.3,5.7l-1.2-1.1c0,0,0,0,0,0
			c0,0-0.1-0.1-0.1-0.1l-5-4.5c-0.2-0.2-0.5-0.2-0.7,0c-0.2,0.2-0.2,0.6,0,0.7L17.8,19.9z"
                    />
                  </g>
                </g>
              </svg>
            </a>
            <p>EMAIL</p>
            <p>
              <a
                href="mailto:placementcell@keshav.du.ac.in"
                style={{ fontWeight: "normal" }}
              >
                placementcell@keshav.du.ac.in
              </a>
            </p>
          </div>

          <div class="vl"></div>
          <div class="ol"></div>

          <div class="colonnacontatti">
            <center>
              <svg
                class="iconacontatti"
                version="1.1"
                id="play"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                height="40px"
                width="40px"
                viewBox="0 0 40 40"
                enable-background="new 0 0 40 40"
                xmlSpace="preserve"
              >
                <circle
                  class="stroke-under"
                  fill="none"
                  stroke="#808080"
                  cx="20"
                  cy="20.1"
                  r="19.3"
                />
                <path
                  class="stroke-solid"
                  fill="none"
                  stroke="#dcdcdc"
                  d="M39.3,20.1c0,10.7-8.7,19.3-19.3,19.3S0.7,30.7,0.7,20.1"
                />
                <path
                  class="stroke-solid"
                  fill="none"
                  stroke="#dcdcdc"
                  d="M0.7,20.1C0.7,9.4,9.3,0.7,20,0.7s19.3,8.7,19.3,19.3"
                />
                <g class="st0">
                  <g>
                    <path
                      d="M20.3,29.4c5.4,0,9.7-4.3,9.7-9.7c0-5.3-4.4-9.7-9.7-9.7c-5.4,0-9.7,4.3-9.7,9.7c0,1.8,0.5,3.5,1.4,5
			l-1.8,5.2l5.4-1.7C17,29,18.6,29.4,20.3,29.4z M12.1,19.7c0-4.5,3.7-8.1,8.2-8.1c4.5,0,8.2,3.6,8.2,8.1c0,4.5-3.7,8.1-8.2,8.1
			c-1.7,0-3.2-0.5-4.5-1.3l-3.2,1l1-3C12.7,23.2,12.1,21.5,12.1,19.7z"
                    />
                    <path
                      d="M20.6,23.6c2.4,0.9,2.4,0.6,2.9,0.6c0.4,0,1.4-0.6,1.6-1.1c0.2-0.6,0.2-1,0.1-1.1c-0.1-0.1-0.2-0.2-0.5-0.3
			c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2
			c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5c0.1-0.1,0.2-0.3,0.4-0.4c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4
			c-0.1-0.1-0.5-1.3-0.7-1.8c-0.2-0.5-0.4-0.4-0.5-0.4s-0.3,0-0.5,0c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2
			c0,1.2,0.9,2.3,1,2.5C16.7,20.2,18.2,22.7,20.6,23.6z"
                    />
                  </g>
                </g>
              </svg>
            </center>
            <p>TELEPHONE</p>
            <p>
              {" "}
              <b>
                Aarushi
              </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <b>Raghav</b>{" "}
            </p>
            <p>+91 1234567890 +91 1234567890 </p>
          </div>

          <div class="vl"></div>
          <div class="ol"></div>

          <div class="colonnacontatti">
            <a
              class="iconacontatti"
              href="https://www.google.it/maps/place/Sushi+Design+Studio/@45.4313977,12.3192803,17z/data=!3m1!4b1!4m5!3m4!1s0x477eb1d8ae53fdaf:0x1c923f25ffddd403!8m2!3d45.431394!4d12.321469?hl=it"
            >
              <svg
                version="1.1"
                id="play"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                height="40px"
                width="40px"
                viewBox="0 0 40 40"
                enable-background="new 0 0 40 40"
                xmlSpace="preserve"
              >
                <circle
                  class="stroke-under"
                  fill="none"
                  stroke="#808080"
                  cx="20"
                  cy="20.1"
                  r="19.3"
                />
                <path
                  class="stroke-solid"
                  fill="none"
                  stroke="#dcdcdc"
                  d="M39.3,20.1c0,10.7-8.7,19.3-19.3,19.3S0.7,30.7,0.7,20.1"
                />
                <path
                  class="stroke-solid"
                  fill="none"
                  stroke="#dcdcdc"
                  d="M0.7,20.1C0.7,9.4,9.3,0.7,20,0.7s19.3,8.7,19.3,19.3"
                />
                <g class="st0">
                  <g>
                    <path
                      d="M13.1,26.7l6.9,6.8l6.9-6.8c1.9-1.8,2.9-4.2,2.9-6.8s-1-5-2.9-6.8c-1.9-1.8-4.3-2.8-6.9-2.8
			c-2.6,0-5.1,1-6.9,2.8c-1.9,1.8-2.9,4.2-2.9,6.8C10.2,22.4,11.2,24.9,13.1,26.7z M14.5,14.5c1.5-1.4,3.4-2.2,5.5-2.2
			c2.1,0,4.1,0.8,5.5,2.2c1.5,1.4,2.3,3.4,2.3,5.4s-0.8,3.9-2.3,5.4L20,30.7l-5.5-5.4c-1.5-1.4-2.3-3.4-2.3-5.4
			C12.2,17.8,13,15.9,14.5,14.5z"
                    />
                    <path
                      d="M20,24.4c1,0,2.1-0.4,2.9-1.3c1.6-1.7,1.6-4.5,0-6.2c-0.8-0.9-1.8-1.3-2.9-1.3c-1,0-2.1,0.4-2.9,1.3
			c-1.6,1.7-1.6,4.5,0,6.2C17.9,24,19,24.4,20,24.4z M18,17.8c0.5-0.6,1.3-0.9,2.1-0.9c0.8,0,1.5,0.3,2.1,0.9c1.1,1.2,1.1,3.2,0,4.4
			c-0.5,0.6-1.3,0.9-2.1,0.9c-0.8,0-1.5-0.3-2.1-0.9C16.8,21,16.8,19,18,17.8z"
                    />
                  </g>
                </g>
              </svg>
            </a>
            <p>Links</p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/keshavmahavidyalaya/"
              >
                Linkedin
              </a>
              &nbsp; &nbsp; &nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/placementcell_kmv/"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>

        <p>
          Managed By <a href="https://github.com/manav-1">Manav Arora</a>
        </p>
      </div>
    </div>
  );
}
