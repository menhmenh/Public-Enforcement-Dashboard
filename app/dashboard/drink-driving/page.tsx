import Header from '@/components/Header'
import PageHeader from '@/components/PageHeader'
import FilterBar from '@/components/FilterBar'
import InsightCard from '@/components/InsightCard'
import Footer from '@/components/Footer'
import StatsCard from '@/components/StatsCard'
import ChartPlaceholder from '@/components/ChartPlaceholder'

export const metadata = {
  title: 'Drink Driving | Road Safety Enforcement',
  description: 'Positive breath test trends, dual-axis context, and 2023–2024 location breakdowns.',
}

export default function DrinkDrivingDashboardPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="Drink Driving"
        subtitle="Positive breath test trends and jurisdiction comparisons"
        insight="Drink-driving detection has declined in most states since 2008, but the Northern Territory remains a persistent outlier."
      />
      <main className="pb-10 pt-44">
        <FilterBar variant="breath" />

        <div className="content-wrap py-7">
          <section className="mb-7 fade-in grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatsCard label="Total positive breath tests" value="52,847" bgColor="teal" />
            <StatsCard label="National average positivity rate" value="0.5" unit="%" bgColor="surface" />
            <StatsCard label="Highest rate in selected year" value="NT" bgColor="amber" />
            <StatsCard label="Change vs 5 years prior" value="-0.3" unit="%" bgColor="navy" />
          </section>

          <section className="mb-7 fade-in">
            <h2 className="mb-3 font-display text-2xl font-bold text-text-primary">Positivity rate by state over time</h2>
            <InsightCard text="The Northern Territory consistently shows a positivity rate 4–6 times higher than New South Wales and Victoria. Most states have improved since 2008, but the NT trend has not declined at the same rate, suggesting structural differences in enforcement or driver behaviour." />
            <ChartPlaceholder
              type="Multi-series line chart"
              height={340}
              note="X: Year. Y: positivity rate %. Up to 8 state lines with NT highlighted as outlier. Annotation: NT highest nationally."
            />
          </section>

          <section className="mb-7 fade-in">
            <h2 className="mb-3 font-display text-2xl font-bold text-text-primary">Positive tests vs tests conducted</h2>
            <InsightCard text="The number of breath tests conducted fell sharply in 2020–2021 due to COVID-19 restrictions, but the positivity rate rose during the same period, suggesting those who were still driving were more likely to be over the limit." />
            <ChartPlaceholder
              type="Dual-axis chart (bar + line)"
              height={320}
              note="Bars (left axis): tests conducted. Line (right axis): positivity %. Includes explicit in-chart legend and aligned axis labels."
            />
          </section>

          <section className="fade-in">
            <div className="mb-2 inline-flex rounded-full border border-[#b9d4ee] bg-[#eaf4ff] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
              2023–2024
            </div>
            <h2 className="mb-3 font-display text-2xl font-bold text-text-primary">Positive tests by location type</h2>
            <InsightCard text="Very Remote areas show a detection rate per test far higher than Major Cities despite lower absolute counts. This means fewer people are being tested in remote areas, but those who are tested are significantly more likely to be over the limit." />
            <ChartPlaceholder
              type="Grouped bar chart"
              height={260}
              note="X: location type. Y: positive tests. Grouped bars for 2023 and 2024 with annotation labels: 1 in X tested positive."
            />
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
