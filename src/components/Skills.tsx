import React, { useEffect, useRef } from "react";
import "./Skills.css";

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 60 },
        { name: "TypeScript", level: 75 },
        { name: "JavaScript", level: 70 },
        { name: "HTML5", level: 85 },
        { name: "CSS3", level: 90 },
        { name: "Material-UI", level: 50 },
      ],
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "Node.js", level: 50 },
        { name: "Vite", level: 45 },
        { name: "Git", level: 70 },
        { name: "VS Code", level: 65 },
        { name: "Figma", level: 50 },
        { name: "Responsive Design", level: 85 },
      ],
    },
    {
      title: "Game Development",
      skills: [
        { name: "HTML5 Canvas", level: 60 },
        { name: "Game Physics", level: 55 },
        { name: "Game Architecture", level: 65 },
        { name: "Animation", level: 80 },
        { name: "Game Logic", level: 85 },
        { name: "Performance Optimization", level: 75 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            // Animate skill bars
            const skillBars = entry.target.querySelectorAll(".skill-bar-fill");
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.classList.add("animate");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="skill-category"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={
                          {
                            "--skill-level": `${skill.level}%`,
                          } as React.CSSProperties
                        }
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <div className="summary-icon">🚀</div>
            <h4>Fast Development</h4>
            <p>Efficient workflow with modern tools and best practices</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🎨</div>
            <h4>Creative Design</h4>
            <p>Eye for detail and user experience in every project</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🔧</div>
            <h4>Problem Solving</h4>
            <p>Analytical approach to complex technical challenges</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
