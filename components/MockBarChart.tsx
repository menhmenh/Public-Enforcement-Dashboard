'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface MockBarChartProps {
  title: string
  height?: number
}

export default function MockBarChart({ title, height = 350 }: MockBarChartProps) {
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

  return (
    <div className="bg-white p-6 rounded border border-grey-dark/20">
      <h3 className="text-lg font-bold text-navy mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="jurisdiction" stroke="#757575" />
          <YAxis stroke="#757575" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#f5f5f5', border: '1px solid #757575' }}
            labelStyle={{ color: '#001f3f' }}
          />
          <Bar 
            dataKey="value" 
            fill="#001f3f" 
            radius={[4, 4, 0, 0]}
            name="Count"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
