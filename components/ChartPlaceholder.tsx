interface ChartPlaceholderProps {
  type: string
  height?: number
  note?: string
}

export default function ChartPlaceholder({ type, height = 280, note }: ChartPlaceholderProps) {
  return (
    <div
      className="chart-panel flex flex-col items-center justify-center p-6"
      style={{ minHeight: `${height}px` }}
    >
      <div className="mb-3 rounded-full border border-surface-2 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wider text-surface">
        {type}
      </div>
      <p className="max-w-xl text-center font-display text-lg font-semibold text-[#143d66]">
        D3 chart placeholder
      </p>
      <p className="mt-2 max-w-2xl text-center text-sm text-[#315678]">
        {note || 'Wireframe-aligned panel ready for D3 rendering, filters, tooltips, annotations, and transitions.'}
      </p>
    </div>
  )
}
