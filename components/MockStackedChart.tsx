'use client'

import { useEffect, useRef } from 'react'

interface MockStackedChartProps {
  title: string
  height?: number
}

export default function MockStackedChart({ title, height = 350 }: MockStackedChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const width = svgRef.current.clientWidth || 600
    const padding = { top: 20, right: 30, bottom: 50, left: 60 }
    const innerWidth = width - padding.left - padding.right
    const innerHeight = height - padding.top - padding.bottom

    const data = [
      { year: 2012, cannabis: 65, methamphetamine: 20, other: 15 },
      { year: 2014, cannabis: 60, methamphetamine: 28, other: 12 },
      { year: 2016, cannabis: 52, methamphetamine: 38, other: 10 },
      { year: 2018, cannabis: 48, methamphetamine: 45, other: 7 },
      { year: 2020, cannabis: 42, methamphetamine: 52, other: 6 },
      { year: 2022, cannabis: 38, methamphetamine: 58, other: 4 },
      { year: 2024, cannabis: 35, methamphetamine: 62, other: 3 },
    ]

    const colors = ['#001f3f', '#00bcd4', '#757575']
    const barWidth = innerWidth / data.length * 0.7
    const barSpacing = innerWidth / data.length

    // Clear previous content
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

    // Draw stacked bars
    data.forEach((d, i) => {
      let currentY = innerHeight
      const x = i * barSpacing + (barSpacing - barWidth) / 2
      
      const total = d.cannabis + d.methamphetamine + d.other
      
      // Cannabis
      const cannabisHeight = (d.cannabis / total) * innerHeight
      let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      rect.setAttribute('x', String(x))
      rect.setAttribute('y', String(currentY - cannabisHeight))
      rect.setAttribute('width', String(barWidth))
      rect.setAttribute('height', String(cannabisHeight))
      rect.setAttribute('fill', colors[0])
      rect.setAttribute('rx', '2')
      g.appendChild(rect)
      currentY -= cannabisHeight

      // Methamphetamine
      const methHeight = (d.methamphetamine / total) * innerHeight
      rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      rect.setAttribute('x', String(x))
      rect.setAttribute('y', String(currentY - methHeight))
      rect.setAttribute('width', String(barWidth))
      rect.setAttribute('height', String(methHeight))
      rect.setAttribute('fill', colors[1])
      rect.setAttribute('rx', '2')
      g.appendChild(rect)
      currentY -= methHeight

      // Other
      const otherHeight = (d.other / total) * innerHeight
      rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      rect.setAttribute('x', String(x))
      rect.setAttribute('y', String(currentY - otherHeight))
      rect.setAttribute('width', String(barWidth))
      rect.setAttribute('height', String(otherHeight))
      rect.setAttribute('fill', colors[2])
      rect.setAttribute('rx', '2')
      g.appendChild(rect)

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
    <div className="bg-white p-6 rounded border border-grey-dark/20">
      <h3 className="text-lg font-bold text-navy mb-4">{title}</h3>
      <svg
        ref={svgRef}
        width="100%"
        height={height}
        style={{ minHeight: height }}
        className="bg-white"
      />
      <div className="flex gap-6 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#001f3f' }}></div>
          <span className="text-grey-dark">Cannabis</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#00bcd4' }}></div>
          <span className="text-grey-dark">Methamphetamine</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#757575' }}></div>
          <span className="text-grey-dark">Other</span>
        </div>
      </div>
    </div>
  )
}
