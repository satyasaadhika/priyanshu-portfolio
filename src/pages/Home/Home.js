import React from "react";
import "./Home.css";
import Image from "../../assets/priyanshu.jpg"
import Image1 from "../../assets/priyanshu1.jpg"
import { FaHandPaper } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <div className="Main">
      <div className="hero">
        <div className="hero-left">
          <h1>
            Hi There! <FaHandPaper className="wave-icon" />
          </h1>
          <h2>
            I'M <span className="highlight">Priyanshu Maurya</span>
          </h2>
          <h3>
            <span className="role">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Frontend Developer",
                  "UI/UX Designer",
                  "Web Developer",
                  "WordPress Developer",
                  "Freelancer Designer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h3>
          <p className="intro-text">
            I’m passionate about creating seamless web experiences. I specialize
            in building responsive and scalable websites using modern
            technologies. 
          </p>
        </div>

        <div className="hero-right">
          <img
            src={Image}
            alt="Developer illustration"
          />
          <div className="floating-blocks">
            <div className="block pink"></div>
            <div className="block green"></div>
            <div className="block purple"></div>
            <div className="block blue"></div>
          </div>
        </div>
      </div>
      {/*  About Section */}
      <div className="about-section">
        <div className="about-left">
          <img src={Image1} alt="About me" />
           <div className="floating-blocks">
            <div className="block pink"></div>
            <div className="block green"></div>
            <div className="block purple"></div>
            <div className="block blue"></div>
          </div>
        </div>

        <div className="about-right">
          <h2>About Me</h2>
          <p>
            Hello! I’m a passionate web developer focused on building responsive, user-friendly interfaces with modern tech. Proficient in interactive responsive web design with dynamic frontend, JSON APIs, Bootstrap and Tailwind, backend development using Python/Django, Node/Express, and PHP with MySQL and MongoDB database integrations
            Working knowledge of Figma, and UI/UX design and design principles. Working knowledge of React.js, React Router for Single Page Applications, React Hooks, Context API.
          </p>
          <a href="https://priyanshu-portfolio-three.vercel.app/About" className="explore-btn">
            Explore Me <FaArrowRight className="btn-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
