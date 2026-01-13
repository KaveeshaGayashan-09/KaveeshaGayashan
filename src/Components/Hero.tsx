import React from 'react';
import { Mail, Github } from 'lucide-react';
const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Kaveesha Gayashan</h1>
        <p className="hero-subtitle">Information Systems Engineering Student</p>
        <p className="hero-description">
          Undergraduate at SLIIT specializing in Information Systems Engineering, passionate about building innovative software solutions and exploring the endless possibilities of technology.
        </p>
        <div className="hero-buttons">
          <a href="mailto:kavesha969@gmail.com" className="btn-primary">
            <Mail size={20} />
            Get in Touch
          </a>
          <a href="https://github.com/KaveeshaGayashan-09" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Github size={20} />
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;