"use client";

import { LINE_GRAPH_DATA } from "@/lib/data";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export default function SalesChart() {
  return (
    <ResponsiveContainer width="100%" minHeight={300} className="-mx-5 mt-2">
      <LineChart data={LINE_GRAPH_DATA}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis dataKey="sales" />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
          }}
        />
        <Legend />
        <Line
          name="Sales"
          type="monotone"
          dataKey="sales"
          stroke="hsl(var(--primary))"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
