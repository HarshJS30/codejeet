import React from "react";
import "../assets/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-links">
          <li className="navbar-item">
            <a href="#home" className="main">
              CodeJeet
            </a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">
              Currency Converter
            </a>
          </li>
          <li className="navbar-item">
            <a href="#services" className="navbar-link">
              Currency Quiz
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">
              Connect With Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
