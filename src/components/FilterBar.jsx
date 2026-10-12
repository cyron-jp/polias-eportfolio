export default function FilterBar({ options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {options.map(o => (
        <button key={o} onClick={() => onChange(o)}
          className={`px-5 py-2 rounded-full font-semibold transition ${value === o ? 'bg-emerald-600 text-white shadow' : 'bg-white text-gray-700 hover:bg-emerald-100'}`}>{o}</button>
      ))}
    </div>
  )
}
