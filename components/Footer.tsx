export default function Footer() {
  return (
    <footer className="mt-10 border-t border-border bg-white py-6">
      <div className="content-wrap grid gap-2 text-sm md:grid-cols-3 md:items-center">
        <p className="text-slate-600 md:text-left">
          Data source: BITRE — Bureau of Infrastructure and Transport Research Economics
        </p>
        <p className="text-slate-600 md:text-center">
          Coverage: 2008–2024 · All Australian states & territories
        </p>
        <p className="text-slate-600 md:text-right">
          COS30045 Data Visualisation · Swinburne University
        </p>
      </div>
    </footer>
  )
}
