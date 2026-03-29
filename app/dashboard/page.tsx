import Header from '@/components/Header'
import Link from 'next/link'

export const metadata = {
  title: 'Dashboard - Public Enforcement',
  description: 'Interactive dashboard for road enforcement data analysis',
}

export default function Dashboard() {
  const chapters = [
    {
      number: 1,
      title: 'Fines',
      href: '/dashboard/fines',
      borderColor: 'border-navy',
      bgColor: 'bg-white',
      description: 'Speed and mobile phone enforcement dominate by volume. Mobile phone fines have grown sharply since 2012 when camera detection became widespread. Age data from 2023 reveals which groups are caught most often.',
      stats: ['385,462 Total Fines (2023)', '142,531 Mobile Phone Fines', '198,247 Speed Fines']
    },
    {
      number: 2,
      title: 'Drink Driving',
      href: '/dashboard/drink-driving',
      borderColor: 'border-teal',
      bgColor: 'bg-grey',
      description: 'The positivity rate has fallen significantly in most states since 2008, but some states and remote regions still show rates several times higher than the national average. The outcome rate shows how often detections lead to formal enforcement action.',
      stats: ['9,359,163 Tests (2023)', '0.5% Positive Rate', '87% Outcome Rate']
    },
    {
      number: 3,
      title: 'Drug Detection',
      href: '/dashboard/drug-detection',
      borderColor: 'border-navy-light',
      bgColor: 'bg-white',
      description: 'Cannabis was the dominant detection in early years. Methylamphetamine has grown steadily as a proportion of positive tests. The 2023 age and location breakdown shows that detection is not evenly distributed across the population or geography.',
      stats: ['324,156 Drug Tests (2023)', '35% Cannabis Detection', '62% Methamphetamine Detection']
    }
  ]

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Page Header */}
        <section className="bg-navy text-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-3xl font-bold">Enforcement Analytics Dashboard</h1>
            <p className="text-teal-light mt-2">Data-driven insights into road enforcement trends and patterns across Australia</p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-grey-dark mb-12 text-lg leading-relaxed max-w-3xl">
              Select a chapter below to explore comprehensive visualizations, apply filters by jurisdiction and year, 
              and discover detailed insights into Australia&apos;s road enforcement data from 2008 to 2024.
            </p>

            {/* Chapter Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {chapters.map((chapter) => (
                <Link
                  key={chapter.number}
                  href={chapter.href}
                  className={`block ${chapter.bgColor} border-l-4 ${chapter.borderColor} p-8 rounded shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className="mb-6">
                    <span className="text-sm font-bold text-grey-dark uppercase tracking-wide">Chapter {chapter.number}</span>
                    <h2 className="text-2xl font-bold text-navy mt-2">{chapter.title}</h2>
                  </div>

                  <p className="text-grey-dark leading-relaxed mb-6">
                    {chapter.description}
                  </p>

                  {/* Quick Stats */}
                  <div className="space-y-2 mb-6 pb-6 border-t border-grey-dark/20">
                    {chapter.stats.map((stat, idx) => (
                      <p key={idx} className="text-sm text-navy font-semibold pt-2">
                        {stat}
                      </p>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="text-navy font-bold flex items-center gap-2">
                    View Dashboard
                    <span className="text-xl">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-grey-dark text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="mb-2">Data Source: Bureau of Infrastructure and Transport Research Economics (BITRE)</p>
            <p className="text-sm opacity-75">Public Enforcement Dashboard © 2024</p>
          </div>
        </footer>
      </main>
    </>
  )
}
