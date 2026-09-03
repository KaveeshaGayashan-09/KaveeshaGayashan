import React from "react";
import portfolioData from "../data.json";

const personal = portfolioData.personal;

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">KG</div>
        <p className="footer-text">
          © {year} {personal.name} · Built with React & ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;