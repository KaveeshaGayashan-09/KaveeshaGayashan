import React from 'react';
import {  Mail, MessageCircle, Github } from 'lucide-react';
const Contact: React.FC = () => {
  return (
    <section id="contact" className="section section-alt">
      <div className="section-content">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-description">
            I'm always open to discussing new opportunities, collaborating on projects, or just connecting with fellow developers and tech enthusiasts. Let's create something amazing together!
          </p>
          <div className="contact-links">
            <a href="mailto:kavesha969@gmail.com" className="contact-link">
              <Mail size={24} />
              kavesha969@gmail.com
            </a>
            <a href="https://wa.me/+94760598962" target="_blank" rel="noopener noreferrer" className="contact-link contact-link-whatsapp">
              <MessageCircle size={24} />
              0760598962
            </a>
            {/* <a href="https://github.com/KaveeshaGayashan-09" target="_blank" rel="noopener noreferrer" className="contact-link contact-link-secondary">
              <Github size={24} />
              GitHub Profile
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;