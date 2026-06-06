import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { SKILLS } from "../data";

const CATEGORIES = ["All", ...Array.from(new Set(SKILLS.map((s) => s.category)))];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.55, ease: [0.25, 1, 0.5, 1] },
  }),
};

interface SkillBarProps {
  level: number;
  color: string;
  inView: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ level, color, inView }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setWidth(level), 200);
      return () => clearTimeout(t);
    }
  }, [inView, level]);

  return (
    <div className="skill-bar-track">
      <div
        className="skill-bar-fill"
        style={{ width: `${width}%`, background: color }}
      />
    </div>
  );
};

const Skills: React.FC = () => {
  const [active, setActive] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered =
    active === "All" ? SKILLS : SKILLS.filter((s) => s.category === active);

  return (
    <section id="skills" className="section section-alt" ref={ref}>
      <div className="section-content">
        <motion.span
          className="section-label"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
        >
          What I Know
        </motion.span>
        <motion.h2
          className="section-title"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={1}
        >
          Technical Skills
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={2}
        >
          Technologies I've been working with and learning actively.
        </motion.p>

        {/* Category Filter */}
        <motion.div
          className="skills-categories"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={3}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`skill-filter-btn${active === cat ? " active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              style={{ "--skill-color": skill.color } as React.CSSProperties}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={4 + i * 0.5}
            >
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level-label">{skill.level}%</span>
              </div>
              <SkillBar level={skill.level} color={skill.color} inView={inView} />
              <span className="skill-category-tag">{skill.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;