import Header from '@/components/Header'
import PageHeader from '@/components/PageHeader'
import FilterBar from '@/components/FilterBar'
import InsightCard from '@/components/InsightCard'
import Footer from '@/components/Footer'
import ChartPlaceholder from '@/components/ChartPlaceholder'

export const metadata = {
  title: 'Fines & Offences | Road Safety Enforcement',
  description: 'Road safety fines trends, detection method shifts, and 2023–2024 breakdowns by age and location.',
}

export default function FinesDashboardPage() {
  return (
    <>
      <Header />
      <PageHeader
        title="Fines & Offences"
        subtitle="Road safety fines trends by offence type, age group, and location"
        insight="Speed offences account for over 85% of all fines — but mobile phone fines have tripled since 2012."
      />
      <main className="pb-10 pt-44">
        <FilterBar variant="fines" />

        <div className="content-wrap py-7">
          <section className="mb-7 fade-in">
            <h2 className="mb-3 font-display text-2xl font-bold text-text-primary">Fines over time</h2>
            <InsightCard text="Speed fines are consistently the highest-volume offence and peaked at over 5 million in 2021. Mobile phone fines were negligible before 2012 but have grown nearly every year since camera detection was introduced, reaching over 400,000 in 2022." />
            <ChartPlaceholder
              type="Multi-series line chart"
              height={320}
              note="X: Year (2008–2024), Y: total fines. Series: Speed, Mobile Phone, Seatbelt, Unlicensed. Annotation at 2012: Camera detection introduced."
            />
          </section>

          <section className="mb-7 fade-in">
            <h2 className="mb-3 font-display text-2xl font-bold text-text-primary">Mobile phone fines by detection method</h2>
            <InsightCard text="Camera detection now accounts for the majority of mobile phone fines. Police-issued fines have stayed relatively flat, showing enforcement capacity has not increased — only the detection method changed." />
            <ChartPlaceholder
              type="Stacked bar chart"
              height={280}
              note="Stacked segments: Police issued vs Camera. X: Year. Y: mobile phone fines. Focus on post-2012 composition shift."
            />
          </section>

          <section className="grid gap-6 fade-in lg:grid-cols-2">
            <article>
              <div className="mb-2 inline-flex rounded-full border border-[#b9d4ee] bg-[#eaf4ff] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
                2023–2024
              </div>
              <h2 className="mb-3 font-display text-2xl font-bold text-text-primary">Fines by age group</h2>
              <InsightCard text="The 40–64 age group receives the most fines by volume. However, the 17–25 group has the highest share of mobile phone fines relative to its total, suggesting targeted phone use behaviour." />
              <ChartPlaceholder
                type="Grouped bar chart"
                height={300}
                note="X: Age group (0–16, 17–25, 26–39, 40–64, 65+). Y: fines. Grouped by offence type with shared offence palette."
              />
            </article>

            <article>
              <div className="mb-2 inline-flex rounded-full border border-[#b9d4ee] bg-[#eaf4ff] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
                2023–2024
              </div>
              <h2 className="mb-3 font-display text-2xl font-bold text-text-primary">Fines by location type</h2>
              <InsightCard text="Major Cities account for the vast majority of fines in absolute numbers. However, when adjusted for population, regional and remote areas show disproportionate enforcement of speed offences." />
              <ChartPlaceholder
                type="Horizontal bar chart"
                height={300}
                note="Y: Location type. X: total fines. Sorted descending with end labels for share of total fines."
              />
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
