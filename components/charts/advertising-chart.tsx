"use client";

import { SCATTER_CHART_DATA } from "@/lib/data";
import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

export default function AdvertisingChart() {
  return (
    <ResponsiveContainer width="100%" minHeight={300} className="-mx-5 mt-2">
      <ScatterChart>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="product" />
        <YAxis dataKey="advertisingBudget" />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
          }}
          itemStyle={{
            color: "inherit",
          }}
        />
        <Legend />
        <Scatter
          name="Advertising budget"
          data={SCATTER_CHART_DATA}
          fill="hsl(var(--primary))"
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
