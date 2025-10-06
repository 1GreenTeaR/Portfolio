import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; {currentYear} Richard Orusaar. All rights reserved.</p>
            <p>Built with React and TypeScript.</p>
          </div>

          <div className="footer-links">
            <a href="#hero" className="footer-link">
              Home
            </a>
            <a href="#about" className="footer-link">
              About
            </a>
            <a href="#projects" className="footer-link">
              Projects
            </a>
            <a href="#skills" className="footer-link">
              Skills
            </a>
            <a href="#contact" className="footer-link">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
