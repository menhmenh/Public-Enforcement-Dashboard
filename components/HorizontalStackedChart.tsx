'use client'

import { useEffect, useRef } from 'react'

interface HorizontalStackedChartProps {
  title: string
  height?: number
}

export default function HorizontalStackedChart({ title, height = 280 }: HorizontalStackedChartProps) {
  void title
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const width = svgRef.current.clientWidth || 600
    const padding = { top: 20, right: 30, bottom: 20, left: 140 }
    const innerWidth = width - padding.left - padding.right
    const innerHeight = height - padding.top - padding.bottom

    const data = [
      { location: 'Major Cities', amphetamine: 1200, cannabis: 2800, methamphetamine: 4200, total: 8200 },
      { location: 'Inner Regional', amphetamine: 320, cannabis: 680, methamphetamine: 1600, total: 2600 },
      { location: 'Outer Regional', amphetamine: 240, cannabis: 480, methamphetamine: 1280, total: 2000 },
      { location: 'Remote', amphetamine: 80, cannabis: 160, methamphetamine: 560, total: 800 },
      { location: 'Very Remote', amphetamine: 40, cannabis: 80, methamphetamine: 320, total: 440 },
    ]

    // Sort by total descending
    data.sort((a, b) => b.total - a.total)

    const colors = {
      amphetamine: '#001f3f',
      cannabis: '#00bcd4',
      methamphetamine: '#ffc107'
    }

    const barHeight = innerHeight / data.length * 0.7
    const barSpacing = innerHeight / data.length
    const maxTotal = Math.max(...data.map(d => d.total))

    svgRef.current.innerHTML = ''

    const svg = svgRef.current
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    g.setAttribute('transform', `translate(${padding.left},${padding.top})`)

    // Draw grid lines (vertical)
    for (let i = 0; i <= 5; i++) {
      const x = (innerWidth / 5) * i
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      line.setAttribute('x1', String(x))
      line.setAttribute('y1', '0')
      line.setAttribute('x2', String(x))
      line.setAttribute('y2', String(innerHeight))
      line.setAttribute('stroke', '#e0e0e0')
      line.setAttribute('stroke-dasharray', '3,3')
      g.appendChild(line)

      // X-axis labels
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
      text.setAttribute('x', String(x))
      text.setAttribute('y', String(innerHeight + 15))
      text.setAttribute('text-anchor', 'middle')
      text.setAttribute('font-size', '11')
      text.setAttribute('fill', '#757575')
      text.textContent = `${Math.floor((i * maxTotal) / 5)}k`
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

    // Draw stacked bars
    data.forEach((d, i) => {
      let currentX = 0
      const y = i * barSpacing + (barSpacing - barHeight) / 2

      // Amphetamine
      const ampWidth = (d.amphetamine / maxTotal) * innerWidth
      let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      rect.setAttribute('x', String(currentX))
      rect.setAttribute('y', String(y))
      rect.setAttribute('width', String(ampWidth))
      rect.setAttribute('height', String(barHeight))
      rect.setAttribute('fill', colors.amphetamine)
      rect.setAttribute('stroke', 'white')
      rect.setAttribute('stroke-width', '1')
      g.appendChild(rect)
      currentX += ampWidth

      // Cannabis
      const canWidth = (d.cannabis / maxTotal) * innerWidth
      rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      rect.setAttribute('x', String(currentX))
      rect.setAttribute('y', String(y))
      rect.setAttribute('width', String(canWidth))
      rect.setAttribute('height', String(barHeight))
      rect.setAttribute('fill', colors.cannabis)
      rect.setAttribute('stroke', 'white')
      rect.setAttribute('stroke-width', '1')
      g.appendChild(rect)
      currentX += canWidth

      // Methamphetamine
      const methWidth = (d.methamphetamine / maxTotal) * innerWidth
      rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      rect.setAttribute('x', String(currentX))
      rect.setAttribute('y', String(y))
      rect.setAttribute('width', String(methWidth))
      rect.setAttribute('height', String(barHeight))
      rect.setAttribute('fill', colors.methamphetamine)
      rect.setAttribute('stroke', 'white')
      rect.setAttribute('stroke-width', '1')
      g.appendChild(rect)

      // Y-axis label
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
      text.setAttribute('x', String(-10))
      text.setAttribute('y', String(y + barHeight / 2 + 4))
      text.setAttribute('text-anchor', 'end')
      text.setAttribute('font-size', '12')
      text.setAttribute('fill', '#757575')
      text.textContent = d.location
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
          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#ffc107' }}></div>
          <span className="text-grey-dark">Methylamphetamine</span>
        </div>
      </div>
    </div>
  )
}
