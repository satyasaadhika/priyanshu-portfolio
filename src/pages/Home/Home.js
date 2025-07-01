import React from "react";
import "./Home.css";
import Image from "../../assets/priyanshu.jpg"
import Image1 from "../../assets/image.png"
import { FaHandPaper, FaArrowRight , FaGithub, FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact, FaBootstrap, FaGitAlt,  FaDatabase, FaPhp, FaWordpress, FaFigma, FaSitemap, FaInfinity,FaBuilding, FaCertificate, FaLaptopCode } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { TbBrandVercel } from "react-icons/tb";
import { SiNetlify, SiCanva, SiSublimetext, SiTailwindcss } from "react-icons/si";
import { Monitor} from 'lucide-react';
import aryanLogo from '../../assets/aryan_computers.png'; 
import earth5rLogo from '../../assets/Earth5R.png'; 
import frontend from "../../assets/Certificate/Frontend-D.jpg";
import backend from "../../assets/Certificate/Backend-D.jpg";
import fullstack from "../../assets/Certificate/FS.jpg";

const HeroSection = () => {
const experiences = [
  {
    company: "Aryan Computers",
    role: "Front-End Intern",
    date: "Aug 2024 – Feb 2025 • Remote",
    logo: aryanLogo, // Replace with your logo path
    description:
      "During this incredible journey, I had the opportunity to work on the frontend development of Aryan Computers and Exam Pioneer, utilizing technologies like HTML, CSS, Bootstrap, JavaScript, jQuery, and React.js. This internship has been a transformative experience, helping me enhance my responsibility, sincerity, and strong willingness to learn. I took on challenges with enthusiasm, honed my coordination and communication skills, and developed an exceptional attention to detail.",
  },
  {
    company: "EARTH5R",
    role: "AI & ML Content Volunteer",
    date: "Apr 2024 – Jun 2024 • Remote",
    logo: earth5rLogo, // Replace with your logo path
    description:
      "As an AI & ML content volunteer at EARTH5R, I contributed educational content that explained complex AI and ML concepts in simple and engaging ways. I researched cutting-edge topics and created informative articles, boosting both my technical knowledge and writing abilities. This experience strengthened my time management, research accuracy, and ability to communicate technical information clearly.",
  },
];
const certificateData = [
  {
    title: "Meta Front-End Developer",
    issued: "Issued by Meta · Coursera · Sep 2024",
    image: frontend,
    skills: "HTML, CSS, JavaScript, React, UX/UI Design",
  },
  {
    title: "Meta Back-End Developer",
    issued: "Issued by Meta · Coursera · Jul 2024",
    image: backend,
    skills: "Python, Django, Databases, APIs, Version Control",
  },
  {
    title: "Meta Full Stack Developer",
    issued: "Issued by Meta · Coursera · Jun 2024",
    image: fullstack,
    skills: "Front-End + Back-End combined, Full Stack Development",
  },
];

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
            <span className="roletype">
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
          <a href="/About" className="explore-btn">
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
            <div className="skill-card"><FaInfinity  size={28} style={{ color: '#ff69b4' }} /><span className="skill-name">InfinityFree</span></div>
          </div>
      </section>
      {/* Experience Section */}
      <section className="experience-section">
        <h2 className="experience-title hover-underline">Experience</h2>
        <p className="experience-subtitle">A glimpse into my professional journey — where I transformed skills into impact through real-world projects and collaborations.</p>
        <div className="experience-container">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <div className="logo-box">
                <img src={exp.logo} alt={`${exp.company} logo`} />
              </div>
              <div className="experience-content">
                <h3>
                  <FaBuilding className="icon" /> {exp.company}
                </h3>
                <p className="role">
                  <FaLaptopCode className="icon" /> {exp.role}
                </p>
                <p className="date">{exp.date}</p>
                <p className="description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* certificate Section */}
      <section className="certificates-section">
        <h2 className="cert-title hover-underline"><FaCertificate /> Certificates</h2>
        <div className="cert-grid">
          {certificateData.map((cert, index) => (
            <div className="cert-card hover-underline" key={index}>
              <img src={cert.image} alt={cert.title} className="cert-img" />
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p className="issued">{cert.issued}</p>
                <p className="skills"><strong>Skills:</strong> {cert.skills}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="cert-btn-box">
          <a href="/Certificates" className="view-all-btn">
            View All Certificates <FaArrowRight />
          </a>
        </div>
      </section>
      {/* Project Section */}
      
    </div>
  );
};

export default HeroSection;
