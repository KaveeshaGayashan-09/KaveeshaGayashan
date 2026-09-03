import React, { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import portfolioData from "../data.json";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.25, 1, 0.5, 1] },
  }),
};

const Projects: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="section-content">
        <motion.span
          className="section-label"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
        >
          What I've Built
        </motion.span>
        <motion.h2
          className="section-title"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={1}
        >
          Projects
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={2}
        >
          A selection of projects I've built as part of my learning and growth.
        </motion.p>

        <div className="projects-grid">
          {portfolioData.projects.map((project: any, i: number) => (
            <motion.div
              key={i}
              className="project-card"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={3 + i * 0.5}
            >
              <span className="project-emoji">{project.emoji}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech: string, j: number) => (
                  <span key={j} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link project-link-primary"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="project-note"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={3 + portfolioData.projects.length * 0.5 + 0.5}
        >
          🚀 More exciting projects coming soon as I continue my learning journey!
        </motion.p>
      </div>
    </section>
  );
};

export default Projects;