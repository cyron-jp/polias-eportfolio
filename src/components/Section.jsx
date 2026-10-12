export default function Section({ id, title, children, alt }) {
  return (
    <section id={id} className={`py-20 px-5 ${alt ? 'bg-white' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">{title}</h2>
        <div className="w-16 h-1 bg-emerald-500 rounded mb-10" />
        {children}
      </div>
    </section>
  )
}
