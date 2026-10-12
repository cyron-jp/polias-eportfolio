import { useState } from 'react'
const links = ['Home', 'About', 'Projects', 'Resume', 'Contact']
export default function Navbar({ active }) {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 inset-x-0 z-40 bg-white/90 backdrop-blur shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        <a href="#home" className="font-extrabold text-xl text-emerald-700">CJP.</a>
        <button className="md:hidden text-2xl" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
        <ul className="hidden md:flex gap-8 font-semibold">
          {links.map(l => (
            <li key={l}><a href={`#${l.toLowerCase()}`}
              className={`transition hover:text-emerald-600 ${active === l.toLowerCase() ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-700'}`}>{l}</a></li>
          ))}
        </ul>
      </div>
      {open && (
        <ul className="md:hidden bg-white border-t px-5 pb-4 fade-up">
          {links.map(l => (
            <li key={l}><a onClick={() => setOpen(false)} href={`#${l.toLowerCase()}`} className="block py-3 font-semibold text-gray-700 hover:text-emerald-600">{l}</a></li>
          ))}
        </ul>
      )}
    </nav>
  )
}
