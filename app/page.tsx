import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StatsCard from '@/components/StatsCard'

export const metadata = {
  title: 'Road Safety Enforcement in Australia',
  description:
    'Exploring 16 years of police enforcement data (2008–2024) across all Australian states and territories.',
}

const team = [
  {
    name: 'Mai Minh Phuong Anh - 104997232',
  },
  {
    name: 'Nguyen Ba Chanh - 104813299',
  },
]

const datasets = [
  { name: 'Fines & Offences', rows: '12,179', dimensions: 'Year, State, Offence, Age, Location' },
  { name: 'Breath Tests', rows: '1,326', dimensions: 'Year, State, Tests, Positive, Rate' },
  { name: 'Drug Detection', rows: '7,982', dimensions: 'Year, State, Substance, Age, Location' },
]

const navigationCards = [
  {
    title: 'Fines & Offences',
    href: '/dashboard/fines',
    description:
      'Explore 16 years of speed, mobile phone, seatbelt, and unlicensed driving fines across Australia.',
  },
  {
    title: 'Drink Driving',
    href: '/dashboard/drink-driving',
    description:
      'Compare positive breath test rates across states and see how drink-driving has declined since 2008.',
  },
  {
    title: 'Drug Detection',
    href: '/dashboard/drug-detection',
    description:
      'Discover how substance detection has shifted — from cannabis in 2008 to methylamphetamine today.',
  },
]

const steps = [
  {
    step: '1',
    title: 'Collected',
    text: 'Downloaded four XLSX files from the BITRE portal and verified 2008–2024 coverage across all jurisdictions.',
  },
  {
    step: '2',
    title: 'Cleaned',
    text: 'Standardised names, normalised categorical labels, converted columns, and derived positivity measures in Jupyter.',
  },
  {
    step: '3',
    title: 'Visualised',
    text: 'Built a React + D3 dashboard with linked page filters, annotations, and responsive chart layouts.',
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pb-10 pt-16">
        <section className="fade-in border-b border-border bg-gradient-to-br from-slate-50 to-white py-20">
          <div className="content-wrap text-center">
            <h1 className="font-display text-4xl font-bold text-navy md:text-5xl">
              Road Safety Enforcement in Australia
            </h1>
            <p className="mt-3 text-xl italic text-teal">
              Exploring 16 years of police enforcement data · 2008–2024
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-base text-slate-600">
              An interactive visualisation of fines, drink-driving, and drug detection across all Australian states and territories.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <StatsCard label="Total Rows in Dataset" value="22,017" bgColor="surface" align="center" />
              <StatsCard label="Years Covered" value="16" bgColor="surface" align="center" />
              <StatsCard label="States & Territories" value="8" bgColor="surface" align="center" />
            </div>
          </div>
        </section>

        <section className="fade-in py-14">
          <div className="content-wrap">
            <h2 className="mb-6 text-center font-display text-3xl font-bold text-navy">Our Team</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {team.map((member) => (
                <article key={member.name} className="surface-panel p-5">
                  <h3 className="font-display text-xl font-bold text-navy">{member.name}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="fade-in py-14">
          <div className="content-wrap">
            <h2 className="mb-6 font-display text-3xl font-bold text-navy">About the Data</h2>
            <div className="grid gap-6 lg:grid-cols-5">
              <div className="space-y-4 lg:col-span-3">
                <p className="text-slate-600">
                  This project uses official BITRE road enforcement data covering every Australian state and territory from 2008 through 2024.
                </p>
                <p className="text-slate-600">
                  The 2023 update introduced age-group and location-type detail, making it possible to move beyond national totals into more specific demographic and geographic patterns.
                </p>
              </div>
              <div className="surface-panel overflow-hidden lg:col-span-2">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-border bg-slate-50">
                      <th className="px-3 py-2 text-navy">Dataset</th>
                      <th className="px-3 py-2 text-navy">Rows</th>
                      <th className="px-3 py-2 text-navy">Key dimensions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datasets.map((dataset) => (
                      <tr key={dataset.name} className="border-b border-border/60">
                        <td className="px-3 py-2 text-navy">{dataset.name}</td>
                        <td className="px-3 py-2 text-teal">{dataset.rows}</td>
                        <td className="px-3 py-2 text-slate-600">{dataset.dimensions}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap gap-3">
              {['React', 'D3.js', 'Node.js'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wider text-teal"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="fade-in py-14">
          <div className="content-wrap">
            <h2 className="mb-7 text-center font-display text-3xl font-bold text-navy">How We Processed the Data</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {steps.map((step) => (
                <article key={step.step} className="relative surface-panel p-5">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-teal font-display text-lg font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="fade-in py-14">
          <div className="content-wrap">
            <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy">Explore the Data</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {navigationCards.map((card) => (
                <Link key={card.href} href={card.href} className="surface-panel border-l-4 border-l-teal p-5 transition hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="font-display text-2xl font-bold text-navy">{card.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{card.description}</p>
                  <span className="mt-5 inline-flex items-center rounded-md bg-teal px-4 py-2 text-sm font-semibold text-white">
                    Explore
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
