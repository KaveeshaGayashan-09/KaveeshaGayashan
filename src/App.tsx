

import './App.css'

import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Education from './Components/Education'

function App() {
  return (

      <div className="portfolio-container">
        <Navigation />
        <Hero />
        <Education/>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    
  );
}

export default App;
