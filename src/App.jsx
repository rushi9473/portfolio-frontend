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
    // Use Vite's BASE_URL to handle both local and GitHub Pages paths
    const base = import.meta.env.BASE_URL

    fetch(base + 'data/resume.json')
      .then((r) => r.json())
      .then(setResume)
      .catch((err) => console.error('Failed to load resume.json:', err))

    fetch(base + 'data/projects.json')
      .then((r) => r.json())
      .then(setProjects)
      .catch((err) => console.error('Failed to load projects.json:', err))
  }, [])

  if (!resume) {
    return <div className="text-center p-10">Loading...</div>
  }

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
