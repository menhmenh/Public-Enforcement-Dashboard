import Header from '@/components/Header'
import Link from 'next/link'
import FilterBar from '@/components/FilterBar'
import StatsCard from '@/components/StatsCard'
import MockLineChart from '@/components/MockLineChart'
import MockBarChart from '@/components/MockBarChart'

export const metadata = {
  title: 'Chapter 1: Fines - Public Enforcement Dashboard',
  description: 'Explore fines enforcement data including speed and mobile phone violations',
}

export default function FinesDashboard() {
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
            <h1 className="text-3xl font-bold">Chapter 1: Fines</h1>
            <p className="text-teal-light mt-2">Speed and mobile phone enforcement trends from 2008 to 2024</p>
          </div>
        </section>

        {/* Description Section */}
        <section className="bg-grey-light py-8 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-grey-dark leading-relaxed max-w-3xl">
              Speed and mobile phone enforcement dominate by volume. Mobile phone fines have grown sharply 
              since 2012 when camera detection became widespread. Age data from 2023 reveals which groups 
              are caught most often. Use the filters below to explore trends by jurisdiction and year.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-white py-8 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <FilterBar title="Fines" />
          </div>
        </section>

        {/* Key Statistics */}
        <section className="bg-white py-12 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-navy mb-8">Key Statistics (2023)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard label="Total Fines Issued" value="385,462" bgColor="navy" />
              <StatsCard label="Mobile Phone Fines" value="142,531" bgColor="teal" />
              <StatsCard label="Speed Fines" value="198,247" bgColor="navy" />
              <StatsCard label="Other Violations" value="44,684" bgColor="grey-dark" />
            </div>
          </div>
        </section>

        {/* Chart Section 1: Fines by Type Over Time */}
        <section className="bg-white py-12 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-2">Fines by Offence Type Over Time</h2>
              <p className="text-grey-dark">
                Trend analysis showing how fines for speed, mobile phone, seatbelt, and unlicensed driving 
                have evolved from 2008 to 2024. Mobile phone fines show significant growth after 2012.
              </p>
            </div>
            <MockLineChart title="" height={400} />
          </div>
        </section>

        {/* Chart Section 2: Jurisdiction Comparison */}
        <section className="bg-grey py-12 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-2">Fines by Jurisdiction (2023)</h2>
              <p className="text-grey-dark">
                Comparison of total fines issued across Australian jurisdictions. NSW and VIC lead in volume 
                due to larger populations and enforcement activity.
              </p>
            </div>
            <MockBarChart title="" height={400} />
          </div>
        </section>

        {/* Chart Section 3: Mobile Phone Growth */}
        <section className="bg-white py-12 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-2">Mobile Phone Fines Growth Since 2012</h2>
              <p className="text-grey-dark">
                Sharp increase in mobile phone fines following widespread adoption of camera detection technology. 
                This represents a 40% increase over the past decade.
              </p>
            </div>
            <MockLineChart title="" height={400} />
          </div>
        </section>

        {/* Chart Section 4: Age Group Breakdown */}
        <section className="bg-grey py-12 border-b border-grey-dark/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-2">Mobile Phone Fines by Age Group (2023)</h2>
              <p className="text-grey-dark">
                Age distribution data available from 2023 onwards shows which demographic groups receive 
                the most mobile phone fines. This supports targeted education and enforcement strategies.
              </p>
            </div>
            <MockBarChart title="" height={400} />
          </div>
        </section>

        {/* Detection Method Breakdown */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-2">Fines by Detection Method</h2>
              <p className="text-grey-dark">
                Comparison between police-issued and camera-detected fines. Camera detection now accounts for 
                the majority of mobile phone and speeding violations.
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
