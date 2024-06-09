import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./assets/images/pngegg.png" alt="Logo" />
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

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
