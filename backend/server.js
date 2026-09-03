const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const dataFilePath = path.join(__dirname, '../src/data.json');

// Helper to read data
const readData = () => {
    try {
        const raw = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(raw);
    } catch (err) {
        console.error('Error reading data.json:', err);
        return { skills: [], education: [] };
    }
};

// Helper to write data
const writeData = (data) => {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (err) {
        console.error('Error writing data.json:', err);
    }
};

// --- Skills API ---

// Get all skills
app.get('/api/skills', (req, res) => {
    const data = readData();
    res.json(data.skills);
});

// Add a new skill
app.post('/api/skills', (req, res) => {
    const { name, category, proficiency } = req.body;
    const data = readData();
    
    const newId = data.skills.length > 0 ? Math.max(...data.skills.map(s => s.id)) + 1 : 1;
    const newSkill = { 
        id: newId, 
        name, 
        category, 
        proficiency,
        color: '#4f46e5' // default color
    };
    
    data.skills.push(newSkill);
    writeData(data);
    
    res.json(newSkill);
});

// Delete a skill
app.delete('/api/skills/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const data = readData();
    
    data.skills = data.skills.filter(s => s.id !== id);
    writeData(data);
    
    res.json({ message: 'Skill deleted' });
});

// --- Education API ---

// Get all education entries
app.get('/api/education', (req, res) => {
    const data = readData();
    res.json(data.education);
});

// Add a new education entry
app.post('/api/education', (req, res) => {
    const { institution, degree, startDate, endDate, description } = req.body;
    const data = readData();
    
    const newId = data.education.length > 0 ? Math.max(...data.education.map(e => e.id)) + 1 : 1;
    const newEdu = { 
        id: newId, 
        institution, 
        degree, 
        startDate, 
        endDate, 
        description 
    };
    
    data.education.push(newEdu);
    writeData(data);
    
    res.json(newEdu);
});

// Delete an education entry
app.delete('/api/education/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const data = readData();
    
    data.education = data.education.filter(e => e.id !== id);
    writeData(data);
    
    res.json({ message: 'Education entry deleted' });
});

// --- Personal API ---

// Get personal info
app.get('/api/personal', (req, res) => {
    const data = readData();
    res.json(data.personal || {});
});

// Update personal info
app.put('/api/personal', (req, res) => {
    const data = readData();
    data.personal = { ...data.personal, ...req.body };
    writeData(data);
    res.json(data.personal);
});

// --- About API ---

// Get about info
app.get('/api/about', (req, res) => {
    const data = readData();
    res.json(data.about || []);
});

// Update about info
app.put('/api/about', (req, res) => {
    const data = readData();
    data.about = req.body.about;
    writeData(data);
    res.json(data.about);
});

// --- Projects API ---

// Get all projects
app.get('/api/projects', (req, res) => {
    const data = readData();
    res.json(data.projects || []);
});

// Add a new project
app.post('/api/projects', (req, res) => {
    const { title, description, tech, github, demo, emoji } = req.body;
    const data = readData();
    
    const projects = data.projects || [];
    const newId = projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1;
    const newProject = { 
        id: newId, 
        title, 
        description, 
        tech, 
        github, 
        demo, 
        emoji 
    };
    
    projects.push(newProject);
    data.projects = projects;
    writeData(data);
    
    res.json(newProject);
});

// Delete a project
app.delete('/api/projects/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const data = readData();
    
    if (data.projects) {
        data.projects = data.projects.filter(p => p.id !== id);
        writeData(data);
    }
    
    res.json({ message: 'Project deleted' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port} - reading from src/data.json`);
});
