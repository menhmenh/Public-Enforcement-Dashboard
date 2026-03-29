'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'

interface MockStackedChartProps {
  title: string
  height?: number
}

export default function MockStackedChart({ title, height = 350 }: MockStackedChartProps) {
  const data = [
    { year: 2012, cannabis: 65, methamphetamine: 20, other: 15 },
    { year: 2014, cannabis: 60, methamphetamine: 28, other: 12 },
    { year: 2016, cannabis: 52, methamphetamine: 38, other: 10 },
    { year: 2018, cannabis: 48, methamphetamine: 45, other: 7 },
    { year: 2020, cannabis: 42, methamphetamine: 52, other: 6 },
    { year: 2022, cannabis: 38, methamphetamine: 58, other: 4 },
    { year: 2024, cannabis: 35, methamphetamine: 62, other: 3 },
  ]

  const colors = ['#001f3f', '#00bcd4', '#b3b3b3']

  return (
    <div className="bg-white p-6 rounded border border-grey-dark/20">
      <h3 className="text-lg font-bold text-navy mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="year" stroke="#757575" />
          <YAxis stroke="#757575" label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#f5f5f5', border: '1px solid #757575' }}
            labelStyle={{ color: '#001f3f' }}
          />
          <Legend />
          <Bar dataKey="cannabis" stackId="a" fill={colors[0]} radius={[4, 4, 0, 0]} name="Cannabis" />
          <Bar dataKey="methamphetamine" stackId="a" fill={colors[1]} name="Methamphetamine" />
          <Bar dataKey="other" stackId="a" fill={colors[2]} name="Other" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
