'use client';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function ArticlesChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f2dde7" vertical={false} />
        <XAxis
          dataKey="month"
          tick={{ fontSize: 11, fill: '#62677d' }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          allowDecimals={false}
          tick={{ fontSize: 11, fill: '#62677d' }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip />
        <Bar dataKey="articles" fill="#12204f" radius={[6, 6, 0, 0]} name="Artículos" />
      </BarChart>
    </ResponsiveContainer>
  );
}