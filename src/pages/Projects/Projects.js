import React from "react";
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from "react-icons/fa";
import "./Projects.css";
import kingsukh from '../../assets/kingsukh-guest-house.png';
import capturer from '../../assets/capturer.png';
import easybank from '../../assets/easy-bank-website.png';
import indrajaal from '../../assets/indrajaal.png';
import studyabroad from '../../assets/studyabroad.png';
import wowfood from '../../assets/wowfood.png';
import tax from '../../assets/tax-calculator.png';
import clean from '../../assets/clean-portfolio.png';
import solarsystem from '../../assets/solarsystem.png';

const projects = [
  {
    title: "Kingsukh Guest House",
    description:
      "This is a clean, modern, and responsive website created to represent the Kingsukh Guest House online. It features a user-friendly layout that allows visitors to explore room options, amenities, and important contact information with ease. ",
    techStack: "React.js, JSX, CSS, Responsive Design, React Router, Component-Based Architecture, Modern UI Design",
    github: "https://github.com/satyasaadhika/kingsukh-guest-house.git",
    demo: "https://kingsukh-guest-house-iota.vercel.app/",
    image: kingsukh,
  },
  {
    title: "Capturer Photo Gallary",
    description:
      "This project is a fully responsive and visually engaging portfolio website designed specifically for photographers.",
    techStack: "HTML, CSS, JavaScript, Bootstrap 5.2.0, Responsive Design, UI/UX Principles",
    github: "https://github.com/satyasaadhika/capturer.git",
    demo: "https://capturer-moments.vercel.app/",
    image: capturer,
  },
  {
    title: "Easy Bank",
    description:
      "This project is a user interface (UI) design for a banking website called Easy Bank. The focus is on creating a clean, modern, and easy-to-use layout that makes banking services simple to understand and access. ",
    techStack: "HTML, CSS, Responsive Design, UI/UX Principles",
    github: "https://github.com/satyasaadhika/easy-bank.git",
    demo: "https://satyasaadhika.github.io/easy-bank/",
    image: easybank,
  },
  {
      title: "Simple Portfolio",
      description:
        "This is a simple and responsive portfolio website designed to showcase personal projects, skills, and contact information. It provides a clear layout where visitors can easily learn more about the creator’s work and background. ",
      techStack: "HTML, CSS, Responsive Design, UI/UX Principles, Bootstrap",
      github: "https://github.com/satyasaadhika/satyasaadhika.github.io.git",
      demo: "https://satyasaadhika.github.io/",
      image: clean,
  },
  {
      title: "Study MBBS Abroad",
      description:
        "This project is a responsive landing page designed for the Study MBBS Abroad campaign.  The landing page provides information about studying MBBS abroad, including country listings, program details, and an admission process section. Additionally, it includes a lead generation form to collect user information.",
      techStack: "HTML5, Tailwind CSS / Bootstrap,JavaScript, SEO, Google Analytics",
      github: "https://github.com/satyasaadhika/study-mbbs-abroad.git",
      demo: "https://study-mbbs-abroad-kappa.vercel.app/",
      image: studyabroad,
  },
  {
      title: " Indrajaal Tech Project",
      description:
        "This is a modern and responsive landing page created for a web services agency. It highlights the agency’s core offerings such as website development, design, SEO, and digital solutions. The layout is clean and engaging, designed to attract potential clients with clear call-to-action buttons, service sections, and a professional visual style. ",
      techStack: "HTML5, CSS, Bootstrap,JavaScript, SEO, Google Analytics, Responsive Design, UI/UX Principles,",
      github: "https://github.com/satyasaadhika/indrajaal.git",
      demo: "https://satyasaadhika.github.io/indrajaal/",
      image: indrajaal,
  },
    {
        title: " Wow Food Restaurant UI Design",
        description:
          "This is a visually appealing and responsive UI design for a restaurant website called Wow Food. It features a modern layout with sections for menu items, special offers. The design focuses on a smooth user experience, easy navigation, and an attractive presentation of food items to engage visitors and showcase the restaurant’s brand.",
        techStack: "HTML5, CSS, Bootstrap, JavaScript, Responsive Design, UI/UX Principles,",
        github: "https://github.com/satyasaadhika/wow-food.git",
        demo: "https://satyasaadhika.github.io/wow-food/",
        image: wowfood,
    },
    {
        title: "Tax Calculator",
        description:
          "This is a user-friendly and responsive tax calculator designed to help users estimate their tax amounts based on input values like income and deductions. The interface is simple and clean, allowing users to enter their details and instantly view calculated results.",
        techStack: "HTML5, CSS, Bootstrap, JavaScript, Responsive Design, UI/UX Principles",
        github: "https://github.com/CodeSaadhika/tax-calculator.git",
        demo: "https://codesaadhika.github.io/tax-calculator/",
        image: tax,
    },
    {
        title: "3D Solar System",
        description:
          "A fully interactive and responsive 3D solar system simulation built using Three.js and JavaScript. This project visually represents our solar system with animated planet orbits, starry background, and adjustable orbital speeds.",
        techStack: "HTML, CSS, Three.js, JavaScript, WebGL, Responsive Design, UI/UX Principles ",
        github: "https://github.com/satyasaadhika/3D-Solar-System.git",
        demo: "https://satyasaadhika.github.io/3D-Solar-System/",
        image: solarsystem,
    },
];

const ProjectSection = () => {
  return (
    <section className="project-section">
      <h2><span>< FaFolderOpen/> Recent</span> Works</h2>
      <p className="project-intro">Here are a few projects I’ve worked on recently.</p>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="tech-stack">{project.techStack}</span>
            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
