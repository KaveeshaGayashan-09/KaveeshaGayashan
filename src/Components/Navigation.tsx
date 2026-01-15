import { useState } from "react";
import { Menu, X } from 'lucide-react';
import React from 'react';
const Navigation: React.FC = () => {
  
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-content">
        <div className="logo">KG</div>
        
        <ul className="nav-links">
          <li><button className="nav-link" onClick={() => scrollToSection('home')}>Home</button></li>
          <li><button className="nav-link" onClick={() => scrollToSection('education')}>Education</button></li>
          <li><button className="nav-link" onClick={() => scrollToSection('about')}>About</button></li>
          <li><button className="nav-link" onClick={() => scrollToSection('skills')}>Skills</button></li>
          <li><button className="nav-link" onClick={() => scrollToSection('projects')}>Projects</button></li>
          <li><button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button></li>
          
        </ul>

        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="nav-link" onClick={() => scrollToSection('home')}>Home</button>
        <button className="nav-link" onClick={() => scrollToSection('education')}>Education</button>
        <button className="nav-link" onClick={() => scrollToSection('about')}>About</button>
        <button className="nav-link" onClick={() => scrollToSection('skills')}>Skills</button>
        <button className="nav-link" onClick={() => scrollToSection('projects')}>Projects</button>
        <button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button>
      </div>
    </nav>
  );
};

export default Navigation;