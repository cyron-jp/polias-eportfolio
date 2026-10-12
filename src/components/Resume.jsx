import { useState } from 'react'
import Section from './Section'
import { education, experience, skills } from '../data'
export default function Resume() {
  const [showCert, setShowCert] = useState(false)
  return (
    <Section id="resume" title="Resume / CV" alt>
      <a href="/images/resume.png" download="Polias_CV.png" className="inline-block mb-8 px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">⬇ Download CV</a>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-bold text-emerald-700 mb-4">Education</h3>
          <div className="border-l-4 border-emerald-500 pl-5 space-y-5">
            {education.map(e => (
              <div key={e.school}><p className="font-bold">{e.school}</p><p className="text-sm text-gray-600">{e.level} | {e.year}</p></div>
            ))}
          </div>
          <h3 className="text-xl font-bold text-emerald-700 mt-8 mb-4">Skills</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">{skills.map(s => <li key={s.name}>{s.name}</li>)}</ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-emerald-700 mb-4">Experience</h3>
          <div className="border-l-4 border-emerald-500 pl-5 space-y-6">
            {experience.map(x => (
              <div key={x.title}>
                <p className="font-bold">{x.title}</p>
                <p className="text-sm text-gray-600">{x.place} | {x.date}</p>
                <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">{x.points.map(p => <li key={p}>{p}</li>)}</ul>
              </div>
            ))}
          </div>
          <h3 className="text-xl font-bold text-emerald-700 mt-8 mb-3">Certification</h3>
          <p className="text-gray-700">TESDA National Certificate II - Computer Systems Servicing (valid until July 05, 2028)</p>
          <button onClick={() => setShowCert(!showCert)} className="mt-3 px-5 py-2 rounded-full border-2 border-emerald-600 text-emerald-700 font-semibold hover:bg-emerald-600 hover:text-white transition">{showCert ? 'Hide' : 'View'} Certificate</button>
          {showCert && <img src="/images/certificate.jpg" alt="NC II Certificate" className="mt-4 rounded-xl shadow-lg fade-up" />}
        </div>
      </div>
    </Section>
  )
}
