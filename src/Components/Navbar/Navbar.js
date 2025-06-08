import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import logo from '../../assets/logo.jpg'; 
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}> Mylogo
        </NavLink>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/About" className="nav-links" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Certificates" className="nav-links" onClick={closeMenu}>
              Certificates
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Projects" className="nav-links" onClick={closeMenu}>
              Projects
            </NavLink>
          </li>
           <li className="nav-item">
            <NavLink to="https://www.linkedin.com/in/satyasaadhika/recent-activity/all/" className="nav-links" onClick={closeMenu}>
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Resume" className="nav-links" onClick={closeMenu}>
              Resume
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Contact" className="nav-links" onClick={closeMenu}>
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Background overlay when menu is open */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;
