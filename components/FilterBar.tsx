'use client'

import { useState } from 'react'

interface FilterBarProps {
  onFilterChange?: (filters: FilterState) => void
}

export interface FilterState {
  jurisdictions: string[]
  yearRange: [number, number]
  offenceTypes?: string[]
  substances?: string[]
}

export default function FilterBar({ onFilterChange }: FilterBarProps) {
  const [jurisdictions, setJurisdictions] = useState<string[]>(['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'])
  const [yearRange, setYearRange] = useState<[number, number]>([2008, 2024])
  const [offenceTypes, setOffenceTypes] = useState<string[]>(['Speed', 'Mobile Phone', 'Seatbelt', 'Unlicensed'])

  const handleReset = () => {
    const defaultState = {
      jurisdictions: ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'],
      yearRange: [2008, 2024] as [number, number],
      offenceTypes: ['Speed', 'Mobile Phone', 'Seatbelt', 'Unlicensed'],
    }
    setJurisdictions(defaultState.jurisdictions)
    setYearRange(defaultState.yearRange)
    setOffenceTypes(defaultState.offenceTypes)
    onFilterChange?.(defaultState)
  }

  const jurisdictionOptions = ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT']
  const offenceTypeOptions = ['Speed', 'Mobile Phone', 'Seatbelt', 'Unlicensed']

  const hasActiveFilter = 
    jurisdictions.length < 8 || 
    yearRange[0] !== 2008 || 
    yearRange[1] !== 2024 ||
    offenceTypes.length < 4

  return (
    <div className="bg-navy-light bg-opacity-60 border-b border-navy py-4 px-6 sticky top-32 z-30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end gap-8">
          {/* Jurisdiction Filter */}
          <div>
            <label className="text-xs font-bold text-grey-dark uppercase tracking-wide block mb-2">
              Filter all charts
            </label>
            <div className="relative">
              <select
                value={jurisdictions[0] || ''}
                onChange={(e) => {
                  const selected = [e.target.value]
                  setJurisdictions(selected)
                  onFilterChange?.({ jurisdictions: selected, yearRange, offenceTypes })
                }}
                className="px-3 py-2 border border-grey-dark/30 rounded text-grey-dark text-sm bg-white w-32 appearance-none"
              >
                <option value="">All States</option>
                {jurisdictionOptions.map(j => (
                  <option key={j} value={j}>{j}</option>
                ))}
              </select>
              {hasActiveFilter && <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-yellow-400"></div>}
            </div>
          </div>

          {/* Year Range Filter */}
          <div>
            <label className="text-xs font-bold text-grey-dark uppercase tracking-wide block mb-2">
              Year range
            </label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="2008"
                max="2024"
                value={yearRange[1]}
                onChange={(e) => {
                  const newRange: [number, number] = [yearRange[0], parseInt(e.target.value)]
                  setYearRange(newRange)
                  onFilterChange?.({ jurisdictions, yearRange: newRange, offenceTypes })
                }}
                className="w-40"
              />
              <span className="text-xs text-grey-dark whitespace-nowrap">{yearRange[0]}–{yearRange[1]}</span>
            </div>
          </div>

          {/* Offence Type Filter */}
          <div>
            <label className="text-xs font-bold text-grey-dark uppercase tracking-wide block mb-2">
              Offence type
            </label>
            <div className="flex gap-2">
              {offenceTypeOptions.map(type => (
                <button
                  key={type}
                  onClick={() => {
                    const newTypes = offenceTypes.includes(type)
                      ? offenceTypes.filter(t => t !== type)
                      : [...offenceTypes, type]
                    setOffenceTypes(newTypes)
                    onFilterChange?.({ jurisdictions, yearRange, offenceTypes: newTypes })
                  }}
                  className={`px-3 py-1 rounded text-xs font-semibold transition relative ${
                    offenceTypes.includes(type)
                      ? 'bg-teal text-white'
                      : 'bg-white text-grey-dark border border-grey-dark/30'
                  }`}
                >
                  {type}
                  {!offenceTypes.includes(type) && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-yellow-400"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="ml-auto text-xs font-bold text-teal-light hover:text-teal transition"
          >
            Reset all filters
          </button>
        </div>
      </div>
    </div>
  )
}
