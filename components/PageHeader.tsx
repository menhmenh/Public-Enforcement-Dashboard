interface PageHeaderProps {
  title: string
  subtitle: string
  insight: string
}

export default function PageHeader({ title, subtitle, insight }: PageHeaderProps) {
  return (
    <div className="fixed top-16 left-0 right-0 bg-navy-light text-white z-40 py-6 px-6 border-b border-navy">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
          <p className="text-base italic text-teal-light">{subtitle}</p>
        </div>
        <div className="max-w-sm text-right">
          <p className="text-sm italic text-yellow-300">{insight}</p>
        </div>
      </div>
    </div>
  )
}
