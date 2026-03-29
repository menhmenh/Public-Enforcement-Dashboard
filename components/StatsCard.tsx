interface StatsCardProps {
  label: string
  value: string
  unit?: string
  bgColor?: 'navy' | 'teal' | 'amber' | 'surface'
  align?: 'left' | 'center'
}

export default function StatsCard({ label, value, unit, bgColor = 'surface', align = 'left' }: StatsCardProps) {
  const bgClasses = {
    navy: 'bg-navy text-white',
    teal: 'bg-teal text-white',
    amber: 'bg-amber text-white',
    surface: 'bg-white text-navy',
  }

  const alignmentClass = align === 'center' ? 'text-center' : 'text-left'
  const valueRowClass = align === 'center' ? 'justify-center' : 'justify-start'

  return (
    <div className={`${bgClasses[bgColor]} ${alignmentClass} rounded-xl border border-border px-5 py-4 shadow-sm`}>
      <p className="mb-2 text-xs font-medium opacity-90">{label}</p>
      <div className={`flex items-baseline gap-2 ${valueRowClass}`}>
        <p className="font-display text-2xl font-bold">{value}</p>
        {unit && <p className="text-xs opacity-75">{unit}</p>}
      </div>
    </div>
  )
}
