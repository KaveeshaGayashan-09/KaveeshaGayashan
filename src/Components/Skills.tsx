
import { Code, Layers } from 'lucide-react';
import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Java', icon: Code },
    { name: 'Java OOP', icon: Layers },
    { name: 'JavaScript', icon: Code },
    { name: 'React', icon: Layers },
    { name: 'HTML', icon: Code },
    { name: 'CSS', icon: Code }
  ];

  return (
    <section id="skills" className="section section-alt">
      <div className="section-content">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <skill.icon size={24} />
              </div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;