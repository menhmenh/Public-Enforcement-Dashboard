import Header from '@/components/Header'
import FilterBar from '@/components/FilterBar'
import StatsCard from '@/components/StatsCard'
import MockLineChart from '@/components/MockLineChart'
import MockBarChart from '@/components/MockBarChart'
import MockStackedChart from '@/components/MockStackedChart'

export const metadata = {
  title: 'Dashboard - Public Enforcement',
  description: 'Interactive dashboard for road enforcement data analysis',
}

export default function Dashboard() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Page Header */}
        <section className="bg-navy text-white py-8">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-3xl font-bold">Enforcement Analytics Dashboard</h1>
            <p className="text-teal-light mt-2">Data-driven insights into road enforcement trends and patterns</p>
          </div>
        </section>

        {/* Chapter 1: Fines */}
        <section className="border-t-4 border-navy py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-navy mb-2">Chapter 1: Fines</h2>
              <p className="text-grey-dark">
                Speed and mobile phone enforcement dominate by volume. Mobile phone fines have grown sharply 
                since 2012 when camera detection became widespread. Age data from 2023 reveals which groups are caught most often.
              </p>
            </div>

            <FilterBar title="Fines" />

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
              <StatsCard label="Total Fines (2023)" value="385,462" bgColor="navy" />
              <StatsCard label="Mobile Phone Fines" value="142,531" bgColor="teal" />
              <StatsCard label="Speed Fines" value="198,247" bgColor="navy" />
              <StatsCard label="Other Violations" value="44,684" bgColor="grey" />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              <MockLineChart title="Fines Over Time by Type" height={350} />
              <MockBarChart title="Fines by Jurisdiction (2023)" height={350} />
            </div>

            {/* Additional Chart */}
            <div className="mt-6">
              <MockLineChart title="Mobile Phone Fines Growth Since 2012" height={300} />
            </div>
          </div>
        </section>

        {/* Chapter 2: Drink Driving */}
        <section className="border-t-4 border-teal py-12 bg-grey">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-navy mb-2">Chapter 2: Drink Driving</h2>
              <p className="text-grey-dark">
                The positivity rate has fallen significantly in most states since 2008, but some states 
                and remote regions still show rates several times higher than the national average. The outcome 
                rate shows how often detections lead to formal enforcement action.
              </p>
            </div>

            <FilterBar title="Drink Driving" />

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
              <StatsCard label="Total Tests (2023)" value="9,359,163" bgColor="teal" />
              <StatsCard label="Positive Rate" value="0.5" unit="%" bgColor="navy" />
              <StatsCard label="Outcome Rate" value="87" unit="%" bgColor="teal" />
              <StatsCard label="Formalised Actions" value="52,847" bgColor="grey" />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              <MockLineChart title="Breath Tests Conducted vs Positive Rate" height={350} />
              <MockBarChart title="Positive Results by Jurisdiction (2023)" height={350} />
            </div>

            {/* Additional Chart */}
            <div className="mt-6">
              <MockLineChart title="Positivity Rate Trends by State" height={300} />
            </div>
          </div>
        </section>

        {/* Chapter 3: Drug Detection */}
        <section className="border-t-4 border-navy-light py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-navy mb-2">Chapter 3: Drug Detection</h2>
              <p className="text-grey-dark">
                Cannabis was the dominant detection in early years. Methylamphetamine has grown steadily 
                as a proportion of positive tests. The 2023 age and location breakdown shows that detection 
                is not evenly distributed across the population or geography.
              </p>
            </div>

            <FilterBar title="Drug Detection" />

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
              <StatsCard label="Total Drug Tests (2023)" value="324,156" bgColor="navy" />
              <StatsCard label="Cannabis Detection" value="35" unit="%" bgColor="teal" />
              <StatsCard label="Methamphetamine Detection" value="62" unit="%" bgColor="navy" />
              <StatsCard label="Other Substances" value="3" unit="%" bgColor="grey" />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              <MockStackedChart title="Drug Detection Composition by Year" height={350} />
              <MockBarChart title="Drug Tests by Jurisdiction (2023)" height={350} />
            </div>

            {/* Additional Chart */}
            <div className="mt-6">
              <MockLineChart title="Methamphetamine Detection Growth" height={300} />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-grey-dark text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="mb-2">Data Source: Bureau of Infrastructure and Transport Research Economics (BITRE)</p>
            <p className="text-sm opacity-75">All charts display mock data for demonstration purposes</p>
            <p className="text-sm opacity-75 mt-4">Public Enforcement Dashboard © 2024</p>
          </div>
        </footer>
      </main>
    </>
  )
}
