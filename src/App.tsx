import './App.css'

import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Education from './Components/Education'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import AdminPanel from './Components/Admin/AdminPanel'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="portfolio-container">
        <Routes>
          <Route path="/" element={
            <>
              <Navigation />
              <Hero />
              <About />
              <Skills />
              <Education />
              <Projects />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
