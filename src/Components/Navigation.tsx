import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const links = [
    { label: "Home",      id: "home"      },
    { label: "About",     id: "about"     },
    { label: "Skills",    id: "skills"    },
    { label: "Education", id: "education" },
    { label: "Projects",  id: "projects"  },
  ];

  return (
    <nav className={`nav-bar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-content">
        <div className="logo" onClick={() => scrollToSection("home")}>
          KG
        </div>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.id}>
              <button className="nav-link" onClick={() => scrollToSection(l.id)}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button className="contact-btn" onClick={() => scrollToSection("contact")}>
          Contact
        </button>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-menu${isMenuOpen ? " open" : ""}`}>
        {links.map((l) => (
          <button key={l.id} className="nav-link" onClick={() => scrollToSection(l.id)}>
            {l.label}
          </button>
        ))}
        <button className="nav-link" onClick={() => scrollToSection("contact")}>
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navigation;