import React, { useEffect, useRef } from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line greeting">Hey there</span>
              <span className="title-line name">I'm Richard</span>
            </h1>
          </div>
          <div className="hero-visual">
            <div className="floating-elements">
              <div className="floating-element element-1">💻</div>
              <div className="floating-element element-2">🎯</div>
              <div className="floating-element element-3">🚀</div>
              <div className="floating-element element-4">⚡</div>
              <div className="floating-element element-5">🎨</div>
              <div className="floating-element element-6">🔧</div>
            </div>
            <div className="hero-avatar">
              <div className="avatar-glow"></div>
              <div className="avatar-placeholder">
                <span>👨‍💻</span>
              </div>
              <div className="avatar-badge">
                <span>Rising Dev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
