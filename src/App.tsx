import './App.css'

import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Education from './Components/Education'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="portfolio-container">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
