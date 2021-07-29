import { useState } from "react";
import logo from "../../assets/logo.png";
export default function NavBar({ navigation }) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isDrop, setIsDrop] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const handleDropdownClick = () => setIsDrop(!isDrop);
  return (
    <nav className="navbar navbar-expand-lg bg-light py-0 navbar-light">
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
          <li className="nav-item pl-4 dropdown">
            <button
              className="nav-link dropdown-toggle"
              onClick={handleDropdownClick}
            >
              For Recruiters
            </button>
            <ul className={`${isDrop ? "show" : ""} dropdown-menu`}>
              <li className="nav-item">
                <a
                  href="https://drive.google.com/file/d/1qnBysbXSoW-vn6FzRmfa-5DFymsZmJcx/view?usp=sharing"
                  onClick={handleNavCollapse}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dropdown-item "
                >
                  Placement Brochure
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  onClick={handleNavCollapse}
                  className="dropdown-item "
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
