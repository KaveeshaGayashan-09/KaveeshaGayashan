import React, { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { EDUCATION } from "../data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.25, 1, 0.5, 1] },
  }),
};

const Education: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="education-section" id="education" ref={ref}>
      <div className="section-content">
        <motion.span
          className="section-label"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
        >
          My Journey
        </motion.span>
        <motion.h2
          className="section-title"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={1}
        >
          Educational Background
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={2}
        >
          Academic milestones and professional certifications.
        </motion.p>

        <div className="timeline">
          {EDUCATION.map((item, i) => (
            <motion.div
              key={item.id}
              className="timeline-item"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={3 + i * 0.6}
            >
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot" />
              </div>

              <div className="education-card">
                <div className="edu-meta">
                  <span className={`badge ${item.type.toLowerCase()}`}>{item.type}</span>
                  <span className="year">{item.year}</span>
                </div>

                <h3 className="degree-title">{item.title}</h3>
                {item.institution && (
                  <p className="institution">{item.institution}</p>
                )}
                {item.status && <p className="stream">{item.status}</p>}

                <ul className="details-list">
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;