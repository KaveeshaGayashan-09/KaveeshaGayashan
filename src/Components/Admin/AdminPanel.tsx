import React, { useState, useEffect } from 'react';
import './AdminPanel.css';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:5000/api';

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // State for all data types
  const [skills, setSkills] = useState<any[]>([]);
  const [education, setEducation] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);

  // Forms
  const [personalForm, setPersonalForm] = useState<any>({});
  const [aboutText, setAboutText] = useState('');
  const [skillForm, setSkillForm] = useState({ name: '', category: '', proficiency: 80 });
  const [eduForm, setEduForm] = useState({ institution: '', degree: '', startDate: '', endDate: '', description: '' });
  const [projectForm, setProjectForm] = useState({ title: '', description: '', tech: '', github: '', demo: '', emoji: '' });

  const fetchData = async () => {
    try {
      const [pRes, aRes, sRes, eRes, prRes] = await Promise.all([
        fetch(`${API_URL}/personal`),
        fetch(`${API_URL}/about`),
        fetch(`${API_URL}/skills`),
        fetch(`${API_URL}/education`),
        fetch(`${API_URL}/projects`),
      ]);
      const pData = await pRes.json();
      const aData = await aRes.json();
      
      setPersonalForm(pData);
      
      setAboutText(aData.join('\n\n'));
      
      setSkills(await sRes.json());
      setEducation(await eRes.json());
      setProjects(await prRes.json());
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleUpdatePersonal = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(`${API_URL}/personal`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(personalForm)
      });
      fetchData();
      alert('Personal Info Updated!');
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateAbout = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const aboutArray = aboutText.split('\n\n').filter(p => p.trim() !== '');
      await fetch(`${API_URL}/about`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ about: aboutArray })
      });
      fetchData();
      alert('About Section Updated!');
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const techArray = projectForm.tech.split(',').map(t => t.trim()).filter(t => t !== '');
      const payload = { ...projectForm, tech: techArray };
      
      await fetch(`${API_URL}/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      setProjectForm({ title: '', description: '', tech: '', github: '', demo: '', emoji: '' });
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteProject = async (id: number) => {
    try {
      await fetch(`${API_URL}/projects/${id}`, { method: 'DELETE' });
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddSkill = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(`${API_URL}/skills`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(skillForm)
      });
      setSkillForm({ name: '', category: '', proficiency: 80 });
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteSkill = async (id: number) => {
    try {
      await fetch(`${API_URL}/skills/${id}`, { method: 'DELETE' });
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddEducation = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(`${API_URL}/education`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eduForm)
      });
      setEduForm({ institution: '', degree: '', startDate: '', endDate: '', description: '' });
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteEducation = async (id: number) => {
    try {
      await fetch(`${API_URL}/education/${id}`, { method: 'DELETE' });
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-panel-container">
      <h1>Admin Dashboard</h1>
      <button onClick={() => navigate('/')} className="back-btn">Back to Portfolio</button>
      
      <div className="admin-sections">
        
        {/* Personal Info Section */}
        <div className="admin-section">
          <h2>Manage Personal Info</h2>
          <form onSubmit={handleUpdatePersonal} className="admin-form">
            <input type="text" placeholder="Name" value={personalForm.name || ''} onChange={(e) => setPersonalForm({...personalForm, name: e.target.value})} required />
            <input type="text" placeholder="Title" value={personalForm.title || ''} onChange={(e) => setPersonalForm({...personalForm, title: e.target.value})} required />
            <textarea placeholder="Description" value={personalForm.description || ''} onChange={(e) => setPersonalForm({...personalForm, description: e.target.value})} required />
            <input type="email" placeholder="Email" value={personalForm.email || ''} onChange={(e) => setPersonalForm({...personalForm, email: e.target.value})} required />
            <input type="text" placeholder="Phone" value={personalForm.phone || ''} onChange={(e) => setPersonalForm({...personalForm, phone: e.target.value})} required />
            <input type="url" placeholder="GitHub URL" value={personalForm.github || ''} onChange={(e) => setPersonalForm({...personalForm, github: e.target.value})} required />
            <input type="url" placeholder="LinkedIn URL" value={personalForm.linkedin || ''} onChange={(e) => setPersonalForm({...personalForm, linkedin: e.target.value})} />
            <input type="url" placeholder="WhatsApp URL" value={personalForm.whatsapp || ''} onChange={(e) => setPersonalForm({...personalForm, whatsapp: e.target.value})} />
            <button type="submit">Save Personal Info</button>
          </form>
        </div>

        {/* About Section */}
        <div className="admin-section">
          <h2>Manage About Section</h2>
          <p style={{fontSize: '0.8rem', color: '#aaa', marginBottom: '1rem'}}>Use double line breaks (Enter twice) to separate paragraphs.</p>
          <form onSubmit={handleUpdateAbout} className="admin-form">
            <textarea 
              style={{ minHeight: '200px' }}
              placeholder="About me paragraphs..." 
              value={aboutText} 
              onChange={(e) => setAboutText(e.target.value)} 
              required 
            />
            <button type="submit">Save About Section</button>
          </form>
        </div>

        {/* Projects Section */}
        <div className="admin-section">
          <h2>Manage Projects</h2>
          <form onSubmit={handleAddProject} className="admin-form">
            <input type="text" placeholder="Project Title" value={projectForm.title} onChange={(e) => setProjectForm({...projectForm, title: e.target.value})} required />
            <input type="text" placeholder="Emoji (e.g. 🌐)" value={projectForm.emoji} onChange={(e) => setProjectForm({...projectForm, emoji: e.target.value})} required />
            <textarea placeholder="Description" value={projectForm.description} onChange={(e) => setProjectForm({...projectForm, description: e.target.value})} required />
            <input type="text" placeholder="Tech Stack (comma separated)" value={projectForm.tech} onChange={(e) => setProjectForm({...projectForm, tech: e.target.value})} required />
            <input type="url" placeholder="GitHub URL" value={projectForm.github} onChange={(e) => setProjectForm({...projectForm, github: e.target.value})} required />
            <input type="url" placeholder="Live Demo URL" value={projectForm.demo} onChange={(e) => setProjectForm({...projectForm, demo: e.target.value})} required />
            <button type="submit">Add Project</button>
          </form>
          <ul className="admin-list">
            {projects.map(proj => (
              <li key={proj.id}>
                <div>
                  <strong>{proj.emoji} {proj.title}</strong><br/>
                  <small>{proj.tech.join(', ')}</small>
                </div>
                <button onClick={() => handleDeleteProject(proj.id)} className="delete-btn">Delete</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Skills Section */}
        <div className="admin-section">
          <h2>Manage Skills</h2>
          <form onSubmit={handleAddSkill} className="admin-form">
            <input type="text" placeholder="Skill Name (e.g. React)" value={skillForm.name} onChange={(e) => setSkillForm({...skillForm, name: e.target.value})} required />
            <input type="text" placeholder="Category (e.g. Frontend)" value={skillForm.category} onChange={(e) => setSkillForm({...skillForm, category: e.target.value})} required />
            <input type="number" placeholder="Proficiency (0-100)" value={skillForm.proficiency} onChange={(e) => setSkillForm({...skillForm, proficiency: Number(e.target.value)})} required min="0" max="100" />
            <button type="submit">Add Skill</button>
          </form>

          <ul className="admin-list">
            {skills.map(skill => (
              <li key={skill.id}>
                {skill.name} ({skill.category}) - {skill.proficiency}%
                <button onClick={() => handleDeleteSkill(skill.id)} className="delete-btn">Delete</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Education Section */}
        <div className="admin-section">
          <h2>Manage Education</h2>
          <form onSubmit={handleAddEducation} className="admin-form">
            <input type="text" placeholder="Institution" value={eduForm.institution} onChange={(e) => setEduForm({...eduForm, institution: e.target.value})} required />
            <input type="text" placeholder="Degree" value={eduForm.degree} onChange={(e) => setEduForm({...eduForm, degree: e.target.value})} required />
            <input type="text" placeholder="Start Date (e.g. 2018)" value={eduForm.startDate} onChange={(e) => setEduForm({...eduForm, startDate: e.target.value})} required />
            <input type="text" placeholder="End Date (e.g. 2022 or Present)" value={eduForm.endDate} onChange={(e) => setEduForm({...eduForm, endDate: e.target.value})} required />
            <textarea placeholder="Description" value={eduForm.description} onChange={(e) => setEduForm({...eduForm, description: e.target.value})} required />
            <button type="submit">Add Education</button>
          </form>

          <ul className="admin-list">
            {education.map(edu => (
              <li key={edu.id}>
                <strong>{edu.institution}</strong> - {edu.degree} ({edu.startDate} - {edu.endDate})
                <button onClick={() => handleDeleteEducation(edu.id)} className="delete-btn">Delete</button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default AdminPanel;
