import { useState } from 'react'
import Section from './Section'
import FilterBar from './FilterBar'
import { projects } from '../data'
export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)
  const shown = projects.filter(p => filter === 'All' || p.cat === filter)
  return (
    <Section id="projects" title="Projects / Work Samples">
      <FilterBar options={['All', 'Web', 'Programming', 'Networking']} value={filter} onChange={setFilter} />
      <p className="mb-6 font-bold text-gray-700">Filtered: {filter} Projects</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shown.map(p => (
          <div key={p.title} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition fade-up flex flex-col">
            <img src={p.img} alt={p.title} className="h-48 w-full object-cover object-top" />
            <div className="p-5 flex flex-col flex-1">
              <span className="text-xs font-bold text-emerald-600 uppercase">{p.cat}</span>
              <h3 className="font-bold text-lg mt-1">{p.title}</h3>
              <p className="text-gray-600 text-sm mt-2 flex-1">{p.desc}</p>
              <button onClick={() => setSelected(p)} className="mt-4 py-2 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">View More</button>
            </div>
          </div>
        ))}
      </div>
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto fade-up" onClick={e => e.stopPropagation()}>
            <img src={selected.img} alt={selected.title} className="w-full" />
            <div className="p-6">
              <h3 className="text-xl font-bold">{selected.title}</h3>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">{selected.details}</p>
              <button onClick={() => setSelected(null)} className="mt-5 px-6 py-2 rounded-full bg-gray-800 text-white font-semibold">Close</button>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}
