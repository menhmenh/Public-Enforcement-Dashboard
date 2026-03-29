'use client'

import { useEffect, useRef } from 'react'

interface MockBarChartProps {
  title: string
  height?: number
}

export default function MockBarChart({ title, height = 350 }: MockBarChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const width = svgRef.current.clientWidth || 600
    const padding = { top: 20, right: 30, bottom: 50, left: 60 }
    const innerWidth = width - padding.left - padding.right
    const innerHeight = height - padding.top - padding.bottom

    const data = [
      { jurisdiction: 'NSW', value: 125000 },
      { jurisdiction: 'VIC', value: 98000 },
      { jurisdiction: 'QLD', value: 87000 },
      { jurisdiction: 'WA', value: 62000 },
      { jurisdiction: 'SA', value: 45000 },
      { jurisdiction: 'TAS', value: 28000 },
      { jurisdiction: 'ACT', value: 18000 },
      { jurisdiction: 'NT', value: 15000 },
    ]

    const maxValue = Math.max(...data.map(d => d.value))
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

    // Draw bars
    data.forEach((d, i) => {
      const barHeight = (d.value / maxValue) * innerHeight
      const x = i * barSpacing + (barSpacing - barWidth) / 2
      const y = innerHeight - barHeight

      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      rect.setAttribute('x', String(x))
      rect.setAttribute('y', String(y))
      rect.setAttribute('width', String(barWidth))
      rect.setAttribute('height', String(barHeight))
      rect.setAttribute('fill', '#001f3f')
      rect.setAttribute('rx', '4')
      g.appendChild(rect)

      // X-axis label
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
      text.setAttribute('x', String(i * barSpacing + barSpacing / 2))
      text.setAttribute('y', String(innerHeight + 15))
      text.setAttribute('text-anchor', 'middle')
      text.setAttribute('font-size', '12')
      text.setAttribute('fill', '#757575')
      text.setAttribute('transform', `rotate(45 ${i * barSpacing + barSpacing / 2} ${innerHeight + 15})`)
      text.textContent = d.jurisdiction
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
    </div>
  )
}
