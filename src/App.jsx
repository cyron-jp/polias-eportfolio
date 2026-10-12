import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
export default function App() {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const ids = ['home', 'about', 'projects', 'resume', 'contact']
    const obs = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-40% 0px -55% 0px' })
    ids.forEach(i => { const el = document.getElementById(i); el && obs.observe(el) })
    return () => obs.disconnect()
  }, [])
  return (
    <div className="font-sans bg-emerald-50 min-h-screen text-gray-800">
      <Navbar active={active} />
      <Home /><About /><Projects /><Resume /><Contact />
      <footer className="py-6 text-center text-sm text-gray-500 bg-white">© 2026 Cyron James P. Polias. All rights reserved.</footer>
    </div>
  )
}
