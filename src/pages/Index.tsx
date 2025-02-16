
import { DateRangePicker } from "@/components/date-range-picker";
import { DataTable } from "@/components/data-table";
import { DashboardCharts } from "@/components/dashboard-charts";

const tableData = [
  { id: 1, name: "John Doe", status: "Active", value: "$1,200" },
  { id: 2, name: "Jane Smith", status: "Pending", value: "$800" },
  { id: 3, name: "Bob Johnson", status: "Active", value: "$2,100" },
  { id: 4, name: "Alice Brown", status: "Inactive", value: "$500" },
  { id: 5, name: "Charlie Wilson", status: "Active", value: "$1,500" },
];

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "status", label: "Status" },
  { key: "value", label: "Value" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground/90">Dashboard</h1>
        <DateRangePicker />
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="animate-fade-up">
          <DataTable
            data={tableData}
            columns={columns}
            className="bg-card/50 backdrop-blur"
          />
        </div>
        <DashboardCharts />
      </div>
    </div>
  );
}

export default Index;
