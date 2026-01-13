import React from 'react';
const About: React.FC = () =>{
  return (
    <section id="about" className="section">
      <div className="section-content">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p className="about-text">
            I'm currently a second-year undergraduate student at SLIIT (Sri Lanka Institute of Information Technology), specializing in Information Systems Engineering. My journey in technology is driven by curiosity and a passion for creating meaningful digital solutions.
          </p>
          <p className="about-text">
            As I progress through my academic career, I'm building a strong foundation in software development, focusing on both object-oriented programming and modern web technologies. I believe in learning by doing, and I'm constantly working on projects that challenge me to grow as a developer.
          </p>
          <p className="about-text">
            I'm actively seeking opportunities to gain hands-on experience through internships and collaborative projects, where I can contribute to innovative solutions while expanding my technical skill set. My goal is to become a well-rounded software engineer who can bridge the gap between business needs and technical implementation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;