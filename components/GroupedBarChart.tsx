'use client'

import { useEffect, useRef } from 'react'

interface GroupedBarChartProps {
  title: string
  height?: number
}

export default function GroupedBarChart({ title, height = 300 }: GroupedBarChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const width = svgRef.current.clientWidth || 600
    const padding = { top: 20, right: 30, bottom: 50, left: 60 }
    const innerWidth = width - padding.left - padding.right
    const innerHeight = height - padding.top - padding.bottom

    const data = [
      { ageGroup: '0–16', amphetamine: 80, cannabis: 320, methamphetamine: 280 },
      { ageGroup: '17–25', amphetamine: 320, cannabis: 1200, methamphetamine: 2200 },
      { ageGroup: '26–39', amphetamine: 560, cannabis: 1600, methamphetamine: 3600 },
      { ageGroup: '40–64', amphetamine: 480, cannabis: 1400, methamphetamine: 2800 },
      { ageGroup: '65+', amphetamine: 120, cannabis: 480, methamphetamine: 640 },
    ]

    const colors = {
      amphetamine: '#001f3f',
      cannabis: '#00bcd4',
      methamphetamine: '#ffc107'
    }

    const maxValue = Math.max(...data.flatMap(d => [d.amphetamine, d.cannabis, d.methamphetamine]))
    const groupWidth = innerWidth / data.length * 0.8
    const groupSpacing = innerWidth / data.length
    const barWidth = groupWidth / 3 * 0.8

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

    // Draw grouped bars
    data.forEach((d, i) => {
      const groupCenterX = i * groupSpacing + groupSpacing / 2
      const groupStartX = groupCenterX - groupWidth / 2

      // Amphetamine
      const ampHeight = (d.amphetamine / maxValue) * innerHeight
      let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      rect.setAttribute('x', String(groupStartX))
      rect.setAttribute('y', String(innerHeight - ampHeight))
      rect.setAttribute('width', String(barWidth))
      rect.setAttribute('height', String(ampHeight))
      rect.setAttribute('fill', colors.amphetamine)
      rect.setAttribute('rx', '2')
      g.appendChild(rect)

      // Cannabis
      const canHeight = (d.cannabis / maxValue) * innerHeight
      rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      rect.setAttribute('x', String(groupStartX + barWidth + 2))
      rect.setAttribute('y', String(innerHeight - canHeight))
      rect.setAttribute('width', String(barWidth))
      rect.setAttribute('height', String(canHeight))
      rect.setAttribute('fill', colors.cannabis)
      rect.setAttribute('rx', '2')
      g.appendChild(rect)

      // Methamphetamine
      const methHeight = (d.methamphetamine / maxValue) * innerHeight
      rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      rect.setAttribute('x', String(groupStartX + (barWidth + 2) * 2))
      rect.setAttribute('y', String(innerHeight - methHeight))
      rect.setAttribute('width', String(barWidth))
      rect.setAttribute('height', String(methHeight))
      rect.setAttribute('fill', colors.methamphetamine)
      rect.setAttribute('rx', '2')
      g.appendChild(rect)

      // X-axis label
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
      text.setAttribute('x', String(groupCenterX))
      text.setAttribute('y', String(innerHeight + 20))
      text.setAttribute('text-anchor', 'middle')
      text.setAttribute('font-size', '12')
      text.setAttribute('fill', '#757575')
      text.textContent = d.ageGroup
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
