'use client'

import { useEffect, useRef } from 'react'

interface MockLineChartProps {
  title: string
  height?: number
}

export default function MockLineChart({ title, height = 350 }: MockLineChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const width = svgRef.current.clientWidth || 600
    const padding = { top: 20, right: 30, bottom: 30, left: 60 }
    const innerWidth = width - padding.left - padding.right
    const innerHeight = height - padding.top - padding.bottom

    // Clear previous content
    svgRef.current.innerHTML = ''

    // Create SVG group
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

    // Draw sample line data
    const dataPoints = 9
    for (let i = 0; i < dataPoints - 1; i++) {
      const x1 = (innerWidth / (dataPoints - 1)) * i
      const y1 = innerHeight - (innerHeight / 10) * (2 + Math.sin(i * 0.8) * 1.5)
      const x2 = (innerWidth / (dataPoints - 1)) * (i + 1)
      const y2 = innerHeight - (innerHeight / 10) * (2.5 + Math.sin((i + 1) * 0.8) * 1.5)

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      line.setAttribute('x1', String(x1))
      line.setAttribute('y1', String(y1))
      line.setAttribute('x2', String(x2))
      line.setAttribute('y2', String(y2))
      line.setAttribute('stroke', '#001f3f')
      line.setAttribute('stroke-width', '2')
      g.appendChild(line)
    }

    // Draw sample line 2
    for (let i = 0; i < dataPoints - 1; i++) {
      const x1 = (innerWidth / (dataPoints - 1)) * i
      const y1 = innerHeight - (innerHeight / 10) * (1 + Math.cos(i * 0.6) * 1.2)
      const x2 = (innerWidth / (dataPoints - 1)) * (i + 1)
      const y2 = innerHeight - (innerHeight / 10) * (1.3 + Math.cos((i + 1) * 0.6) * 1.2)

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      line.setAttribute('x1', String(x1))
      line.setAttribute('y1', String(y1))
      line.setAttribute('x2', String(x2))
      line.setAttribute('y2', String(y2))
      line.setAttribute('stroke', '#00bcd4')
      line.setAttribute('stroke-width', '2')
      g.appendChild(line)
    }

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
          <div className="w-4 h-0.5 bg-navy"></div>
          <span className="text-grey-dark">Primary Metric</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-teal"></div>
          <span className="text-grey-dark">Secondary Metric</span>
        </div>
      </div>
    </div>
  )
}
