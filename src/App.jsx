import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import { useTheme } from './useTheme.js'

export default function App() {
  const [theme, toggleTheme] = useTheme()

  return (
    <>
      <a className="skip" href="#main-content">
        Skip to main content
      </a>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>© 2026 Jasper Teo Kheng Cher · K0126002 Web Programming · Gachon University · Built with React and Vite</p>
      </footer>
    </>
  )
}
