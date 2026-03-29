interface InsightCardProps {
  text: string
}

export default function InsightCard({ text }: InsightCardProps) {
  return (
    <div className="my-3 rounded-xl border border-navy/30 bg-[#dfe8f4] p-4 text-navy shadow-sm">
      <p className="text-[15px] leading-relaxed">{text}</p>
    </div>
  )
}
