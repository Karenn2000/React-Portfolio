import React from "react";
import "./Mobilenav.css";
import { Link } from "react-scroll";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="./assets/images/pngegg.png" alt="" />
          <ul>
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={200}
                className="menu"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={200}
                className="menu"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={200}
                className="menu"
              >
                Contact Me
              </Link>
            </li>
            <button className="btn-contact" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
