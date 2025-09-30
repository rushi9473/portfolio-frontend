import React from 'react'

export default function Footer({ name }) {
  const year = new Date().getFullYear()
  return (
    <footer className="py-6 bg-gray-950 text-center text-gray-400">
      <p>© {year} {name}. All rights reserved.</p>
    </footer>
  )
}
