"use client";

import { PIE_CHART_DATA } from "@/lib/data";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export default function MarketShareChart() {
  return (
    <ResponsiveContainer width="100%" minHeight={300} className="-mx-5 mt-2">
      <PieChart width={730} height={250}>
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
          }}
          itemStyle={{
            color: "inherit",
          }}
        />
        <Legend />
        <Pie
          data={PIE_CHART_DATA}
          dataKey="marketShare"
          nameKey="company"
          cx="50%"
          cy="50%"
          fill="hsl(var(--primary))"
          stroke="hsl(var(--muted))"
          strokeWidth={3}
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
