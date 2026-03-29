'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/PageHeader'
import FilterBar from '@/components/FilterBar'
import InsightCard from '@/components/InsightCard'
import Footer from '@/components/Footer'
import StatsCard from '@/components/StatsCard'
import PercentStackedChart from '@/components/PercentStackedChart'
import GroupedBarChart from '@/components/GroupedBarChart'
import HorizontalStackedChart from '@/components/HorizontalStackedChart'

export const metadata = {
  title: 'Chapter 3: Drug Detection - Road Safety Enforcement',
  description: 'Explore drug detection data including substance breakdown and trends',
}

export default function DrugDetectionDashboard() {
  const [jurisdictions, setJurisdictions] = useState<string[]>(['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'])
  const [yearRange, setYearRange] = useState<[number, number]>([2008, 2024])
  const [substances, setSubstances] = useState<string[]>(['Amphetamine', 'Cannabis', 'Cocaine', 'Ecstasy', 'Methylamphetamine'])

  const handleFilterChange = (filters: any) => {
    setJurisdictions(filters.jurisdictions)
    setYearRange(filters.yearRange)
    if (filters.substances) setSubstances(filters.substances)
  }

  return (
    <>
      <Header />
      <PageHeader
        title="Drug Detection"
        subtitle="Explore drug detection trends and substance composition"
        insight="Methylamphetamine detections have surpassed cannabis and continue to grow. This represents a significant shift in substance use patterns over 16 years."
      />
      
      <main className="bg-white pt-32 pb-16">
        <FilterBar onFilterChange={handleFilterChange} />

        <div className="max-w-6xl mx-auto px-6">
          {/* Stat Row */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatsCard 
                label="Total Positive Drug Tests" 
                value="87,243"
                bgColor="teal"
              />
              <StatsCard 
                label="Most Common Substance (2024)" 
                value="Meth"
                bgColor="yellow"
              />
              <StatsCard 
                label="Year Meth Overtook Cannabis" 
                value="2016"
                bgColor="navy"
              />
              <StatsCard 
                label="Detection Rate Change Since 2008" 
                value="142%"
                unit="↑"
                bgColor="navy"
              />
            </div>
          </section>

          {/* Chart 1: 100% Stacked Bar Chart (full width, hero) */}
          <section className="mb-8">
            <div className="bg-white rounded-lg overflow-hidden border border-grey-dark/10">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-navy mb-2">Drug Detection Composition by Year</h2>
                <p className="text-grey-dark text-sm mb-6">
                  100% stacked bar chart showing the proportion of each detected substance from 2008 to 2024. 
                  Methylamphetamine (amber) is positioned at the top to emphasize its dramatic growth. 
                  Two vertical annotation lines mark key events: 2012 (Testing expanded nationally) and 2016 (Meth overtakes cannabis).
                </p>
                <PercentStackedChart title="" height={320} />
              </div>
            </div>
            <InsightCard text="Methylamphetamine's share of detections grew from under 10% in 2008 to over 40% in 2024, overtaking cannabis around 2016. This coincides with the nationwide expansion of confirmatory testing which reduced the proportion of unknown substances." />
          </section>

          {/* Charts 2 & 3: Age and location breakdown (two columns, 2023–2024 only) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart 2: Age group */}
            <section>
              <div className="bg-white rounded-lg overflow-hidden border border-grey-dark/10">
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-2xl font-bold text-navy">Drug Detections by Age Group</h2>
                    <span className="text-xs font-bold text-white bg-yellow-500 px-2 py-1 rounded">2023–2024 only</span>
                  </div>
                  <p className="text-grey-dark text-sm mb-6">
                    Grouped bar chart showing positive detections for each age group (0–16, 17–25, 26–39, 40–64, 65+). 
                    Three bars per group represent Amphetamine (navy), Cannabis (teal), and Methylamphetamine (amber).
                  </p>
                  <GroupedBarChart title="" height={260} />
                </div>
              </div>
              <InsightCard text="The 26–39 age group shows the highest methylamphetamine detections. Cannabis detections are more evenly spread but peak in the 17–25 group, consistent with general population drug use patterns." />
            </section>

            {/* Chart 3: Location type */}
            <section>
              <div className="bg-white rounded-lg overflow-hidden border border-grey-dark/10">
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-2xl font-bold text-navy">Detections by Location Type</h2>
                    <span className="text-xs font-bold text-white bg-yellow-500 px-2 py-1 rounded">2023–2024 only</span>
                  </div>
                  <p className="text-grey-dark text-sm mb-6">
                    Horizontal stacked bar chart showing total positive tests by location type (Major Cities, Inner Regional, Outer Regional, Remote, Very Remote). 
                    Bars are sorted by total count with Amphetamine, Cannabis, and Methylamphetamine segments stacked.
                  </p>
                  <HorizontalStackedChart title="" height={240} />
                </div>
              </div>
              <InsightCard text="Remote and Very Remote areas show a higher proportion of methylamphetamine relative to cannabis compared to Major Cities. This geographic pattern in substance type may reflect supply chain differences and regional enforcement priorities." />
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
