
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Mon", value: 400 },
  { name: "Tue", value: 300 },
  { name: "Wed", value: 600 },
  { name: "Thu", value: 800 },
  { name: "Fri", value: 500 },
];

export function DashboardCharts() {
  return (
    <Card className="animate-fade-up bg-card/50 backdrop-blur">
      <CardHeader>
        <CardTitle>Weekly Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <XAxis 
              dataKey="name" 
              stroke="#94a3b8"
              fontSize={12}
            />
            <YAxis 
              stroke="#94a3b8"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{ 
                background: "hsl(222 47% 11%)",
                border: "1px solid hsl(217 47% 20%)",
                borderRadius: "8px"
              }}
              itemStyle={{ color: "#e2e8f0" }}
              labelStyle={{ color: "#e2e8f0" }}
            />
            <Bar 
              dataKey="value" 
              fill="hsl(217 91% 60%)"
              radius={[4, 4, 0, 0]} 
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
