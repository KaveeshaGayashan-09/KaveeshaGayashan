import { Github, ExternalLink } from 'lucide-react';
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of your first project. Explain what it does and what technologies you used to build it. Highlight the problems it solves.',
      tech: ['React', 'JavaScript', 'CSS'],
      github: '#',
      demo: "https://akashpathum.netlify.app"
    },
    {
      title: 'Project Two',
      description: 'A brief description of your second project. Highlight the key features and your role in development. Mention any challenges overcome.',
      tech: ['Java', 'OOP'],
      github: '#',
      demo: "https://akashpathum.netlify.app"
    },
    {
      title: 'Project Three',
      description: 'A brief description of your third project. Discuss what you learned and the impact of the project. Share your development process.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      github: '#',
      demo: "https://akashpathum.netlify.app"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-content">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link">
                    <Github size={18} />
                    Code
                  </a>
                  <a href={project.demo} target= '_Blank' className="project-link">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="project-note">More exciting projects coming soon as I continue my learning journey!</p>
      </div>
    </section>
  );
};

export default Projects;