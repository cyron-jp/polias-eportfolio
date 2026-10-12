import { useState } from 'react'
import Section from './Section'
import { profile } from '../data'
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.'
    if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters.'
    return e
  }
  const handleChange = ev => { setForm({ ...form, [ev.target.name]: ev.target.value }); setSent(false) }
  const handleSubmit = ev => {
    ev.preventDefault()
    const e = validate(); setErrors(e)
    if (Object.keys(e).length === 0) { setSent(true); setForm({ name: '', email: '', message: '' }) }
  }
  const input = 'w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-400'
  return (
    <Section id="contact" title="Contact Information">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4 text-gray-700">
          <p>📧 <a className="text-emerald-700 font-semibold hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p>📞 {profile.phone}</p>
          <p>📍 {profile.address}</p>
        </div>
        <form onSubmit={handleSubmit} noValidate className="bg-white p-6 rounded-2xl shadow-md space-y-4">
          <div><input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={`${input} ${errors.name ? 'border-red-400' : ''}`} />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}</div>
          <div><input name="email" value={form.email} onChange={handleChange} placeholder="Your email" className={`${input} ${errors.email ? 'border-red-400' : ''}`} />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}</div>
          <div><textarea name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Your message" className={`${input} ${errors.message ? 'border-red-400' : ''}`} />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}</div>
          <button className="w-full py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">Send Message</button>
          {sent && <p className="text-emerald-700 font-semibold text-center fade-up">✅ Thank you! Your message was sent.</p>}
        </form>
      </div>
    </Section>
  )
}
