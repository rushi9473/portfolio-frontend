import React from 'react'

export default function Hero({ name, title }) {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-800 to-purple-800 text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">{name}</h1>
      <h2 className="text-xl md:text-2xl text-gray-200 mb-6">{title}</h2>
      <div className="space-x-4">
        <a href="#projects" className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-200 transition">View My Work</a>
        <a href="/RushiR.Resume.pdf" download className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-gray-900 transition">Download Resume</a>
      </div>
    </section>
  )
}
