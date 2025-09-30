import React, { useEffect, useState } from 'react'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [resume, setResume] = useState(null)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/data/resume.json').then(r => r.json()).then(setResume)
    fetch('/data/projects.json').then(r => r.json()).then(setProjects)
  }, [])

  if (!resume) return <div className="text-center p-10">Loading...</div>

  return (
    <div>
      <Hero name={resume.name} title={resume.title} />
      <About summary={resume.summary} skills={resume.skills} />
      <Projects projects={projects} />
      <Contact links={resume.links} />
      <Footer name={resume.name} />
    </div>
  )
}
