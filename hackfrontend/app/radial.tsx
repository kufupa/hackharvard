import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { name: "Carbs", value: 50, fill: "#ff0000" }, // Red
  { name: "Proteins", value: 30, fill: "#00ff00" }, // Green
  { name: "Fats", value: 20, fill: "#0000ff" }, // Blue
];

export default function Radial() {
  return (
    <ChartContainer
      config={{
        label: "Macronutrient Breakdown",
        color: "#00ffff",
      }}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <PieChart width={200} height={200}>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ChartContainer>
  );
}
