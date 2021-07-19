import "../css/landing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.png";

export default function Landing({ navigation }) {
  return (
    <div>
      <div>
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
        <header className="header mt-5">
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
      <div className="landing-about">
        <h1>About Us</h1>
        <div className="about col-sm-6">
          <h3 className="heading-tert margin-bottom-small">Our Aim</h3>
          <p className="paragraph">
            Providing opportunities and a platform for students to implement and
            explore their skills is the main focus of the Placement Cell.
          </p>

          <h3 className="heading-tert margin-bottom-small">
            Virtual Internship Fair 2020
          </h3>
          <p className="paragraph">
            Considering the ongoing pandemic and not diverting even an inch from
            our aim to provide appropriate and decorous opportunities, the
            Virtual Internship Fair was organised. It was an initiative to bring
            forth internships to enable students gain hands on experience with a
            commix of skill development, leadership roles and resume
            enhancements.
          </p>
        </div>
        <div className="col-sm-6">
          
        </div>
      </div>
    </div>
  );
}
