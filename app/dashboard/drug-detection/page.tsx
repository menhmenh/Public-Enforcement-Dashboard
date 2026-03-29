import Header from '@/components/Header'
import PageHeader from '@/components/PageHeader'
import FilterBar from '@/components/FilterBar'
import InsightCard from '@/components/InsightCard'
import Footer from '@/components/Footer'
import StatsCard from '@/components/StatsCard'
import ChartPlaceholder from '@/components/ChartPlaceholder'

export const metadata = {
  title: 'Drug Detection | Road Safety Enforcement',
  description: 'Substance-mix shifts, meth overtake narrative, and 2023–2024 demographic breakdowns.',
}

export default function DrugDetectionDashboardPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="Drug Detection"
        subtitle="Positive roadside drug trends by substance, age, and location"
        insight="Methylamphetamine has overtaken cannabis as the dominant substance detected in roadside testing."
      />
      <main className="pb-10 pt-44">
        <FilterBar variant="drugs" />

        <div className="content-wrap py-7">
          <section className="mb-7 fade-in grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatsCard label="Total positive drug tests" value="87,243" bgColor="teal" />
            <StatsCard label="Most common in latest year" value="Methylamphetamine" bgColor="amber" />
            <StatsCard label="Meth overtook cannabis" value="2016" bgColor="surface" />
            <StatsCard label="Rate change since 2008" value="142" unit="%" bgColor="navy" />
          </section>

          <section className="mb-7 fade-in">
            <h2 className="mb-3 font-display text-2xl font-bold text-text-primary">Substance mix over time</h2>
            <InsightCard text="Methylamphetamine's share of detections grew from under 10% in 2008 to over 40% in 2024, overtaking cannabis around 2016. This coincides with the nationwide expansion of confirmatory testing which reduced the proportion of unknown substances." />
            <ChartPlaceholder
              type="100% stacked bar chart"
              height={320}
              note="X: Year. Y: 0–100% share. Top segment in amber for methylamphetamine with annotations at 2012 and 2016."
            />
          </section>

          <section className="grid gap-6 fade-in lg:grid-cols-2">
            <article>
              <div className="mb-2 inline-flex rounded-full border border-[#b9d4ee] bg-[#eaf4ff] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
                2023–2024
              </div>
              <h2 className="mb-3 font-display text-2xl font-bold text-text-primary">Drug detections by age group</h2>
              <InsightCard text="The 26–39 age group shows the highest methylamphetamine detections. Cannabis detections are more evenly spread but peak in the 17–25 group, consistent with general population drug use patterns." />
              <ChartPlaceholder
                type="Grouped bar chart"
                height={260}
                note="Top three substances: Amphetamine, Cannabis, Methylamphetamine. X: age group. Y: positive tests."
              />
            </article>

            <article>
              <div className="mb-2 inline-flex rounded-full border border-[#b9d4ee] bg-[#eaf4ff] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
                2023–2024
              </div>
              <h2 className="mb-3 font-display text-2xl font-bold text-text-primary">Detections by location type</h2>
              <InsightCard text="Remote and Very Remote areas show a higher proportion of methylamphetamine relative to cannabis compared to Major Cities. This geographic pattern in substance type may reflect supply chain differences." />
              <ChartPlaceholder
                type="Horizontal stacked bar chart"
                height={260}
                note="Y: location type. X: total positive tests. Stacked by top three substances and sorted by total detections."
              />
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
