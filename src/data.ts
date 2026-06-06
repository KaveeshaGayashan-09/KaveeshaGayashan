// ============================================================
//  PORTFOLIO DATA — Edit everything here to update your site!
// ============================================================

export const PERSONAL = {
  name: "Kaveesha Gayashan",
  title: "Software Engineering Undergraduate",
  subtitle: ["Full-Stack Developer", "Java Enthusiast", "React Developer", "Problem Solver"],
  description:
    "Undergraduate at SLIIT specializing in Software Engineering, passionate about building innovative software solutions and exploring the endless possibilities of technology.",
  email: "kavesha969@gmail.com",
  phone: "0760598962",
  whatsapp: "https://wa.me/+94760598962",
  github: "https://github.com/KaveeshaGayashan-09",
  linkedin: "", // Add your LinkedIn URL here
};

export const ABOUT_PARAGRAPHS = [
  "I'm currently a second-year undergraduate student at SLIIT (Sri Lanka Institute of Information Technology), specializing in Software Engineering. My journey in technology is driven by curiosity and a passion for creating meaningful digital solutions.",
  "As I progress through my academic career, I'm building a strong foundation in software development, focusing on both object-oriented programming and modern web technologies. I believe in learning by doing, and I'm constantly working on projects that challenge me to grow as a developer.",
  "I'm actively seeking opportunities to gain hands-on experience through internships and collaborative projects, where I can contribute to innovative solutions while expanding my technical skill set. My goal is to become a well-rounded software engineer who can bridge the gap between business needs and technical implementation.",
];

// Skill level: 0–100 (shown as animated progress bar)
export const SKILLS = [
  { name: "Java", level: 80, category: "Backend", color: "#f89820" },
  { name: "Java OOP", level: 78, category: "Backend", color: "#f89820" },
  { name: "Spring Boot", level: 65, category: "Backend", color: "#6db33f" },
  { name: "JavaScript", level: 75, category: "Frontend", color: "#f7df1e" },
  { name: "React", level: 72, category: "Frontend", color: "#61dafb" },
  { name: "HTML & CSS", level: 85, category: "Frontend", color: "#e34f26" },
  { name: "MySQL", level: 68, category: "Database", color: "#4479a1" },
  { name: "Git & GitHub", level: 70, category: "Tools", color: "#f05032" },
];

export const EDUCATION = [
  {
    id: 1,
    type: "University" as const,
    title: "BSc (Hons) in Software Engineering",
    institution: "SLIIT – Sri Lanka Institute of Information Technology",
    year: "2024 – Present",
    details: ["2nd Year Undergraduate", "Specializing in full-stack development & systems design"],
    status: "Ongoing",
  },
  {
    id: 2,
    type: "Exam" as const,
    title: "G.C.E. Advanced Level (A/L)",
    institution: "Vishvoda National College",
    year: "2024",
    details: ["Japanese: B", "Economics: B", "ICT: B"],
    status: "Arts Stream",
  },
  {
    id: 3,
    type: "Exam" as const,
    title: "G.C.E. Ordinary Level (O/L)",
    institution: "S.W.R.D Bandaranaike College, Kurunegala",
    year: "2021 / 2022",
    details: ["8 out of 9 passes", "Including Mathematics & English"],
    status: "",
  },
  {
    id: 4,
    type: "Certification" as const,
    title: "Professional Certifications",
    institution: "Various Institutions",
    year: "2023",
    details: [
      "Assured Diploma in IT",
      "Diploma in English",
      "Web Design for Beginners",
      "Japanese Language – N5 Qualified",
      "Cyber Security & Ethical Hacking (Beginner)",
    ],
    status: "",
  },
];

export const PROJECTS = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React, featuring smooth animations and a clean dark-mode design to showcase my skills and projects.",
    tech: ["React", "JavaScript", "CSS"],
    github: "#",
    demo: "https://akashpathum.netlify.app",
    emoji: "🌐",
  },
  {
    title: "Home Tutor Management System",
    description:
      "A full-stack web application with CRUD operations, JWT Authentication, and a dedicated Admin Panel to manage tutors, students, and sessions efficiently.",
    tech: ["Java", "Spring Boot", "MySQL", "React", "JWT"],
    github: "#",
    demo: "https://hometutor-mu.vercel.app",
    emoji: "📚",
  },
  {
    title: "Client Management System",
    description:
      "A full-stack web application with CRUD operations, JWT Authentication, and a dedicated Admin Panel to manage Clients ,  Including OAuth and also Password Reset Using Spring Security.",
    tech: ["Java", "Spring Boot", "MySQL", "React", "JWT", "Spring Security", "OAuth 2.0"],
    github: "#",
    demo: "https://client-management-k8u9.vercel.app",
    emoji: "💼",
  }
  // Add more projects here!
];
