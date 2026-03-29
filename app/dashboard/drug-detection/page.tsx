import Header from '@/components/Header'
import Link from 'next/link'
import FilterBar from '@/components/FilterBar'
import StatsCard from '@/components/StatsCard'
import MockLineChart from '@/components/MockLineChart'
import MockBarChart from '@/components/MockBarChart'
import MockStackedChart from '@/components/MockStackedChart'

export const metadata = {
  title: 'Chapter 3: Drug Detection - Public Enforcement Dashboard',
  description: 'Explore drug detection data including substance breakdown and trends',
}

export default function DrugDetectionDashboard() {
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
            <h1 className="text-3xl font-bold">Chapter 3: Drug Detection</h1>
            <p className="text-teal-light mt-2">Drug test trends and substance analysis from 2008 to 2024</p>
          </div>
        </section>

        {/* Description Section */}
        <section className="bg-grey-light py-8 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-grey-dark leading-relaxed max-w-3xl">
              Cannabis was the dominant detection in early years. Methylamphetamine has grown steadily 
              as a proportion of positive tests. The 2023 age and location breakdown shows that detection 
              is not evenly distributed across the population or geography. Use the filters below to 
              explore trends by jurisdiction and year.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-white py-8 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <FilterBar title="Drug Detection" />
          </div>
        </section>

        {/* Key Statistics */}
        <section className="bg-white py-12 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-navy mb-8">Key Statistics (2023)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard label="Total Drug Tests" value="324,156" bgColor="navy" />
              <StatsCard label="Cannabis Detection" value="35" unit="%" bgColor="teal" />
              <StatsCard label="Methamphetamine Detection" value="62" unit="%" bgColor="navy" />
              <StatsCard label="Other Substances" value="3" unit="%" bgColor="grey-dark" />
            </div>
          </div>
        </section>

        {/* Chart Section 1: Substance Composition Over Time */}
        <section className="bg-white py-12 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-2">Drug Detection Composition by Year</h2>
              <p className="text-grey-dark">
                Stacked bar chart showing how the proportion of each detected substance has shifted from 2008 to 2024. 
                Cannabis has declined from dominance while methylamphetamine has grown steadily as a share of positive tests.
              </p>
            </div>
            <MockStackedChart title="" height={400} />
          </div>
        </section>

        {/* Chart Section 2: Jurisdiction Comparison */}
        <section className="bg-grey py-12 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-2">Drug Tests by Jurisdiction (2023)</h2>
              <p className="text-grey-dark">
                Comparison of total positive drug tests across Australian jurisdictions. 
                Larger states conduct more tests due to higher population and enforcement resources.
              </p>
            </div>
            <MockBarChart title="" height={400} />
          </div>
        </section>

        {/* Chart Section 3: Methamphetamine Growth */}
        <section className="bg-white py-12 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-2">Methamphetamine Detection Growth</h2>
              <p className="text-grey-dark">
                Trend line showing steady growth in methamphetamine as a proportion of positive drug tests. 
                From approximately 20% in 2008 to 62% by 2024, reflecting changing drug use patterns.
              </p>
            </div>
            <MockLineChart title="" height={400} />
          </div>
        </section>

        {/* Chart Section 4: Cannabis Decline */}
        <section className="bg-grey py-12 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-2">Cannabis Detection Trend</h2>
              <p className="text-grey-dark">
                Historical trend showing cannabis as the dominant detection in early years, now declining 
                to 35% of positive tests as other substances become more prevalent.
              </p>
            </div>
            <MockLineChart title="" height={400} />
          </div>
        </section>

        {/* Chart Section 5: Age Group Breakdown */}
        <section className="bg-white py-12 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-2">Drug Detections by Age Group (2023)</h2>
              <p className="text-grey-dark">
                Age-based analysis showing which demographic groups have the highest detection rates. 
                Available from 2023 onwards, this data reveals uneven distribution across age groups.
              </p>
            </div>
            <MockBarChart title="" height={400} />
          </div>
        </section>

        {/* Chart Section 6: Location Distribution */}
        <section className="bg-grey py-12 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-2">Drug Detections by Location Type (2023)</h2>
              <p className="text-grey-dark">
                Breakdown by remoteness classification (major cities, regional, remote, very remote) showing 
                that detection is not evenly distributed across geography. Different substances predominate in different regions.
              </p>
            </div>
            <MockBarChart title="" height={400} />
          </div>
        </section>

        {/* Chart Section 7: Substance Comparison */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-2">Detection Rates by Substance</h2>
              <p className="text-grey-dark">
                Comparative analysis of detection trends for major substances: cannabis, methamphetamine, 
                amphetamine, cocaine, and other drugs from 2008 to 2024.
              </p>
            </div>
            <MockLineChart title="" height={400} />
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
