import { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function NavBar({ navigation }) {
  const history = useHistory();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isDrop, setIsDrop] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const handleDropdownClick = () => setIsDrop(!isDrop);
  return (
    <nav className="navbar navbar-expand-lg bg-light py-0 navbar-light">
      <button
        className="navbar-brand"
        // onClick={() => navigation.navigate("Landing")}
        onClick={() => history.push('/landing')}
      >
        <img src={logo} alt="Logo" className="header__logo" />
      </button>
      <button
        className="navbar-toggler"
        style={{ marginRight: "0.5rem" }}
        type="button"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
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
            <a
              href="#TeamFaculty"
              onClick={handleNavCollapse}
              className="nav-link"
            >
              Faculty
            </a>
          </li>

          <li className="nav-item pl-4">
            <a
              href="#TeamFaculty"
              onClick={handleNavCollapse}
              className="nav-link"
            >
              Team
            </a>
          </li>
          <li className="nav-item pl-4">
            <a
              className="nav-link"
              href="/dashboard"
              onClick={() => {
                handleDropdownClick();
                handleNavCollapse();
              }}
            >
              Placement Portal
            </a>
          </li>
          <li className="nav-item pl-4 dropdown">
            <button
              className="nav-link dropdown-toggle"
              onClick={handleDropdownClick}
            >
              For Recruiters
            </button>
            <ul className={`${isDrop ? "show" : ""} dropdown-menu mb-3`}>
              <li className="nav-item">
                <a
                  href="https://drive.google.com/file/d/1qnBysbXSoW-vn6FzRmfa-5DFymsZmJcx/view?usp=sharing"
                  onClick={() => {
                    handleDropdownClick();
                    handleNavCollapse();
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dropdown-item "
                >
                  Placement Brochure
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/procedure"
                  className="dropdown-item"
                  onClick={() => {
                    handleDropdownClick();
                    handleNavCollapse();
                  }}
                >
                  Placement Procedure
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  className="dropdown-item"
                  onClick={() => {
                    handleDropdownClick();
                    handleNavCollapse();
                  }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
