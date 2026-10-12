import { useState } from 'react'
import Section from './Section'
import FilterBar from './FilterBar'
import { profile, skills, hobbies } from '../data'
export default function About() {
  const [filter, setFilter] = useState('All')
  const shown = skills.filter(s => filter === 'All' || s.cat === filter)
  return (
    <Section id="about" title="About Me" alt>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-3 text-emerald-700">Personal Background</h3>
          <p className="text-gray-600 leading-relaxed">I am {profile.name}, a Filipino BS Information Technology student at Cavite State University - Tanza Campus. I hold a TESDA National Certificate II in Computer Systems Servicing and enjoy building websites, programs and networks.</p>
          <p className="text-gray-600 leading-relaxed mt-3">{profile.objective}</p>
          <h3 className="text-xl font-bold mt-6 mb-3 text-emerald-700">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {hobbies.map(h => <span key={h} className="px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold">{h}</span>)}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3 text-emerald-700">Skills</h3>
          <FilterBar options={['All', 'Technical', 'Soft']} value={filter} onChange={setFilter} />
          <div className="rounded-3xl shadow-lg p-8 bg-emerald-50">
            <h4 className="text-xl font-bold mb-3">Filtered: {filter} Skills</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">{shown.map(s => <li key={s.name}>{s.name}</li>)}</ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
