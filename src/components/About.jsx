import React from 'react'

export default function About({ summary, skills }) {
  return (
    <section id="about" className="py-20 container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">{summary}</p>
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([group, list]) => (
          <div key={group} className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {list.map((s, i) => (
                <span key={i} className="px-3 py-1 bg-blue-700 text-white rounded-full text-sm">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
