interface PageHeaderProps {
  title: string
  subtitle: string
  insight: string
}

export default function PageHeader({ title, subtitle, insight }: PageHeaderProps) {
  void insight

  return (
    <section className="fixed left-0 right-0 top-16 z-40 border-b border-border bg-slate-50/95 backdrop-blur-sm">
      <div className="content-wrap flex min-h-[100px] items-center py-4">
        <div className="max-w-2xl">
          <h1 className="font-display text-3xl font-bold text-navy">{title}</h1>
          <p className="text-sm italic text-teal">{subtitle}</p>
        </div>
      </div>
    </section>
  )
}
