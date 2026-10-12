import { profile } from '../data'
export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-10 px-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="fade-up order-2 md:order-1">
          <p className="text-emerald-600 font-semibold mb-2">Welcome to my e-portfolio!</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">Hi, I'm <span className="text-emerald-600">{profile.short}</span></h1>
          <p className="mt-4 text-lg font-semibold text-gray-600">{profile.role}</p>
          <p className="mt-4 text-gray-600 max-w-lg">{profile.objective}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 hover:-translate-y-0.5 transition">View Projects</a>
            <a href="#contact" className="px-6 py-3 rounded-full border-2 border-emerald-600 text-emerald-700 font-semibold hover:bg-emerald-600 hover:text-white transition">Contact Me</a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <img src="/images/profile.png" alt={profile.name} className="w-64 h-64 md:w-80 md:h-80 object-cover object-top rounded-full border-8 border-white shadow-2xl" />
        </div>
      </div>
    </section>
  )
}
