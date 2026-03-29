'use client'

import { useEffect, useRef } from 'react'

interface PercentStackedChartProps {
  title: string
  height?: number
}

export default function PercentStackedChart({ title, height = 320 }: PercentStackedChartProps) {
  void title
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const width = svgRef.current.clientWidth || 600
    const padding = { top: 20, right: 30, bottom: 50, left: 60 }
    const innerWidth = width - padding.left - padding.right
    const innerHeight = height - padding.top - padding.bottom

    const data = [
      { year: 2008, amphetamine: 8, cannabis: 78, cocaine: 5, ecstasy: 4, methamphetamine: 5 },
      { year: 2010, amphetamine: 7, cannabis: 72, cocaine: 6, ecstasy: 4, methamphetamine: 11 },
      { year: 2012, amphetamine: 6, cannabis: 65, cocaine: 5, ecstasy: 3, methamphetamine: 21 },
      { year: 2014, amphetamine: 5, cannabis: 60, cocaine: 4, ecstasy: 2, methamphetamine: 29 },
      { year: 2016, amphetamine: 4, cannabis: 48, cocaine: 3, ecstasy: 1, methamphetamine: 44 },
      { year: 2018, amphetamine: 3, cannabis: 38, cocaine: 2, ecstasy: 1, methamphetamine: 56 },
      { year: 2020, amphetamine: 2, cannabis: 32, cocaine: 2, ecstasy: 1, methamphetamine: 63 },
      { year: 2022, amphetamine: 2, cannabis: 27, cocaine: 1, ecstasy: 0, methamphetamine: 70 },
      { year: 2024, amphetamine: 2, cannabis: 22, cocaine: 1, ecstasy: 0, methamphetamine: 75 },
    ]

    const colors = {
      amphetamine: '#001f3f',
      cannabis: '#00bcd4',
      cocaine: '#00d4a8',
      ecstasy: '#757575',
      methamphetamine: '#ffc107'
    }

    const barWidth = innerWidth / data.length * 0.65
    const barSpacing = innerWidth / data.length

    svgRef.current.innerHTML = ''

    const svg = svgRef.current
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    g.setAttribute('transform', `translate(${padding.left},${padding.top})`)

    // Draw grid lines
    for (let i = 0; i <= 5; i++) {
      const y = (innerHeight / 5) * i
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      line.setAttribute('x1', '0')
      line.setAttribute('y1', String(y))
      line.setAttribute('x2', String(innerWidth))
      line.setAttribute('y2', String(y))
      line.setAttribute('stroke', '#e0e0e0')
      line.setAttribute('stroke-dasharray', '3,3')
      g.appendChild(line)

      // Y-axis labels (percentages)
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
      text.setAttribute('x', String(-10))
      text.setAttribute('y', String(y + 4))
      text.setAttribute('text-anchor', 'end')
      text.setAttribute('font-size', '11')
      text.setAttribute('fill', '#757575')
      text.textContent = `${100 - (i * 20)}%`
      g.appendChild(text)
    }

    // Draw axes
    const xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    xAxis.setAttribute('x1', '0')
    xAxis.setAttribute('y1', String(innerHeight))
    xAxis.setAttribute('x2', String(innerWidth))
    xAxis.setAttribute('y2', String(innerHeight))
    xAxis.setAttribute('stroke', '#757575')
    xAxis.setAttribute('stroke-width', '1')
    g.appendChild(xAxis)

    const yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    yAxis.setAttribute('x1', '0')
    yAxis.setAttribute('y1', '0')
    yAxis.setAttribute('x2', '0')
    yAxis.setAttribute('y2', String(innerHeight))
    yAxis.setAttribute('stroke', '#757575')
    yAxis.setAttribute('stroke-width', '1')
    g.appendChild(yAxis)

    // Draw annotation lines
    // 2012 line
    const line2012X = (6 / data.length) * barSpacing + barWidth / 2
    const annLine1 = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    annLine1.setAttribute('x1', String(line2012X))
    annLine1.setAttribute('y1', '0')
    annLine1.setAttribute('x2', String(line2012X))
    annLine1.setAttribute('y2', String(innerHeight))
    annLine1.setAttribute('stroke', '#00bcd4')
    annLine1.setAttribute('stroke-dasharray', '5,5')
    annLine1.setAttribute('stroke-width', '1')
    annLine1.setAttribute('opacity', '0.5')
    g.appendChild(annLine1)

    // 2016 line
    const line2016X = (8 / data.length) * barSpacing + barWidth / 2
    const annLine2 = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    annLine2.setAttribute('x1', String(line2016X))
    annLine2.setAttribute('y1', '0')
    annLine2.setAttribute('x2', String(line2016X))
    annLine2.setAttribute('y2', String(innerHeight))
    annLine2.setAttribute('stroke', '#ffc107')
    annLine2.setAttribute('stroke-dasharray', '5,5')
    annLine2.setAttribute('stroke-width', '2')
    annLine2.setAttribute('opacity', '0.6')
    g.appendChild(annLine2)

    // Draw stacked bars
    data.forEach((d, i) => {
      let currentY = innerHeight
      const x = i * barSpacing + (barSpacing - barWidth) / 2
      const total = d.amphetamine + d.cannabis + d.cocaine + d.ecstasy + d.methamphetamine

      const substances = [
        { name: 'amphetamine', value: d.amphetamine },
        { name: 'cannabis', value: d.cannabis },
        { name: 'cocaine', value: d.cocaine },
        { name: 'ecstasy', value: d.ecstasy },
        { name: 'methamphetamine', value: d.methamphetamine }
      ]

      substances.forEach((sub) => {
        const percentage = (sub.value / total) * 100
        const segmentHeight = (percentage / 100) * innerHeight
        
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
        rect.setAttribute('x', String(x))
        rect.setAttribute('y', String(currentY - segmentHeight))
        rect.setAttribute('width', String(barWidth))
        rect.setAttribute('height', String(segmentHeight))
        rect.setAttribute('fill', colors[sub.name as keyof typeof colors])
        rect.setAttribute('stroke', 'white')
        rect.setAttribute('stroke-width', '1')
        g.appendChild(rect)

        currentY -= segmentHeight
      })

      // X-axis label
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
      text.setAttribute('x', String(i * barSpacing + barSpacing / 2))
      text.setAttribute('y', String(innerHeight + 20))
      text.setAttribute('text-anchor', 'middle')
      text.setAttribute('font-size', '12')
      text.setAttribute('fill', '#757575')
      text.textContent = String(d.year)
      g.appendChild(text)
    })

    svg.appendChild(g)
  }, [height])

  return (
    <div className="w-full">
      <svg
        ref={svgRef}
        width="100%"
        height={height}
        style={{ minHeight: height }}
        className="bg-white"
      />
      <div className="flex flex-wrap gap-6 mt-4 px-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#001f3f' }}></div>
          <span className="text-grey-dark">Amphetamine</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#00bcd4' }}></div>
          <span className="text-grey-dark">Cannabis</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#00d4a8' }}></div>
          <span className="text-grey-dark">Cocaine</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#757575' }}></div>
          <span className="text-grey-dark">Ecstasy</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#ffc107' }}></div>
          <span className="text-grey-dark">Methylamphetamine</span>
        </div>
      </div>
    </div>
  )
}
