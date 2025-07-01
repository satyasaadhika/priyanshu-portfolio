import frontend from "../../assets/Certificate/Frontend-D.jpg";
import backend from "../../assets/Certificate/Backend-D.jpg";
import fullstack from "../../assets/Certificate/FS.jpg";
import BDphp from  "../../assets/Certificate/Building_databasephp.jpg";
import AdvancedReact from  "../../assets/Certificate/Advance-React.jpg";
import WebAPHP from  "../../assets/Certificate/WebAPHP.jpg";
import API from  "../../assets/Certificate/apis.jpg";
import bdapis2 from  "../../assets/Certificate/bd-apis2.png";
import BD from  "../../assets/Certificate/BD.jpg";
import Capstone from  "../../assets/Certificate/capstone.jpg";
import DBD from  "../../assets/Certificate/DBD.jpg";
import FCapstone from  "../../assets/Certificate/Frontend-C.jpg";
import HTMLCSS from  "../../assets/Certificate/HTML-CSS.jpg";
import Interview from  "../../assets/Certificate/interview.jpg";
import  PJs from  "../../assets/Certificate/PJs.jpg";
import py from  "../../assets/Certificate/py.jpg";
import reactbasic from  "../../assets/Certificate/reactbasic.jpg";
import RWD from  "../../assets/Certificate/Rwdesign.png";
import UIUX from  "../../assets/Certificate/uiux.jpg";
import VC from  "../../assets/Certificate/VC.jpg";
import Django from  "../../assets/Certificate/django.jpg";
import Database from "../../assets/Certificate/database.jpg";
import FrontendD from "../../assets/Certificate/FD.jpg";

