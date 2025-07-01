import React from 'react';
import './Contact.css';
import { FaGithub, FaTwitter, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1> Get in Touch</h1>
        <p>Let's connect! Reach out to me through any of the platforms below.</p>

        <div className="contact-info">
          <a href="mailto:satyasaadhika.aham@gmail.com" className="contact-card gmail" target="_blank" rel="noopener noreferrer">
            <MdEmail className="icon" />
            <h3>Gmail</h3>
            <p>satyasaadhika.aham@gmail.com</p>
          </a>

          <a href="https://github.com/satyasaadhika" className="contact-card github" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
            <h3>GitHub</h3>
            <p>github.com/satyasaadhika</p>
          </a>

          <a href="https://twitter.com/satyasaadhika" className="contact-card twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
            <h3>Twitter</h3>
            <p>@satyasaadhika</p>
          </a>

          <a href="https://www.linkedin.com/in/satyasaadhika" className="contact-card linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
            <h3>LinkedIn</h3>
            <p>/in/satyasaadhika</p>
          </a>

          <div className="contact-card location">
            <FaMapMarkerAlt className="icon" />
            <h3>Location</h3>
            <p>Lucknow, Uttar Pradesh, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
