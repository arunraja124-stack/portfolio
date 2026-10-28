import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-violet focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-mute">
        © {new Date().getFullYear()} Arunraja N. Built with React, Vite and Tailwind CSS.
      </footer>
    </>
  )
}
