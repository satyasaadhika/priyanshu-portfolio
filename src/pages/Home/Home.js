import React from "react";
import "./Home.css";
import Image from "../../assets/priyanshu.jpg"
import { FaHandPaper } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
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
                "Freelancer",
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
  );
};

export default HeroSection;
