import "../css/landing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.png";
import team from "../../assets/team.png";
import $ from "jquery"; // eslint-disable-line
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Landing({ navigation }) {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%" }}>
        <nav className="navbar bg-light py-0 navbar-light fixed-top">
          <button
            className="navbar-brand"
            onClick={() => navigation.navigate("Landing")}
          >
            <img src={logo} alt="Logo" className="header__logo" />
          </button>

          <ul className="bsnav navbar-nav d-flex flex-row">
            <li className="nav-item pl-4">
              <button className="nav-link">About</button>
            </li>
            <li className="nav-item pl-4">
              <button
                className="nav-link"
                onClick={() => navigation.navigate("Dashboard")}
              >
                Placement Portal
              </button>
            </li>
            <li className="nav-item pl-4">
              <button className="nav-link">Contact Us</button>
            </li>
          </ul>
        </nav>
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
      <div style={{ width: "100%" }} className="landing-about row">
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
      <div style={{ width: "100%" }} className="landing-about row">
        <h1 className="col-sm-12">Faculty</h1>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
          style={{ width: "90%", margin: "auto" }}
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={team} alt="First slide" />
              <div class="carousel-caption d-none d-md-block bg-dark">
                <h5>Convener</h5>
                <p>Mr Subodh Pandit</p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={team} alt="Second slide" />
              <div class="carousel-caption d-none d-md-block bg-dark">
                <h5>Convener</h5>
                <p>Mr Subodh Pandit</p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={team} alt="Third slide" />
              <div class="carousel-caption d-none d-md-block bg-dark">
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
      </div>
    </div>
  );
}
