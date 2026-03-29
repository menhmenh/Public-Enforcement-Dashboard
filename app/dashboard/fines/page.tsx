import Header from '@/components/Header'
import PageHeader from '@/components/PageHeader'
import FilterBar from '@/components/FilterBar'
import InsightCard from '@/components/InsightCard'
import Footer from '@/components/Footer'
import MockLineChart from '@/components/MockLineChart'
import MockBarChart from '@/components/MockBarChart'
import MockStackedChart from '@/components/MockStackedChart'

export const metadata = {
  title: 'Chapter 1: Fines & Offences - Road Safety Enforcement',
  description: 'Explore fines enforcement data including speed and mobile phone violations',
}

export default function FinesDashboard() {
  return (
    <>
      <Header />
      <PageHeader
        title="Fines & Offences"
        subtitle="Explore trends in road safety enforcement fines"
        insight="Speed offences account for over 85% of all fines — but mobile phone fines have tripled since 2012."
      />
      
      <main className="bg-white pt-32 pb-16">
        <FilterBar />

        <div className="max-w-6xl mx-auto px-6">
          {/* Chart 1: Fines over time (full width) */}
          <section className="mb-8">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-navy mb-2">Fines Over Time by Offence Type</h2>
                <p className="text-grey-dark text-sm mb-6">
                  X axis: Year (2008–2024). Y axis: Total fines. Four lines show Speed (navy), Mobile Phone (teal), Seatbelt (mint), and Unlicensed Driving (grey). 
                  The vertical dashed line at 2012 marks the introduction of camera detection for mobile phones.
                </p>
                <MockLineChart title="" height={320} />
              </div>
            </div>
            <InsightCard text="Speed fines are consistently the highest-volume offence and peaked at over 5 million in 2021. Mobile phone fines were negligible before 2012 but have grown nearly every year since camera detection was introduced, reaching over 400,000 in 2022." />
          </section>

          {/* Chart 2: Mobile phone fines by detection method (full width) */}
          <section className="mb-8">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-navy mb-2">Mobile Phone Fines by Detection Method</h2>
                <p className="text-grey-dark text-sm mb-6">
                  Stacked bar chart showing the split between Police-issued (navy) and Camera-detected (teal) mobile phone fines. 
                  Camera detection now accounts for the majority of mobile phone citations.
                </p>
                <MockStackedChart title="" height={280} />
              </div>
            </div>
            <InsightCard text="Camera detection now accounts for the majority of mobile phone fines. Police-issued fines have stayed relatively flat, showing enforcement capacity has not increased — only the detection method changed." />
          </section>

          {/* Charts 3 & 4: Age group and location breakdown (two columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart 3: Age group */}
            <section>
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-2xl font-bold text-navy">Fines by Age Group</h2>
                    <span className="text-xs font-bold text-white bg-yellow-500 px-2 py-1 rounded">2023–2024 only</span>
                  </div>
                  <p className="text-grey-dark text-sm mb-6">
                    Grouped bar chart (X: Age groups 0–16, 17–25, 26–39, 40–64, 65+; Y: Fines in thousands). 
                    Four bars per age group showing breakdown by offence type.
                  </p>
                  <MockBarChart title="" height={300} />
                </div>
              </div>
              <InsightCard text="The 40–64 age group receives the most fines by volume. However, the 17–25 group has the highest share of mobile phone fines relative to its total, suggesting targeted phone use behaviour." />
            </section>

            {/* Chart 4: Location type */}
            <section>
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-2xl font-bold text-navy">Fines by Location Type</h2>
                    <span className="text-xs font-bold text-white bg-yellow-500 px-2 py-1 rounded">2023–2024 only</span>
                  </div>
                  <p className="text-grey-dark text-sm mb-6">
                    Horizontal bar chart (Y: Location type; X: Total fines in thousands) showing distribution across 
                    Major Cities, Inner Regional, Outer Regional, Remote, and Very Remote areas.
                  </p>
                  <MockBarChart title="" height={300} />
                </div>
              </div>
              <InsightCard text="Major Cities account for the vast majority of fines in absolute numbers. However, when adjusted for population, regional and remote areas show disproportionate enforcement of speed offences." />
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
