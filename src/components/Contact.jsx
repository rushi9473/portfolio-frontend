import React from 'react'

export default function Contact({ links }) {
  return (
    <section id="contact" className="py-20 container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <p className="text-gray-300 mb-4">I'd love to connect! Reach out through any of the platforms below:</p>
      <div className="space-y-2">
        <p><a href={`mailto:${links.email}`} className="text-blue-400 hover:underline">{links.email}</a></p>
        <p><a href={`tel:${links.phone}`} className="text-blue-400 hover:underline">{links.phone}</a></p>
        <p><a href={links.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">LinkedIn</a></p>
        <p><a href={links.github} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">GitHub</a></p>
      </div>
    </section>
  )
}
