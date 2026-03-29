import Header from '@/components/Header'
import PageHeader from '@/components/PageHeader'
import FilterBar from '@/components/FilterBar'
import InsightCard from '@/components/InsightCard'
import Footer from '@/components/Footer'
import MockLineChart from '@/components/MockLineChart'
import MockBarChart from '@/components/MockBarChart'
import MockStackedChart from '@/components/MockStackedChart'

export const metadata = {
  title: 'Chapter 3: Drug Detection - Road Safety Enforcement',
  description: 'Explore drug detection data including substance breakdown and trends',
}

export default function DrugDetectionDashboard() {
  return (
    <>
      <Header />
      <PageHeader
        title="Drug Detection"
        subtitle="Explore drug detection trends and substance composition"
        insight="Methylamphetamine detections have surpassed cannabis and continue to grow. This represents a significant shift in substance use patterns over 16 years."
      />
      
      <main className="bg-white pt-32 pb-16">
        <FilterBar />

        <div className="max-w-6xl mx-auto px-6">
          {/* Chart 1: Substance composition over time (full width) */}
          <section className="mb-8">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-navy mb-2">Drug Detection Composition by Year</h2>
                <p className="text-grey-dark text-sm mb-6">
                  Stacked bar chart (X: Year 2008–2024; Y: Percentage of detections). Three segments per bar show Cannabis, 
                  Methamphetamine, and Other substances. Shows the dramatic shift in substance composition over the 16-year period.
                </p>
                <MockStackedChart title="" height={320} />
              </div>
            </div>
            <InsightCard text="Methamphetamine detections overtook cannabis around 2016 and have not stopped growing. This shift is consistent across every state except Tasmania, where cannabis remains relatively stable." />
          </section>

          {/* Chart 2: Tests by jurisdiction (full width) */}
          <section className="mb-8">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-navy mb-2">Drug Tests by Jurisdiction</h2>
                <p className="text-grey-dark text-sm mb-6">
                  Bar chart comparing total positive drug tests across all Australian jurisdictions. 
                  Data aggregated across all substances and years in the dataset.
                </p>
                <MockBarChart title="" height={280} />
              </div>
            </div>
            <InsightCard text="NSW and Victoria dominate in absolute numbers due to larger populations and enforcement resources. However, Northern Territory shows the highest detection rate per capita, indicating concentrated enforcement or higher substance use prevalence." />
          </section>

          {/* Charts 3 & 4: Age group and location breakdown (two columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart 3: Age group */}
            <section>
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-2xl font-bold text-navy">Drug Detections by Age Group</h2>
                    <span className="text-xs font-bold text-white bg-yellow-500 px-2 py-1 rounded">2023–2024 only</span>
                  </div>
                  <p className="text-grey-dark text-sm mb-6">
                    Grouped bar chart showing detection counts for each age group. 
                    Breakdown shows how different substances are distributed across age cohorts.
                  </p>
                  <MockBarChart title="" height={300} />
                </div>
              </div>
              <InsightCard text="Younger age groups (17–39) show higher methamphetamine detection rates. Older groups (40+) show more diverse substance patterns. This suggests different substance use preferences by generation." />
            </section>

            {/* Chart 4: Location type */}
            <section>
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-2xl font-bold text-navy">Detections by Location Type</h2>
                    <span className="text-xs font-bold text-white bg-yellow-500 px-2 py-1 rounded">2023–2024 only</span>
                  </div>
                  <p className="text-grey-dark text-sm mb-6">
                    Comparison across location types (Major Cities, Inner Regional, Outer Regional, Remote, Very Remote). 
                    Shows geographic distribution of drug detections.
                  </p>
                  <MockBarChart title="" height={300} />
                </div>
              </div>
              <InsightCard text="Major cities report higher absolute numbers but lower rates per capita. Remote and very remote areas show disproportionately high methamphetamine prevalence, requiring targeted intervention strategies." />
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
