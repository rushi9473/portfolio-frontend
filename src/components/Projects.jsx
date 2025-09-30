import React from 'react'

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-20 bg-gray-950 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition transform">
            <h3 className="text-xl font-semibold mb-3">{p.name}</h3>
            <p className="text-gray-300 mb-4">{p.description}</p>
            <a href={p.link} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  )
}
