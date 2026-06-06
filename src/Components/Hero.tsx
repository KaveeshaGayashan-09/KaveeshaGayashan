import React, { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { Mail, Github } from "lucide-react";
import image from "../assets/image.jpeg";
import { PERSONAL } from "../data";

// Typewriter hook
function useTypewriter(words: string[], speed = 90, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const delay = deleting
      ? speed / 2
      : charIndex === current.length
      ? pause
      : speed;

    const timeout = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (!deleting && charIndex === current.length) {
        setDeleting(true);
      } else if (deleting && charIndex > 0) {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else {
        setDeleting(false);
        setWordIndex((w) => (w + 1) % words.length);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return text;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 1, 0.5, 1] },
  }),
};

const Hero: React.FC = () => {
  const typeText = useTypewriter(PERSONAL.subtitle);

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        {/* — Left: text — */}
        <div className="hero-info">
          <motion.div
            className="hero-badge"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="hero-badge-dot" />
            Available for opportunities
          </motion.div>

          <motion.h1
            className="hero-title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            {PERSONAL.name}
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <span className="typewriter-text">{typeText}</span>
            <span className="typewriter-cursor" />
          </motion.p>

          <motion.p
            className="hero-description"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            {PERSONAL.description}
          </motion.p>

          <motion.div
            className="hero-buttons"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <a href={`mailto:${PERSONAL.email}`} className="btn-primary">
              <Mail size={18} /> Get in Touch
            </a>
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Github size={18} /> GitHub
            </a>
          </motion.div>

          <motion.div
            className="hero-stats"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            <div className="hero-stat">
              <span className="hero-stat-number">2+</span>
              <span className="hero-stat-label">Years Learning</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">5+</span>
              <span className="hero-stat-label">Certifications</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">2+</span>
              <span className="hero-stat-label">Projects</span>
            </div>
          </motion.div>
        </div>

        {/* — Right: image — */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
        >
          {/* Floating badges */}
          <div className="hero-floating-badge badge-react">⚛️ React</div>
          <div className="hero-floating-badge badge-java">☕ Java</div>

          <div className="hero-image-ring">
            <img src={image} alt={PERSONAL.name} className="hero-img" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;