import React from "react";
import {
  FaDownload,
  FaCheckCircle,
  FaBriefcase,
  FaCertificate,
  FaProjectDiagram,
  FaGraduationCap,
  FaUser,
  FaCode,
  FaLanguage,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact, FaBootstrap,
  FaGitAlt,  FaDatabase, FaPhp, FaWordpress, FaFigma, FaSitemap, FaInfinity
} from "react-icons/fa";
import { TbBrandVercel } from "react-icons/tb";
import { SiNetlify, SiCanva, SiSublimetext, SiTailwindcss } from "react-icons/si";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-title"> Priyanshu Maurya – Resume</h1>

      <a
        href="/Priyanshu_Resume.pdf"
        download="Priyanshu_Resume.pdf"
        className="download-btn"
      >
        <FaDownload /> Download Resume
      </a>

      {/* Summary */}
      <section className="resume-section">
        <h2><FaUser className="icon" /> Objective</h2>
        <p>
          Highly motivated computer science student eager to gain hands-on experience in web development through an internship. Looking to contribute to a collaborative team environment while expanding knowledge of industry trends.
        </p>
      </section>

      {/* Experience */}
      <section className="resume-section">
        <h2><FaBriefcase className="icon" /> Experience</h2>
        <ul>
          <li><strong>Aryan Computers (Remote)</strong> – Front-End Intern<br /><em>Aug 2024 – Feb 2025</em></li>
          <li><strong>EARTH5R (Remote)</strong> – AI & ML Content Volunteer<br /><em>Apr 2024 – Jun 2024</em></li>
        </ul>
      </section>

      {/* Skills */}
    <section className="resume-section">
        <h2><FaCode className="icon" /> Skills</h2>
        <div className="skills-grid">
          <div><FaHtml5 style={{ color: "#e34c26" }} /> HTML</div>
          <div><FaCss3Alt style={{ color: "#2965f1" }} /> CSS</div>
          <div><FaJs style={{ color: "#f7df1e" }} /> JavaScript</div>
          <div><FaBootstrap style={{ color: "#563d7c" }} /> Bootstrap</div>
          <div><FaReact style={{ color: "#61DBFB" }} /> React</div>
          <div><FaPython style={{ color: "#3776AB" }} /> Python</div>
          <div><FaPhp style={{ color: "#777bb4" }} /> PHP</div>
          <div><FaDatabase style={{ color: "#00618a" }} /> MySQL</div>
          <div><FaDatabase style={{ color: "#00618a" }} /> MongoDB</div>
          <div><FaGitAlt style={{ color: "#f1502f" }} /> Git</div>
          <div><FaGithub style={{ color: "#333" }} /> GitHub</div>
          <div><FaWordpress style={{ color: "#00749C" }} /> WordPress</div>
          <div><FaFigma style={{ color: "#F24E1E" }} /> Figma</div>
          <div><SiTailwindcss style={{ color: "#38bdf8" }} /> Tailwind CSS</div>
          <div><FaSitemap style={{ color: "#34a853" }} /> SEO</div>
          <div><SiCanva style={{ color: "#00c4cc" }} /> Canva</div>
          <div><SiNetlify style={{ color: "#38b2ac" }} /> Netlify</div>
          <div><FaInfinity style={{ color: "#ff69b4" }} /> InfinityFree</div>
          <div><SiSublimetext style={{ color: "#f48024" }} /> Sublime Text</div>
          <div><TbBrandVercel style={{ color: "#000000" }} /> Vercel</div>
          <div><FaGithub style={{ color: "#000000" }} /> Github Pages</div>
        </div>
    </section>

      {/* Certifications */}
    <section className="resume-section">
        <h2><FaCertificate className="icon" /> Certifications</h2>
        <ul className="Certifications">
          <li><a href="https://www.coursera.org/account/accomplishments/verify/A8QQGJVWV3WG" target="_blank" rel="noreferrer" >Version Control (Meta)</a></li>
          <li><a href="https://www.freecodecamp.org/certification/satyasaadhika/responsive-web-design" target="_blank" rel="noreferrer" >Responsive Web Design (freeCodeCamp)</a></li>
          <li><a href="https://www.freecodecamp.org/certification/satyasaadhika/back-end-development-and-apis" target="_blank" rel="noreferrer" >Back End Development and APIs (freeCodeCamp)</a></li>
          <li><a href="https://www.coursera.org/account/accomplishments/verify/S7RX68RPJU8J" target="_blank" rel="noreferrer" >Programming With Python (Meta)</a></li>
          <li><a href="https://www.coursera.org/account/accomplishments/verify/ATXCCAQVFE6D" target="_blank" rel="noreferrer" >Back-end Developer (Meta)</a></li>
          <li><a href="https://www.coursera.org/account/accomplishments/verify/6ERRYC348QWR" target="_blank" rel="noreferrer" >Django Web Framework (Meta)</a></li>
          <li><a href="https://www.coursera.org/account/accomplishments/verify/8BQQ59XJ5FDG" target="_blank" rel="noreferrer" >Introduction to Databases for Back-end (Meta)</a></li>
          <li><a href="https://www.coursera.org/account/accomplishments/verify/ATXCCAQVFE6D" target="_blank" rel="noreferrer" >The Full Stack (Meta)</a></li>
          <li><a href="https://www.coursera.org/account/accomplishments/verify/LSKPSP7NSG96" target="_blank" rel="noreferrer" >APIs (Meta)</a></li>
          <li><a href="https://www.coursera.org/account/accomplishments/verify/ATXCCAQVFE6D" target="_blank" rel="noreferrer" >Building Database Apps in PHP (Meta)</a></li>
        </ul>
      </section>

      {/* Education */}
      <section className="resume-section">
        <h2><FaGraduationCap className="icon" /> Education</h2>
        <p>
          <strong>Veer Bahadur Singh Purvanchal University</strong> (BCA – Computer Science, Aug 2026)<br />
          Coursework: Operating System, DBMS, Algorithms, Software Engineering, Programming, Systems Design, Web Pages, etc.
        </p>
      </section>

      {/* Projects */}
      <section className="resume-section">
        <h2><FaProjectDiagram className="icon" /> Projects</h2>
        <ul>
          <li><a href="https://capturer-moments.vercel.app/"><strong>Capturer – Photography Portfolio</strong></a><br />HTML, CSS, JS, Bootstrap; Carousel, Gallery, Slider, Deployed via Vercel</li>
          
          <li><a href="https://satyasaadhika.github.io/"><strong>Personal Portfolio</strong></a><br />HTML, CSS, JS, Bootstrap; Clean & responsive UI, Hosted on GitHub Pages</li>

           <li><a href="https://kingsukh-guest-house-iota.vercel.app/"><strong>Kingsukh Guest House </strong></a><br />HTML, CSS, JS, React; Clean & responsive UI, Deployed via vercel</li>
        </ul>
      </section>

      {/* Language */}
      <section className="resume-section">
        <h2><FaLanguage className="icon" /> Languages</h2>
        <p>Hindi, English, Awadhi</p>
      </section>

      {/* Learning */}
      <section className="resume-section">
        <h2><FaCheckCircle className="icon" /> Learning</h2>
        <p>
          Continuously upgrading skills in web development, modern tools, and industry best practices. Passionate about staying updated with latest technologies and trends.
        </p>
      </section>

      {/* Contact */}
      <section className="resume-section">
        <h2><FaPhoneAlt className="icon" /> Contact</h2>
        <p><FaMapMarkerAlt /> Ambedkar Nagar, UP, India – 224159</p>
        <p><FaEnvelope /> <a href="mailto:satyasaadhika.aham@gmail.com">satyasaadhika.aham@gmail.com</a></p>
        <p><FaLinkedin /> <a href="https://www.linkedin.com/in/satyasaadhika/">LinkedIn</a></p>
        <p><FaGithub /> <a href="https://github.com/satyasaadhika">GitHub</a></p>
      </section>
    </div>
  );
};

export default Resume;
