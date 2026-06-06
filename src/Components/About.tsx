import React from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { ABOUT_PARAGRAPHS } from "../data";

const highlights = [
  {
    icon: "🎓",
    title: "SLIIT Undergraduate",
    desc: "2nd Year — Information Systems Engineering",
  },
  {
    icon: "💻",
    title: "Full-Stack Developer",
    desc: "Java + Spring Boot backend · React frontend",
  },
  {
    icon: "🌐",
    title: "Multilingual",
    desc: "Sinhala (native) · English · Japanese (N5)",
  },
  {
    icon: "🔍",
    title: "Open to Internships",
    desc: "Seeking hands-on experience in software engineering",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.25, 1, 0.5, 1] },
  }),
};

const About: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="section-content">
        <motion.span
          className="section-label"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
        >
          Who I Am
        </motion.span>
        <motion.h2
          className="section-title"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={1}
        >
          About Me
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={2}
        >
          A passionate developer driven by curiosity and a love for building things that matter.
        </motion.p>

        <div className="about-wrapper">
          {/* Text */}
          <motion.div
            className="about-text-block"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={3}
          >
            {ABOUT_PARAGRAPHS.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>

          {/* Highlight cards */}
          <div className="about-highlights">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                className="about-highlight-card"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={3 + i * 0.5}
              >
                <span className="about-highlight-icon">{h.icon}</span>
                <div>
                  <div className="about-highlight-title">{h.title}</div>
                  <div className="about-highlight-desc">{h.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;