import React from "react";
import "./navbar.styles.css";

export default function NavbarComponent() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__links">
          <a href="#home" className="navbar__link">
            Home
          </a>
          <a href="#projects" className="navbar__link">
            Projects
          </a>
          <a href="#skills" className="navbar__link">
            Skills
          </a>
          <a href="#about" className="navbar__link">
            About
          </a>
        </div>

        <div className="navbar__cta">
          <a href="#contact" className="navbar__link navbar__contact">
            Contact Me
          </a>
          <a href="#cv" className="navbar__button">
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
