import Link from 'next/link'

export const metadata = {
  title: 'Road Safety Enforcement in Australia - Public Enforcement Dashboard',
  description: 'Exploring 16 years of police enforcement data from 2008–2024. An interactive visualisation of fines, drink-driving, and drug detection across all Australian states and territories.',
}

export default function Home() {
  const team = [
    {
      name: 'Team Member One',
      role: 'Data Cleaning & EDA',
      description: 'Data preparation and exploratory analysis'
    },
    {
      name: 'Team Member Two',
      role: 'Visualisation & Frontend',
      description: 'Dashboard design and interactive components'
    },
    {
      name: 'Team Member Three',
      role: 'Backend & Integration',
      description: 'Data pipeline and backend architecture'
    }
  ]

  const datasets = [
    { name: 'Fines & Offences', rows: '312,847', dimensions: 'Year, State, Offence Type, Amount' },
    { name: 'Drink Driving Tests', rows: '9,359,163', dimensions: 'Year, State, Tests, Positive Rate' },
    { name: 'Drug Detection', rows: '324,156', dimensions: 'Year, State, Substance Type, Count' }
  ]

  const steps = [
    {
      number: 1,
      title: 'Collected',
      description: 'Downloaded 4 XLSX files from official BITRE portal. Confirmed 2008–2024 coverage, 8 jurisdictions.'
    },
    {
      number: 2,
      title: 'Cleaned',
      description: 'Jupyter notebook (31 cells). Standardised column names, shortened location labels, flagged aggregate rows, converted Yes/No drug columns to boolean, derived positivity rate.'
    },
    {
      number: 3,
      title: 'Visualised',
      description: 'React + D3.js interactive dashboard. Three data pages with linked filters, insight callouts, and responsive design.'
    }
  ]

  const chapters = [
    {
      title: 'Fines & Offences',
      href: '/dashboard/fines',
      description: 'Explore 16 years of speed, mobile phone, seatbelt, and unlicensed driving fines across Australia.'
    },
    {
      title: 'Drink Driving',
      href: '/dashboard/drink-driving',
      description: 'Compare positive breath test rates across states and see how drink-driving has declined since 2008.'
    },
    {
      title: 'Drug Detection',
      href: '/dashboard/drug-detection',
      description: 'Discover how substance detection has shifted — from cannabis in 2008 to methylamphetamine today.'
    }
  ]

  return (
    <main className="bg-navy">
      {/* Section A: Hero Banner */}
      <section className="relative overflow-hidden py-20" style={{
        background: 'linear-gradient(to right, #0D2B55, #0F3460)'
      }}>
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Road Safety Enforcement in Australia</h1>
          <p className="text-xl italic text-teal-light mb-6">
            Exploring 16 years of police enforcement data · 2008–2024
          </p>
          <p className="text-base text-grey-dark mb-12 max-w-2xl mx-auto">
            An interactive visualisation of fines, drink-driving, and drug detection across all Australian states and territories.
          </p>
          
          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-navy-light bg-opacity-60 rounded p-6">
              <p className="text-4xl font-bold text-teal mb-2">12,179</p>
              <p className="text-grey-dark text-sm">Total Rows in Dataset</p>
            </div>
            <div className="bg-navy-light bg-opacity-60 rounded p-6">
              <p className="text-4xl font-bold text-teal mb-2">16</p>
              <p className="text-grey-dark text-sm">Years Covered</p>
            </div>
            <div className="bg-navy-light bg-opacity-60 rounded p-6">
              <p className="text-4xl font-bold text-teal mb-2">8</p>
              <p className="text-grey-dark text-sm">States & Territories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section B: Team */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-teal mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-navy-light bg-opacity-60 rounded p-6">
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-teal-light text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-grey-dark text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section C: Dataset */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-12">About the Data</h2>
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="col-span-2">
              <p className="text-grey-dark leading-relaxed mb-6">
                This project analysed aggregated public data from the Bureau of Infrastructure and Transport Research Economics (BITRE). 
                The dataset encompasses road enforcement activities across all 8 Australian states and territories, spanning from 2008 to 2024.
              </p>
              <p className="text-grey-dark leading-relaxed">
                A significant enhancement came with 2023 data: the inclusion of age group and geographic location breakdowns. 
                These new dimensions allow for deeper analysis of enforcement patterns, revealing disparities across demographic and geographic segments.
              </p>
            </div>
            <div className="bg-navy-light bg-opacity-60 rounded p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-grey-dark">
                    <th className="text-left pb-3 text-teal-light font-semibold">Dataset</th>
                    <th className="text-left pb-3 text-teal-light font-semibold">Rows</th>
                    <th className="text-left pb-3 text-teal-light font-semibold">Dimensions</th>
                  </tr>
                </thead>
                <tbody>
                  {datasets.map((ds, idx) => (
                    <tr key={idx} className="border-b border-grey-dark border-opacity-30">
                      <td className="py-3 text-white text-xs">{ds.name}</td>
                      <td className="py-3 text-teal text-xs font-semibold">{ds.rows}</td>
                      <td className="py-3 text-grey-dark text-xs">{ds.dimensions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-teal"></div>
              <span className="text-sm text-grey-dark">React</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-teal"></div>
              <span className="text-sm text-grey-dark">D3.js</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-teal"></div>
              <span className="text-sm text-grey-dark">Node.js</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section D: How We Used the Data */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-teal mb-12 text-center">How We Processed the Data</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-navy-light bg-opacity-60 rounded p-8">
                  <div className="w-12 h-12 rounded-full bg-teal text-navy flex items-center justify-center font-bold text-lg mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-grey-dark text-sm leading-relaxed">{step.description}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/3 text-teal text-2xl font-bold">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section E: Navigate */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Explore the Data</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chapters.map((chapter, idx) => (
              <Link
                key={idx}
                href={chapter.href}
                className="block bg-navy-light bg-opacity-60 rounded overflow-hidden border-l-4 border-teal hover:shadow-lg transition"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{chapter.title}</h3>
                  <p className="text-grey-dark text-sm leading-relaxed mb-6">{chapter.description}</p>
                  <div className="inline-block bg-teal text-navy font-bold py-2 px-6 rounded hover:bg-teal-light transition">
                    Explore
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-grey-dark text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="mb-2">Data Source: Bureau of Infrastructure and Transport Research Economics (BITRE)</p>
          <p className="text-sm opacity-75">Road Safety Enforcement Dashboard © 2024</p>
        </div>
      </footer>
    </main>
  )
}
