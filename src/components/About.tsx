import React, { useEffect, useRef } from "react";
import "./About.css";

const About: React.FC = () => {
  const aboutRef = useRef<HTMLElement>(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3>Who Am I?</h3>
              <p>
                I'm a self-taught junior developer who loves learning and
                building things people can use. I'm now looking for my first job
                in tech!
              </p>
            </div>

            <div className="about-card">
              <h3>What I've Built</h3>
              <p>
                From JavaScript games to my first React apps, every project here
                marks a step in my growth. I enjoy trying new tech and solving
                new problems.
              </p>
            </div>

            <div className="about-card">
              <h3>What's Next?</h3>
              <p>
                I'm preparing to join a team where I can learn more and
                contribute. If you need a motivated junior developer, let's
                connect!
              </p>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">4+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Learning</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Passion Driven</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
