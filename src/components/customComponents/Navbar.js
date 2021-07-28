import { useState } from "react";
import logo from "../../assets/logo.png";
export default function NavBar({ navigation }) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
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
            <a href="#Faculty" onClick={handleNavCollapse} className="nav-link">
              Faculty
            </a>
          </li>

          <li className="nav-item pl-4">
            <a href="#Team" onClick={handleNavCollapse} className="nav-link">
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
          <li className="nav-item pl-4">
            <a
              href="https://drive.google.com/file/d/1qnBysbXSoW-vn6FzRmfa-5DFymsZmJcx/view?usp=sharing"
              onClick={handleNavCollapse}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Placement Brochure
            </a>
          </li>
          <li className="nav-item pl-4">
            <a href="#contact" onClick={handleNavCollapse} className="nav-link">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
