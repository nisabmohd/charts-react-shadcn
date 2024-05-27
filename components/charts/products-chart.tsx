"use client";

import { BAR_CHART_DATA } from "@/lib/data";
import {
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Bar,
  BarChart,
} from "recharts";

export default function SharesChart() {
  return (
    <ResponsiveContainer width="100%" minHeight={300} className="-mx-5 mt-2">
      <BarChart data={BAR_CHART_DATA}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="department" />
        <YAxis dataKey="productsSold" />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
          }}
        />
        <Legend />
        <Bar
          type="monotone"
          dataKey="productsSold"
          fill="hsl(var(--primary))"
          barSize="80"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
