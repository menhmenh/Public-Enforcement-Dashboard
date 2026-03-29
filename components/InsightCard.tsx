interface InsightCardProps {
  text: string
}

export default function InsightCard({ text }: InsightCardProps) {
  return (
    <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 my-6 rounded">
      <div className="flex gap-3">
        <div className="text-2xl flex-shrink-0">💡</div>
        <p className="text-sm text-grey-dark leading-relaxed">{text}</p>
      </div>
    </div>
  )
}
