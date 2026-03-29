'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/PageHeader'
import FilterBar from '@/components/FilterBar'
import InsightCard from '@/components/InsightCard'
import Footer from '@/components/Footer'
import StatsCard from '@/components/StatsCard'
import MockLineChart from '@/components/MockLineChart'
import MockBarChart from '@/components/MockBarChart'

export const metadata = {
  title: 'Chapter 2: Drink Driving - Road Safety Enforcement',
  description: 'Explore drink driving enforcement data including positivity rates and outcomes',
}

export default function DrinkDrivingDashboard() {
  const [jurisdictions, setJurisdictions] = useState<string[]>(['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'])
  const [yearRange, setYearRange] = useState<[number, number]>([2008, 2024])
  const [locationType, setLocationType] = useState('all')

  const handleFilterChange = (filters: any) => {
    setJurisdictions(filters.jurisdictions)
    setYearRange(filters.yearRange)
  }

  // Mock stat calculations based on filters
  const totalPositiveTests = 52847
  const nationalAverageRate = 0.5
  const highestRateState = 'NT'
  const rateChange = -0.3

  return (
    <>
      <Header />
      <PageHeader
        title="Drink Driving"
        subtitle="Explore trends in breath testing and positivity rates"
        insight="Positivity rates have fallen dramatically in most states since 2008 — but the Northern Territory remains a persistent outlier."
      />
      
      <main className="bg-white pt-32 pb-16">
        <FilterBar onFilterChange={handleFilterChange} />

        <div className="max-w-6xl mx-auto px-6">
          {/* Stat Row */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatsCard 
                label="Total Positive Breath Tests (selected period)" 
                value={totalPositiveTests.toLocaleString()}
                bgColor="teal"
              />
              <StatsCard 
                label="National Average Positivity Rate" 
                value={nationalAverageRate.toFixed(1)}
                unit="%"
                bgColor="teal"
              />
              <StatsCard 
                label="State with Highest Rate" 
                value={highestRateState}
                bgColor="navy"
              />
              <StatsCard 
                label="Change vs 5 Years Prior" 
                value={`${Math.abs(rateChange).toFixed(1)}%`}
                unit={rateChange < 0 ? '↓' : '↑'}
                bgColor={rateChange < 0 ? 'navy' : 'navy'}
              />
            </div>
          </section>

          {/* Chart 1: Positivity rate by state over time (primary chart) */}
          <section className="mb-8">
            <div className="bg-white rounded-lg overflow-hidden border border-grey-dark/10">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-navy mb-2">Positivity Rate by State Over Time</h2>
                <p className="text-grey-dark text-sm mb-6">
                  X axis: Year (2008–2024). Y axis: Positivity rate (%). 
                  One line per state/territory with distinct colours. NT highlighted in red. Hover to see state details and year-specific values. 
                  An annotation at NT's 2023 value highlights it as the highest rate nationally.
                </p>
                <MockLineChart title="" height={340} />
              </div>
            </div>
            <InsightCard text="The Northern Territory consistently shows a positivity rate 4–6 times higher than New South Wales and Victoria. Most states have improved since 2008, but the NT trend has not declined at the same rate, suggesting structural differences in enforcement or driver behaviour." />
          </section>

          {/* Chart 2: Positive tests vs tests conducted, dual axis */}
          <section className="mb-8">
            <div className="bg-white rounded-lg overflow-hidden border border-grey-dark/10">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-navy mb-2">Tests Conducted vs Positivity Rate</h2>
                <p className="text-grey-dark text-sm mb-6">
                  Combined visualization with bars (left axis, navy) showing total breath tests conducted per year, 
                  and a teal line (right axis) showing positivity rate percentage. 
                  A legend inside the chart clearly identifies bars = tests conducted and line = % positive.
                </p>
                <MockBarChart title="" height={320} />
              </div>
            </div>
            <InsightCard text="The number of breath tests conducted fell sharply in 2020–2021 due to COVID-19 restrictions, but the positivity rate rose during the same period, suggesting those who were still driving were more likely to be over the limit." />
          </section>

          {/* Chart 3: Positive tests by location type (2023–2024 only) */}
          <section className="mb-8">
            <div className="bg-white rounded-lg overflow-hidden border border-grey-dark/10">
              <div className="p-8">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold text-navy">Positive Tests by Location Type</h2>
                  <span className="text-xs font-bold text-white bg-yellow-500 px-2 py-1 rounded">2023–2024 only</span>
                </div>
                <p className="text-grey-dark text-sm mb-6">
                  Grouped bar chart showing positive tests across location types (Major Cities, Inner Regional, Outer Regional, Remote, Very Remote). 
                  Two bars per location type: 2023 (navy), 2024 (teal). 
                  Rate-per-test annotations above each 2024 bar: "1 in X tested positive".
                </p>
                <MockBarChart title="" height={260} />
              </div>
            </div>
            <InsightCard text="Very Remote areas show a detection rate per test far higher than Major Cities despite lower absolute counts. This means fewer people are being tested in remote areas, but those who are tested are significantly more likely to be over the limit." />
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
