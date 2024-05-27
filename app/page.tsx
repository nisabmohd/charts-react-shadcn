import type { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SalesChart from "@/components/charts/sales-chart";
import SharesChart from "@/components/charts/products-chart";
import MarketShareChart from "@/components/charts/market-share-chart";
import AdvertisingChart from "@/components/charts/advertising-chart";

export default function Home() {
  return (
    <div>
      <div className="grid lg:grid-cols-2  gap-4 my-5">
        <ChartCard
          title="Sales Chart"
          description="A line chart showing total sales."
        >
          <SalesChart />
        </ChartCard>
        <ChartCard
          title="Products Chart"
          description="A bar chart showing total product sales."
        >
          <SharesChart />
        </ChartCard>
        <ChartCard
          title="Market Share Chart"
          description="A pie chart showing total market share."
        >
          <MarketShareChart />
        </ChartCard>
        <ChartCard
          title="Advertising Chart"
          description="A scatter chart showing advertising budget."
        >
          <AdvertisingChart />
        </ChartCard>
      </div>
    </div>
  );
}

function ChartCard({
  children,
  title,
  description,
}: { children: ReactNode } & { title: string; description: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
