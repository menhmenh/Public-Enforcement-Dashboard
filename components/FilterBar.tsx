'use client'

interface FilterBarProps {
  title: string
  onReset?: () => void
}

export default function FilterBar({ title, onReset }: FilterBarProps) {
  return (
    <div className="bg-white border-b border-grey-dark/20 px-6 py-4">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-semibold text-grey-dark">Select jurisdiction</p>
        <button 
          onClick={onReset}
          className="px-4 py-2 border border-grey-dark/30 rounded hover:bg-grey transition text-sm font-semibold text-navy"
        >
          RESET VIEW
        </button>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <select className="w-full px-4 py-2 border border-grey-dark/30 rounded bg-white text-navy">
            <option>Multiple selections</option>
            <option>NSW</option>
            <option>VIC</option>
            <option>QLD</option>
            <option>WA</option>
            <option>SA</option>
            <option>TAS</option>
            <option>ACT</option>
            <option>NT</option>
          </select>
        </div>
        <div className="flex-1">
          <select className="w-full px-4 py-2 border border-grey-dark/30 rounded bg-white text-navy">
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
          </select>
        </div>
      </div>
    </div>
  )
}
