import React, { useEffect, useRef } from "react";
import "./Projects.css";

import playIcon from "../ui/icons/play.svg?raw";
import sourceIcon from "../ui/icons/source.svg?raw";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  desktopImage: string;
  mobileImage: string;
  githubUrl?: string;
  liveUrl?: string;
  category: "game" | "webapp";
  sourceUrl: string;
  previewUrl: string;
}

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      id: "minesweeper",
      title: "Minesweeper",
      description:
        "Classic Minesweeper game with custom styling and smooth animations.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      features: [
        "Responsive Design",
        "Custom Animations",
        "Score Tracking",
        "Difficulty Levels",
      ],
      desktopImage: `${
        import.meta.env.BASE_URL
      }assets/projects/sweeper-desktop.png`,
      mobileImage: `${
        import.meta.env.BASE_URL
      }assets/projects/sweeper-mobile.png`,
      category: "game",
      sourceUrl: "https://github.com/1GreenTeaR/MineSweeper",
      previewUrl: "https://1GreenTeaR.github.io/MineSweeper/",
    },
    {
      id: "flappy-duck",
      title: "FlappyDuck",
      description:
        "A Flappy Bird clone made from scratch, built using JavaScript and Canvas.",
      technologies: ["JavaScript", "HTML5 Canvas", "CSS3"],
      features: [
        "Canvas Animation",
        "Collision Detection",
        "Score System",
        "Responsive Controls",
      ],
      desktopImage: `${
        import.meta.env.BASE_URL
      }assets/projects/flappy-desktop.png`,
      mobileImage: `${
        import.meta.env.BASE_URL
      }assets/projects/flappy-moblie.png`,
      category: "game",
      sourceUrl: "https://github.com/1GreenTeaR/Flappy-Duck",
      previewUrl: "https://1GreenTeaR.github.io/Flappy-Duck/",
    },
    {
      id: "todo-app",
      title: "TODO App",
      description:
        "Modern task manager built with React and TypeScript. Clean and simple.",
      technologies: ["React", "TypeScript", "Vite", "CSS3"],
      features: [
        "Task Management",
        "Local Storage",
        "Filtering",
        "Responsive Design",
      ],
      desktopImage: `${
        import.meta.env.BASE_URL
      }assets/projects/todo-desktop.png`,
      mobileImage: `${import.meta.env.BASE_URL}assets/projects/todo-moblie.png`,
      category: "webapp",
      sourceUrl: "https://github.com/1GreenTeaR/TODO",
      previewUrl: "https://1GreenTeaR.github.io/TODO",
    },
    {
      id: "weather-app",
      title: "Weather App",
      description:
        "Weather app with React and Material-UI. Shows current and forecast Tallinn data.",
      technologies: ["React", "TypeScript", "Material-UI", "Vite"],
      features: [
        "Current Weather",
        "Forecast",
        "Location Services",
        "Material Design",
      ],
      desktopImage: `${
        import.meta.env.BASE_URL
      }assets/projects/weather-desktop.png`,
      mobileImage: `${
        import.meta.env.BASE_URL
      }assets/projects/weather-moblie.png`,
      category: "webapp",
      sourceUrl: "https://github.com/1GreenTeaR/WeatherApp",
      previewUrl: "https://1GreenTeaR.github.io/WeatherApp",
    },
  ];

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">A showcase of my recent work</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.category}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img
                  src={project.desktopImage}
                  alt={`${project.title} desktop view`}
                  className="desktop-screenshot"
                />
                <img
                  src={project.mobileImage}
                  alt={`${project.title} mobile view`}
                  className="mobile-screenshot"
                />
                <div className="project-overlay">
                  <div className="urls">
                    <a href={project.sourceUrl} target="_blank">
                      <button
                        className="source-btn"
                        dangerouslySetInnerHTML={{ __html: sourceIcon }}
                        style={{ fill: "var(--accent-primary)" }}
                      ></button>
                    </a>
                    <a href={project.previewUrl} target="_blank">
                      <button
                        className="preview-btn"
                        dangerouslySetInnerHTML={{ __html: playIcon }}
                      ></button>
                    </a>
                  </div>
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
