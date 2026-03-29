'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface MockLineChartProps {
  title: string
  height?: number
}

export default function MockLineChart({ title, height = 350 }: MockLineChartProps) {
  const data = [
    { year: 2008, trend1: 45000, trend2: 32 },
    { year: 2010, trend1: 52000, trend2: 38 },
    { year: 2012, trend1: 61000, trend2: 42 },
    { year: 2014, trend1: 75000, trend2: 48 },
    { year: 2016, trend1: 82000, trend2: 52 },
    { year: 2018, trend1: 88000, trend2: 55 },
    { year: 2020, trend1: 95000, trend2: 58 },
    { year: 2022, trend1: 102000, trend2: 62 },
    { year: 2024, trend1: 115000, trend2: 68 },
  ]

  return (
    <div className="bg-white p-6 rounded border border-grey-dark/20">
      <h3 className="text-lg font-bold text-navy mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="year" stroke="#757575" />
          <YAxis stroke="#757575" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#f5f5f5', border: '1px solid #757575' }}
            labelStyle={{ color: '#001f3f' }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="trend1" 
            stroke="#001f3f" 
            strokeWidth={2}
            dot={{ fill: '#001f3f', r: 4 }}
            activeDot={{ r: 6 }}
            name="Primary Metric"
          />
          <Line 
            type="monotone" 
            dataKey="trend2" 
            stroke="#00bcd4" 
            strokeWidth={2}
            dot={{ fill: '#00bcd4', r: 4 }}
            activeDot={{ r: 6 }}
            name="Secondary Metric"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
