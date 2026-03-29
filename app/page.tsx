import Header from '@/components/Header'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Public Enforcement Dashboard</h1>
            <p className="text-lg text-teal-light max-w-2xl">
              Comprehensive insights into Australian road enforcement trends from 2008 to 2024
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-grey">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy mb-8">About This Dataset</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-navy mb-4">Purpose</h3>
                <p className="text-grey-dark leading-relaxed">
                  This dashboard presents aggregated public data on road enforcement activities across Australia. 
                  It enables exploration of trends in fines, drink driving enforcement, and drug detection over 16 years, 
                  helping inform policy decisions and public awareness.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-4">Data Coverage</h3>
                <p className="text-grey-dark leading-relaxed">
                  Data sourced from the Bureau of Infrastructure and Transport Research Economics (BITRE) covers 
                  enforcement activities across all Australian jurisdictions. The dataset spans from 2008 to 2024, 
                  with detailed demographic and geographic breakdowns available from 2023 onwards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dataset Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy mb-12">Explore the Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Chapter 1 */}
              <div className="border-l-4 border-navy p-6 bg-grey">
                <h3 className="text-2xl font-bold text-navy mb-4">Chapter 1</h3>
                <p className="font-bold text-navy mb-2">Fines</p>
                <p className="text-grey-dark mb-4 leading-relaxed">
                  Speed and mobile phone enforcement dominate by volume. Mobile phone fines have grown sharply 
                  since 2012 when camera detection became widespread. Age data from 2023 reveals which groups 
                  are caught most often.
                </p>
              </div>

              {/* Chapter 2 */}
              <div className="border-l-4 border-teal p-6 bg-grey">
                <h3 className="text-2xl font-bold text-navy mb-4">Chapter 2</h3>
                <p className="font-bold text-navy mb-2">Drink Driving</p>
                <p className="text-grey-dark mb-4 leading-relaxed">
                  The positivity rate has fallen significantly in most states since 2008, but some states 
                  and remote regions still show rates several times higher than the national average. The outcome 
                  rate shows how often detections lead to formal enforcement action.
                </p>
              </div>

              {/* Chapter 3 */}
              <div className="border-l-4 border-navy-light p-6 bg-grey">
                <h3 className="text-2xl font-bold text-navy mb-4">Chapter 3</h3>
                <p className="font-bold text-navy mb-2">Drug Detection</p>
                <p className="text-grey-dark mb-4 leading-relaxed">
                  Cannabis was the dominant detection in early years. Methylamphetamine has grown steadily 
                  as a proportion of positive tests. The 2023 age and location breakdown shows that detection 
                  is not evenly distributed across the population or geography.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-navy text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">View the Full Dashboard</h2>
            <p className="text-lg text-teal-light mb-8 max-w-2xl mx-auto">
              Explore interactive visualizations, apply filters by jurisdiction and year, and dive into detailed insights.
            </p>
            <Link 
              href="/dashboard" 
              className="inline-block bg-teal hover:bg-teal-light text-navy font-bold py-3 px-8 rounded transition"
            >
              Go to Dashboard
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-grey-dark text-white py-8">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="mb-2">Data Source: Bureau of Infrastructure and Transport Research Economics (BITRE)</p>
            <p className="text-sm opacity-75">Public Enforcement Dashboard © 2024</p>
          </div>
        </footer>
      </main>
    </>
  )
}
