import "./Contact.css";
import { useState } from "react";

const Contact: React.FC = () => {
  const [copiedMap, setCopiedMap] = useState<Record<string, boolean>>({});

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedMap((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedMap((prev) => ({ ...prev, [key]: false }));
      }, 1200);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's work together on your next project
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div
              className="info-card"
              onClick={() => handleCopy("orusaar.richard@gmail.com", "email")}
              style={{ cursor: "pointer" }}
              title="Click to copy"
            >
              <div className={`copy-toast ${copiedMap.email ? "show" : ""}`}>
                Copied!
              </div>
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>orusaar.richard@gmail.com</p>
            </div>

            <div
              className="info-card"
              onClick={() =>
                handleCopy("linkedin.com/in/richard-orusaar", "linkedin")
              }
              style={{ cursor: "pointer" }}
              title="Click to copy"
            >
              <div className={`copy-toast ${copiedMap.linkedin ? "show" : ""}`}>
                Copied!
              </div>
              <div className="info-icon">💼</div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/richard-orusaar</p>
            </div>

            <div
              className="info-card"
              onClick={() => handleCopy("github.com/1GreenTeaR", "github")}
              style={{ cursor: "pointer" }}
              title="Click to copy"
            >
              <div className={`copy-toast ${copiedMap.github ? "show" : ""}`}>
                Copied!
              </div>
              <div className="info-icon">🐙</div>
              <h3>GitHub</h3>
              <p>github.com/1GreenTeaR</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
