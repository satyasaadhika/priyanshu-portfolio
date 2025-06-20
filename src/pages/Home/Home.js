import React from "react";
import "./Home.css";
import Image from "../../assets/priyanshu.jpg"
import Image1 from "../../assets/image.png"
import { FaHandPaper, FaArrowRight , FaGithub, FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact, FaBootstrap, FaGitAlt,  FaDatabase, FaPhp, FaWordpress, FaFigma, FaSitemap, FaInfinity } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { TbBrandVercel } from "react-icons/tb";
import { SiNetlify, SiCanva, SiSublimetext, SiTailwindcss } from "react-icons/si";
import { Monitor, CloudUpload } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="Main">
      {/* Hero Section */}
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
      {/* Skills Section */}
      <section className="skills-section" id="skills">
          <h2 className="skills-title">My Skill Set</h2>
          <p className="skills-subtitle">Technologies and tools I use to craft professional web experiences:</p>

          <div className="skills-grid">

            <div className="skill-card"><FaHtml5 size={28} style={{ color: '#e44d26' }} /><span className="skill-name">HTML</span></div>
            <div className="skill-card"><FaCss3Alt size={28} style={{ color: '#264de4' }} /><span className="skill-name">CSS</span></div>
            <div className="skill-card"><FaJs size={28} style={{ color: '#f0db4f' }} /><span className="skill-name">JavaScript</span></div>
            <div className="skill-card"><FaReact size={28} style={{ color: '#61DBFB' }} /><span className="skill-name">React</span></div>
            <div className="skill-card"><FaBootstrap size={28} style={{ color: '#7952b3' }} /><span className="skill-name">Bootstrap</span></div>
            <div className="skill-card"><SiTailwindcss size={28} style={{ color: '#38bdf8' }} /><span className="skill-name">Tailwind CSS</span></div>
            <div className="skill-card"><FaPhp size={28} style={{ color: '#8892BF' }} /><span className="skill-name">PHP</span></div>
            <div className="skill-card"><FaWordpress size={28} style={{ color: '#21759b' }} /><span className="skill-name">WordPress</span></div>
            <div className="skill-card"><FaSitemap size={28} style={{ color: '#34a853' }} /><span className="skill-name">SEO</span></div>
            <div className="skill-card"><FaDatabase size={28} style={{ color: '#00758f' }} /><span className="skill-name">MySQL</span></div>
            <div className="skill-card"><FaDatabase size={28} style={{ color: '#47A248' }} /><span className="skill-name">MongoDB</span></div>
            <div className="skill-card"><FaGitAlt size={28} style={{ color: '#f1502f' }} /><span className="skill-name">Git</span></div>
            <div className="skill-card"><FaPython size={28} style={{ color: '#3776AB' }} /><span className="skill-name">Python</span></div>
            <div className="skill-card"><FaGithub size={28} style={{ color: '#333' }} /><span className="skill-name">GitHub</span></div>
            <div className="skill-card"><Monitor size={28} style={{ color: '#007acc' }} /><span className="skill-name">VS Code</span></div>
            <div className="skill-card"><SiSublimetext size={28} style={{ color: '#f48024' }} /><span className="skill-name">Sublime Text</span></div>
            <div className="skill-card"><SiCanva size={28} style={{ color: '#00c4cc' }} /><span className="skill-name">Canva</span></div>
            <div className="skill-card"><FaFigma size={28} style={{ color: '#a259ff' }} /><span className="skill-name">Figma</span></div>
            <div className="skill-card"><TbBrandVercel size={28} style={{ color: '#000000' }} /><span className="skill-name">Vercel</span></div>
            <div className="skill-card"><SiNetlify size={28} style={{ color: '#38b2ac' }} /><span className="skill-name">Netlify</span></div>
            <div className="skill-card"><CloudUpload size={28} style={{ color: '#24292e' }} /><span className="skill-name">GitHub Pages</span></div>
            <div className="skill-card"><FaInfinity  size={28} style={{ color: '#ff69b4' }} /><span className="skill-name">InfinityFree</span></div>
          </div>
      </section>
    
    </div>
  );
};

export default HeroSection;
