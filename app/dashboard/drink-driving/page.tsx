import Header from '@/components/Header'
import PageHeader from '@/components/PageHeader'
import FilterBar from '@/components/FilterBar'
import InsightCard from '@/components/InsightCard'
import Footer from '@/components/Footer'
import MockLineChart from '@/components/MockLineChart'
import MockBarChart from '@/components/MockBarChart'

export const metadata = {
  title: 'Chapter 2: Drink Driving - Road Safety Enforcement',
  description: 'Explore drink driving enforcement data including positivity rates and outcomes',
}

export default function DrinkDrivingDashboard() {
  return (
    <>
      <Header />
      <PageHeader
        title="Drink Driving"
        subtitle="Explore trends in breath testing and positivity rates"
        insight="Positivity rates have fallen dramatically in most states since 2008 — but the Northern Territory remains a persistent outlier."
      />
      
      <main className="bg-white pt-32 pb-16">
        <FilterBar />

        <div className="max-w-6xl mx-auto px-6">
          {/* Chart 1: Breath tests vs positivity rate (full width) */}
          <section className="mb-8">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-navy mb-2">Breath Tests Conducted vs Positivity Rate</h2>
                <p className="text-grey-dark text-sm mb-6">
                  X axis: Year (2008–2024). Left Y axis: Total tests conducted. Right Y axis: Percentage of positive results. 
                  Combined view showing volume of testing against success rate in identifying positive cases.
                </p>
                <MockLineChart title="" height={320} />
              </div>
            </div>
            <InsightCard text="Despite increasing test volumes in most states, positivity rates have declined significantly. This reflects improved community compliance with drink-driving laws and better road safety culture across Australia." />
          </section>

          {/* Chart 2: Positivity rate by jurisdiction (full width) */}
          <section className="mb-8">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-navy mb-2">Positive Results by Jurisdiction</h2>
                <p className="text-grey-dark text-sm mb-6">
                  Horizontal bar chart comparing positivity rates across all Australian states and territories. 
                  Data shows that some jurisdictions, particularly the Northern Territory and remote regions, maintain rates significantly above the national average.
                </p>
                <MockBarChart title="" height={280} />
              </div>
            </div>
            <InsightCard text="Northern Territory consistently shows the highest positivity rate — often three to four times the national average. This suggests a need for targeted intervention in remote areas and specific regions with persistent high-risk behaviour." />
          </section>

          {/* Charts 3 & 4: Trends and location breakdown (two columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart 3: Positivity trends by state */}
            <section>
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-navy mb-2">Positivity Rate Trends by State</h2>
                  <p className="text-grey-dark text-sm mb-6">
                    Multi-line chart showing long-term trends (2008–2024) for each jurisdiction. 
                    Most states show declining trends, but variations reveal state-specific enforcement and compliance patterns.
                  </p>
                  <MockLineChart title="" height={300} />
                </div>
              </div>
              <InsightCard text="Most jurisdictions show declining positivity rates over the 16-year period, indicating a general improvement in drink-driving prevention. However, the divergence between states suggests different enforcement strategies or compliance levels." />
            </section>

            {/* Chart 4: Positivity by location type */}
            <section>
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-2xl font-bold text-navy">Positivity Rate by Location Type</h2>
                    <span className="text-xs font-bold text-white bg-yellow-500 px-2 py-1 rounded">2023–2024 only</span>
                  </div>
                  <p className="text-grey-dark text-sm mb-6">
                    Comparison of positivity rates across location types (Major Cities, Inner Regional, Outer Regional, Remote, Very Remote). 
                    Remote areas show higher rates, reflecting different risk profiles.
                  </p>
                  <MockBarChart title="" height={300} />
                </div>
              </div>
              <InsightCard text="Remote and very remote areas show positivity rates significantly above major cities. This geographic disparity requires tailored enforcement approaches and community education programs suited to regional contexts." />
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
