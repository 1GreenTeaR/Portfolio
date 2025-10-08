import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>{currentYear} | Portfolio - Richard Orusaar</p>
            <p>Built with React and TypeScript.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
