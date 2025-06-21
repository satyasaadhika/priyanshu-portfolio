import './About.css';
import Image from "../../assets/priyanshu.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import aryanLogo from '../../assets/aryan_computers.png'; 
import earth5rLogo from '../../assets/Earth5R.png'; 
import {
  FaLinkedin, FaGithub, FaTwitter, FaUniversity, FaSchool,
  FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaPython, FaPhp,
  FaDatabase, FaGitAlt, FaWordpress, FaFigma, FaSearch, FaCloudUploadAlt
} from 'react-icons/fa';
import {
  SiTailwindcss, SiCanva, SiNetlify, SiMongodb,
  SiVercel, SiSublimetext,
} from 'react-icons/si';

const About = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "React", icon: <FaReact /> },
    { name: "Python", icon: <FaPython /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "MySQL", icon: <FaDatabase /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "WordPress", icon: <FaWordpress /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "SEO", icon: <FaSearch /> },
    { name: "Canva", icon: <SiCanva /> },
    { name: "Netlify", icon: <SiNetlify /> },
    { name: "Sublime Text", icon: <SiSublimetext /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "GitHub Pages", icon: <FaCloudUploadAlt /> },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };
    
  const experiences = [
    {
      company: 'Aryan Computers',
      role: 'Front-End Intern',
      duration: 'Aug 2024 – Feb 2025',
      type: 'Remote',
      logo: aryanLogo,
      description: `During this incredible journey, I had the opportunity to work on the frontend development of Aryan Computers and Exam Pioneer, utilizing technologies like HTML, CSS, Bootstrap, JavaScript, jQuery, and React.js.

      This internship has been a transformative experience, helping me enhance my responsibility, sincerity, and strong willingness to learn. I took on challenges with enthusiasm, honed my coordination and communication skills, and developed an exceptional attention to detail. `
    },
    {
      company: 'EARTH5R',
      role: 'AI & ML Content Volunteer',
      duration: 'Apr 2024 – Jun 2024',
      type: 'Remote',
      logo: earth5rLogo,
      description: `As an AI & ML content volunteer at EARTH5R, I contributed educational content that explained complex AI and ML concepts in simple and engaging ways. I researched cutting-edge topics and created informative articles, boosting both my technical knowledge and writing abilities.

      This experience strengthened my time management, research accuracy, and ability to communicate technical information clearly. `
    }
  ];

  return (
    <div className='Main-about'>
      {/* ABOUT HERO SECTION */}
      <section className="about-hero">
        <div className="content">
          <div className="image-container">
            <img src={Image} alt="Your Profile" />
          </div>
          <h1> Priyanshu Maurya</h1>
          <p>Web Developer, MERN Stack, Frontend</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/satyasaadhika" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/satyasaadhika" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://twitter.com/satyasaadhika" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </section>
      {/* ABOUT ME SECTION */}
      <section className="know-who-i-am">
        <div className="container">
          <h2>Know Who I Am</h2>
          <p>
            I'm a self-motivated web developer with a knack for building clean and responsive user interfaces.
            I love turning complex problems into simple, beautiful, and intuitive designs.
          </p>
        </div>
      </section>
      {/* ABOUT EDUCTION SECTION */}
      <section className="education-section">
        <h2 className="section-title"> Education </h2>
        <div className="education-cards">
          <div className="education-card">
            <FaUniversity className="edu-icon" />
            <h3>Bachelor of Computer Application</h3>
            <p className="institute">Veer Bahadur Singh Purvanchal University</p>
            <p><strong>Branch:</strong> Information Technology (BCA)</p>
          </div>

          <div className="education-card">
            <FaSchool className="edu-icon" />
            <h3>Senior Secondary</h3>
            <p className="institute">Kisan Inter College</p>
            <p><strong>Stream:</strong> Biology</p>
            <p><strong>Score:</strong> 75%</p>
          </div>
        </div>
      </section>
      {/* ABOUT SKILLS SECTION */}
      <section className="skills-section">
        <h2 className="section-title"> My Skills</h2>
       <Slider {...settings} className="skills-slider">
          {skills.map((skill, index) => (
            <div key={index} className="slide-item">
              <div className="skill-box">
                <div className="skill-icon">{skill.icon}</div>
                <p>{skill.name}</p>
              </div>
            </div>
          ))}
        </Slider>

      </section>
      {/* ABOUT Experience SECTION */}
      <section className="experience-section">
        <h2 className="section-title">Experience</h2>
        <div className="experience-wrapper">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <div className="logo-container">
                <img src={exp.logo} alt={`${exp.company} logo`} />
              </div>
              <div className="experience-details">
                <h3>{exp.company}</h3>
                <p className="role">{exp.role}</p>
                <p className="duration">{exp.duration} • {exp.type}</p>
                <p className="description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
