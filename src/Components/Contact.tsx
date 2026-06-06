import React, { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Mail, MessageCircle, Github } from "lucide-react";
import { PERSONAL } from "../data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.25, 1, 0.5, 1] },
  }),
};

const Contact: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const contacts = [
    {
      icon: <Mail size={22} />,
      iconClass: "email-icon",
      label: "Email",
      value: PERSONAL.email,
      href: `mailto:${PERSONAL.email}`,
    },
    {
      icon: <MessageCircle size={22} />,
      iconClass: "whatsapp-icon",
      label: "WhatsApp",
      value: PERSONAL.phone,
      href: PERSONAL.whatsapp,
    },
    {
      icon: <Github size={22} />,
      iconClass: "github-icon",
      label: "GitHub",
      value: "KaveeshaGayashan-09",
      href: PERSONAL.github,
    },
  ];

  return (
    <section id="contact" className="section section-alt" ref={ref}>
      <div className="section-content">
        <motion.span
          className="section-label"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
        >
          Let's Talk
        </motion.span>
        <motion.h2
          className="section-title"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={1}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={2}
        >
          I'm always open to new opportunities, collaborations, or simply a conversation.
        </motion.p>

        <div className="contact-wrapper">
          <div className="contact-cards">
            {contacts.map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="contact-card"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={3 + i * 0.4}
              >
                <div className={`contact-card-icon ${c.iconClass}`}>{c.icon}</div>
                <div className="contact-card-text">
                  <div className="contact-card-label">{c.label}</div>
                  <div className="contact-card-value">{c.value}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;