import React from "react";
import "./Footer.css";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaGlobe
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inline">
        <span className="footer-name"> Developed by Priyanshu Maurya</span>

        <span className="footer-copy">
          &copy; {new Date().getFullYear()} Priyanshu Maurya
        </span>

        <div className="footer-icons">
          <a href="https://github.com/satyasaadhika" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/satyasaadhika/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:satyasaadhika.aham@gmail.com"><FaEnvelope /></a>
          <a href="https://satyasaadhika.github.io/" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
