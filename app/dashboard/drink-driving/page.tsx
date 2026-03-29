import Header from '@/components/Header'
import Link from 'next/link'
import FilterBar from '@/components/FilterBar'
import StatsCard from '@/components/StatsCard'
import MockLineChart from '@/components/MockLineChart'
import MockBarChart from '@/components/MockBarChart'

export const metadata = {
  title: 'Chapter 2: Drink Driving - Public Enforcement Dashboard',
  description: 'Explore drink driving enforcement data including positivity rates and outcomes',
}

export default function DrinkDrivingDashboard() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Breadcrumb and Header */}
        <section className="bg-navy text-white py-8">
          <div className="max-w-7xl mx-auto px-6">
            <Link href="/dashboard" className="text-teal-light hover:text-teal text-sm font-semibold mb-4 inline-block">
              ← Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold">Chapter 2: Drink Driving</h1>
            <p className="text-teal-light mt-2">Breath testing and positivity rate trends from 2008 to 2024</p>
          </div>
        </section>

        {/* Description Section */}
        <section className="bg-grey-light py-8 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-grey-dark leading-relaxed max-w-3xl">
              The positivity rate has fallen significantly in most states since 2008, but some states 
              and remote regions still show rates several times higher than the national average. The outcome 
              rate shows how often detections lead to formal enforcement action. Use the filters below to 
              explore trends by jurisdiction and year.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-white py-8 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <FilterBar title="Drink Driving" />
          </div>
        </section>

        {/* Key Statistics */}
        <section className="bg-white py-12 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-navy mb-8">Key Statistics (2023)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard label="Total Tests Conducted" value="9,359,163" bgColor="teal" />
              <StatsCard label="Positive Rate" value="0.5" unit="%" bgColor="navy" />
              <StatsCard label="Outcome Rate" value="87" unit="%" bgColor="teal" />
              <StatsCard label="Enforcement Actions" value="52,847" bgColor="grey-dark" />
            </div>
          </div>
        </section>

        {/* Chart Section 1: Tests vs Positivity */}
        <section className="bg-white py-12 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-2">Breath Tests Conducted vs Positive Results</h2>
              <p className="text-grey-dark">
                Combined view showing total tests conducted (bar chart) against percentage of positive results (line chart). 
                The declining positivity rate reflects improved road safety culture over 16 years.
              </p>
            </div>
            <MockLineChart title="" height={400} />
          </div>
        </section>

        {/* Chart Section 2: Jurisdiction Positivity */}
        <section className="bg-grey py-12 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-2">Positivity Rate by Jurisdiction (2023)</h2>
              <p className="text-grey-dark">
                Comparison of positive breath test rates across Australian states and territories. 
                Remote regions and some jurisdictions show rates several times higher than the national average.
              </p>
            </div>
            <MockBarChart title="" height={400} />
          </div>
        </section>

        {/* Chart Section 3: Positivity Trend */}
        <section className="bg-white py-12 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-2">Positivity Rate Trends by State</h2>
              <p className="text-grey-dark">
                Long-term trend analysis showing how individual jurisdictions have progressed since 2008. 
                Most states show declining positivity rates, indicating improved road safety outcomes.
              </p>
            </div>
            <MockLineChart title="" height={400} />
          </div>
        </section>

        {/* Chart Section 4: Outcome Rate */}
        <section className="bg-grey py-12 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-2">Outcome Rate Over Time</h2>
              <p className="text-grey-dark">
                Measurement of how often positive breath tests result in formal enforcement action (fines, arrests, or charges). 
                An outcome rate of 87% means enforcement action is taken in most cases.
              </p>
            </div>
            <MockLineChart title="" height={400} />
          </div>
        </section>

        {/* Chart Section 5: Tests by Location Type */}
        <section className="bg-white py-12 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-2">Positivity Rate by Location Type (2023)</h2>
              <p className="text-grey-dark">
                Analysis by remoteness classification showing how positivity rates vary between major cities, 
                regional centers, remote, and very remote areas.
              </p>
            </div>
            <MockBarChart title="" height={400} />
          </div>
        </section>

        {/* Chart Section 6: Age Group Analysis */}
        <section className="bg-grey py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-2">Positive Tests by Age Group (2023)</h2>
              <p className="text-grey-dark">
                Age-based breakdown showing which demographic groups have the highest positivity rates. 
                This data supports targeted intervention and education programs for at-risk age groups.
              </p>
            </div>
            <MockBarChart title="" height={400} />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-grey-dark text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <p className="mb-2">Data Source: Bureau of Infrastructure and Transport Research Economics (BITRE)</p>
                <p className="text-sm opacity-75">Public Enforcement Dashboard © 2024</p>
              </div>
              <Link href="/dashboard" className="text-teal-light hover:text-teal font-semibold">
                Back to Dashboard →
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
