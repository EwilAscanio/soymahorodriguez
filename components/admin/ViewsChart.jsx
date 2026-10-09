'use client';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function ViewsChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={data} margin={{ top: 10, right: 10, left: -16, bottom: 0 }}>
        <defs>
          <linearGradient id="viewsFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f5367b" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#f5367b" stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#f2dde7" vertical={false} />
        <XAxis
          dataKey="day"
          tick={{ fontSize: 11, fill: '#62677d' }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => value.slice(8) + '/' + value.slice(5, 7)}
        />
        <YAxis
          allowDecimals={false}
          tick={{ fontSize: 11, fill: '#62677d' }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="visits"
          stroke="#f5367b"
          strokeWidth={2}
          fill="url(#viewsFill)"
          name="Visitas"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}