const certificateData = [
  {
    name: "Front-End Development",
    issuer: "Meta",
    grade: "91.95%",
    skills: "Front-End Development, JavaScript, Version Control, HTML and CSS , Advanced React, UX/UI Design, Front-End Developer Capstone,Coding Interview Preparation",
    image: frontend,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/B6FPUT286951"
  },
  {
    name: "Back-End Development",
    issuer: "Meta",
    grade: "89.03%",
    skills: "Back-End Development, Python, Databases for Back-End Development, Django Web Framework, APIs, Back-End Developer Capstone",
    image: backend,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/WT2ZEZ6UU9AG"
  },
  {
    name: "The Full Stack",
    issuer: "Meta",
    grade: "91.50%",
    skills: "Full Stack, Deployment, Architecture, Python, Web Applications,Virtual Environment, MySQL, APIs,",
    image: fullstack,
    link: "https://www.coursera.org/account/accomplishments/certificate/ATXCCAQVFE6D"
  },
  {
    name:"Introduction to Frontend Development",
    title: "Front-End Developer Capstone",
    issuer: "Meta",
    grade: "92%",
    image: FrontendD,
    skills: "Web Development Tools, React.js, User Interface (UI), Bootstrap, Front-End Web Development, Web Applications, JavaScript Frameworks",
    link: "https://www.coursera.org/account/accomplishments/certificate/9G2EK6LFCSMH"
  },
  {
    name: "Programming with JavaScript",
    issuer: "Meta",
    grade: "94.53%",
    skills: "Computer Programming, Unit Testing, Programming Principles, JavaScript Testing Framework, Web Applications, Functional Design",
    image: PJs,
    link: "https://www.coursera.org/account/accomplishments/certificate/HJFDCG73WTC5"
  },
  {
    name: "HTML and CSS in Depth",
    issuer: "Meta",
    grade: "89.46%",
    skills: "Data Validation, Semantic Web, User Interface (UI), Animations, Debugging, Front-End Web Development, Bootstrap (Front-End Framework), Responsive Web Design",
    image: HTMLCSS,
    link: "https://www.coursera.org/account/accomplishments/certificate/8JYHBMJ57JUM"
  },
  {
    name: "React Basics",
    issuer: "Meta",
    grade: "93.21%",
    skills: "Event-Driven Programming, React.js, Mobile Development, UI Components, Front-End Web Development, Web Applications, HTML and CSS, Javascript",
    image: reactbasic,
    link: "https://www.coursera.org/account/accomplishments/certificate/E1N9INVMNCK7"
  },
  {
    name: "Advanced React",
    issuer: "Meta",
    grade: "88.53%",
    skills: "Web Development Tools, React.js, Integration Testing, API Design, Unit Testing, JSON, Jest (JavaScript Testing Framework), UI Components",
    image: AdvancedReact,
    link: "https://www.coursera.org/account/accomplishments/certificate/GFG4YQK0O35W"
  },
  {
    name: "Principles of UX/UI Design",
    issuer: "Meta",
    grade: "87%",
    skills: "Prototyping, Figma (Design Software), User Interface (UI), User Interface and User Experience (UI/UX) Design, Wireframing, User Experience,Web Design, UI/UX Research, Design Elements And Principles",
    image: UIUX,
    link: "https://www.coursera.org/account/accomplishments/certificate/WY5N3A57LNX3"
  },
  {
    name:"Frontend Developer Capstone",
    title: "Front-End Developer Capstone",
    issuer: "Meta",
    grade: "92%",
    image: FCapstone,
    skills:"Data Validation, Semantic Web, Git (Version Control System), User Interface and User Experience (UI/UX) Design, Web Applications, JavaScript, Web Content Accessibility Guidelines",
    link:"https://www.coursera.org/account/accomplishments/certificate/WN4LIQNE4FUS"
  },
  {
    name: "Version Control",
    issuer: "Meta",
    grade: "94.37%",
    skills: "Git, Command-Line Interface, Github, Software Development, Unix Commands, Version Control, Linux, Git (Version Control System), File Management, Web Development, Software Versioning",
    image: VC,
    link: "https://www.coursera.org/account/accomplishments/certificate/A8QQGJVWV3WG"
  },
  {
    name: "Introduction to Back-End Development",
    issuer: "Meta",
    grade: "91.95%",
    skills: "Web Servers, User Interface (UI), Hypertext Markup Language (HTML), General Networking, Bootstrap, Full-Stack Web Development, React.js, Back-End Web Development, CSS, Front-End Web Development",
    image: BD,
    link: "https://www.coursera.org/account/accomplishments/certificate/BBDZF4NM3CQZ"
  },
  {
    name: "Programming in Python",
    issuer: "Meta",
    grade: "97.54%",
    skills: "Development Environment, Django (Web Framework), Software Testing, Computer Programming, Object Oriented Programming (OOP), Unit Testing, Debugging, Programming Principles",
    image: py,
    link: "https://www.coursera.org/account/accomplishments/certificate/S7RX68RPJU8J"
  },
  {
    name: "Django Web Framework",
    issuer: "Meta",
    grade: "87%",
    skills: "Development Environment, Django (Web Framework), Software Testing, Computer Programming, OOP, Unit Testing, Integrated Development Environments, Debugging, Programming Principles",
    image: Django,
    link: "https://www.coursera.org/account/accomplishments/certificate/6ERRYC348QWR"
  },
  {
    name: "APIs",
    issuer: "Meta",
    grade: "89.70%",
    skills: "API, JSON, Integration, Django (Web Framework), Extensible Markup Language (XML), API Design, Performance Tuning, Data Validation, Authorization (Computing), Restful API",
    image: API,
    link: "https://www.coursera.org/account/accomplishments/certificate/LSKPSP7NSG96"
  },
  {
    name: "Back-End Developer Capstone",
    issuer: "Meta",
    grade: "89.03%",
    skills: "Databases, Software Testing, Server Side, Unit Testing, Git (Version Control System), Web Applications, Full-Stack Web Development, Application Development, Django (Web Framework), User Accounts",
    image: Capstone,
    link: "https://www.coursera.org/account/accomplishments/certificate/UY3LDZTG27EA"
  },
  {
    name: "Building Web Applications in PHP",
    issuer: "University of Michigan",
    grade: "93.28%",
    skills: "Development Environment, Web Servers, Back-End Web Development, Data Validation, Secure Coding, Cascading Style Sheets (CSS), PHP (Scripting Language), Hypertext Markup Language (HTML), Debugging",
    image: WebAPHP,
    link: "https://www.coursera.org/account/accomplishments/certificate/JGXJ2WN6OCOA"
  },
  {
    name: "Building Database Applications in PHP",
    issuer: "University of Michigan",
    grade: "100%",
    skills: "Server Side, Object Oriented Programming (OOP), Application Security, PHP (Scripting Language), MySQL, Web Applications, Database Development,    Authentications, SQL, Database Application",
    image: BDphp,
    link: "https://www.coursera.org/account/accomplishments/certificate/EC8A0H10ZXX2"
  },
  {
    name: "Coding Interview Preparation",
    issuer: "Meta",
    grade: "90%",
    skills: "Computational Thinking, Program Development, Algorithms, Computer Science, Computational Logic, Pseudocode, Programming Principles, Data Structures,   Technical Communication, Software Visualization, Communication",
    image: Interview,
    link: "https://example.com/interview"
  },
  {
    name: "Introduction to Databases",
    issuer: "Meta",
    grade: "86%",
    skills: "Database Design, Databases, Data Manipulation, Query Languages, Data Integrity, MySQL, Database Management Systems, Relational Databases, database administration, SQL",
    image: Database,
    link: "https://www.coursera.org/account/accomplishments/certificate/X9NUXUPSWQR2"
  },
  {
    name: "Introduction to Databases for Back-End Development",
    issuer: "Meta",
    grade: "86%",
    skills: "Database Design, Databases, Query Languages, MySQL, Database Management Systems, Relational Databases, database administration, NoSQL, SQL",
    image: DBD,
    link: "https://www.coursera.org/account/accomplishments/certificate/8BQQ59XJ5FDG"
  },
  {
    name: "Responsive Web Design",
    issuer: "FreeCodeCamp",
     grade: "98%",
    skills: "Media Queries, Layouts, Responsive Web Design, CSS, Styling, Mobile Friendly",
    image: RWD,
    link: "https://www.freecodecamp.org/certification/satyasaadhika/responsive-web-design"
  },
 {
    name: "Backend Development and APIs",
    issuer: "FreeCodeCamp",
    grade: "95%",
    skills: "Backend development, Full stack, APIs, Mongodb, Express.js, Node.js, React.js, Json, Database",
    image: bdapis2,
    link: "https://example.com/responsive-design"
  }
];

export default certificateData;
