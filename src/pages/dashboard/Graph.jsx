import { useEffect } from "react";
import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getLastThirtyDays } from "../../data/SaleData";

// Component for rendering a graph of sales data for the last 30 days
const Graph = () => {
  // State
  const [data, setData] = useState();
  // Fetch sales data for the last 30 days when component mounts
  useEffect(() => {
    setData(getLastThirtyDays());
  }, []);
  return (
    <div style={{ height: 700 }} className="w-full">
      {/* Title for the graph */}
      <h2 className="font-bold text-3xl m-2 text-center dark:text-drkTextPrimary">
        Sale of Last 30 days{" "}
      </h2>
      {/* Responsive container for the AreaChart */}
      <ResponsiveContainer>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
