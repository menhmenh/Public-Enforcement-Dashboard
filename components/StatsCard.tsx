interface StatsCardProps {
  label: string
  value: string
  unit?: string
  bgColor?: 'navy' | 'teal' | 'grey'
}

export default function StatsCard({ label, value, unit, bgColor = 'navy' }: StatsCardProps) {
  const bgClasses = {
    navy: 'bg-navy text-white',
    teal: 'bg-teal text-navy',
    grey: 'bg-grey-dark text-white',
  }

  return (
    <div className={`${bgClasses[bgColor]} px-6 py-4 rounded`}>
      <p className="text-sm opacity-90 mb-2">{label}</p>
      <div className="flex items-baseline gap-2">
        <p className="text-3xl font-bold">{value}</p>
        {unit && <p className="text-sm opacity-75">{unit}</p>}
      </div>
    </div>
  )
}
