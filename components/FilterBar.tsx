'use client'

import { useMemo, useState } from 'react'

type FilterVariant = 'fines' | 'breath' | 'drugs'

interface FilterBarProps {
  variant: FilterVariant
}

const ALL_STATES = ['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC', 'WA']

export default function FilterBar({ variant }: FilterBarProps) {
  const [jurisdiction, setJurisdiction] = useState('All states')
  const [yearStart, setYearStart] = useState(2008)
  const [yearEnd, setYearEnd] = useState(2024)
  const [locationType, setLocationType] = useState('All locations')
  const [offenceMode, setOffenceMode] = useState('All selected')
  const [substance, setSubstance] = useState('All substances')

  const resetFilters = () => {
    setJurisdiction('All states')
    setYearStart(2008)
    setYearEnd(2024)
    setLocationType('All locations')
    setOffenceMode('All selected')
    setSubstance('All substances')
  }

  const hasActiveFilters = useMemo(() => {
    return (
      jurisdiction !== 'All states' ||
      yearStart !== 2008 ||
      yearEnd !== 2024 ||
      locationType !== 'All locations' ||
      offenceMode !== 'All selected' ||
      substance !== 'All substances'
    )
  }, [jurisdiction, yearStart, yearEnd, locationType, offenceMode, substance])

  return (
    <section className="sticky top-40 z-30 border-y border-border bg-white/95 py-3 backdrop-blur-sm">
      <div className="content-wrap flex flex-wrap items-end gap-4 lg:gap-7">
        <FilterField label="Filter all charts" active={jurisdiction !== 'All states'}>
          <select
            className="rounded-md border border-border bg-white px-3 py-2 text-sm text-navy"
            value={jurisdiction}
            onChange={(event) => setJurisdiction(event.target.value)}
          >
            <option>All states</option>
            {ALL_STATES.map((state) => (
              <option key={state}>{state}</option>
            ))}
          </select>
        </FilterField>

        <FilterField label="Year range" active={yearStart !== 2008 || yearEnd !== 2024}>
          <div className="flex items-center gap-2">
            <input
              aria-label="Year start"
              type="number"
              min={2008}
              max={2024}
              className="w-20 rounded-md border border-border bg-white px-2 py-2 text-sm text-navy"
              value={yearStart}
              onChange={(event) => setYearStart(Number(event.target.value))}
            />
            <span className="text-slate-500">to</span>
            <input
              aria-label="Year end"
              type="number"
              min={2008}
              max={2024}
              className="w-20 rounded-md border border-border bg-white px-2 py-2 text-sm text-navy"
              value={yearEnd}
              onChange={(event) => setYearEnd(Number(event.target.value))}
            />
          </div>
        </FilterField>

        {variant === 'fines' && (
          <FilterField label="Offence type" active={offenceMode !== 'All selected'}>
            <select
              className="rounded-md border border-border bg-white px-3 py-2 text-sm text-navy"
              value={offenceMode}
              onChange={(event) => setOffenceMode(event.target.value)}
            >
              <option>All selected</option>
              <option>Speed only</option>
              <option>Mobile phone only</option>
              <option>Seatbelt only</option>
              <option>Unlicensed only</option>
            </select>
          </FilterField>
        )}

        {variant === 'breath' && (
          <FilterField label="Location type" active={locationType !== 'All locations'}>
            <select
              className="rounded-md border border-border bg-white px-3 py-2 text-sm text-navy"
              value={locationType}
              onChange={(event) => setLocationType(event.target.value)}
            >
              <option>All locations</option>
              <option>Major Cities</option>
              <option>Inner Regional</option>
              <option>Outer Regional</option>
              <option>Remote</option>
              <option>Very Remote</option>
            </select>
          </FilterField>
        )}

        {variant === 'drugs' && (
          <FilterField label="Substance" active={substance !== 'All substances'}>
            <select
              className="rounded-md border border-border bg-white px-3 py-2 text-sm text-navy"
              value={substance}
              onChange={(event) => setSubstance(event.target.value)}
            >
              <option>All substances</option>
              <option>Amphetamine</option>
              <option>Cannabis</option>
              <option>Cocaine</option>
              <option>Ecstasy</option>
              <option>Methylamphetamine</option>
            </select>
          </FilterField>
        )}

        <button
          onClick={resetFilters}
          className="ml-auto text-sm font-semibold text-teal transition hover:text-navy"
        >
          Reset all filters{hasActiveFilters ? ' •' : ''}
        </button>
      </div>
    </section>
  )
}

interface FilterFieldProps {
  label: string
  active: boolean
  children: React.ReactNode
}

function FilterField({ label, active, children }: FilterFieldProps) {
  return (
    <div className="relative min-w-[180px]">
      <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
        <span>{label}</span>
        {active && <span className="h-2 w-2 rounded-full bg-amber"></span>}
      </div>
      {children}
    </div>
  )
}
