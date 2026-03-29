interface InsightCardProps {
  text: string
}

export default function InsightCard({ text }: InsightCardProps) {
  return (
    <div className="border-l-4 border-yellow-400 bg-yellow-50 p-6 my-6 rounded">
      <p className="text-sm text-grey-dark leading-relaxed">{text}</p>
    </div>
  )
}
