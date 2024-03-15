import { AiOutlineDollarCircle } from "react-icons/ai";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";
import OrdersTableDashboard from "./OrdersTableDashboard";
import { NavLink } from "react-router-dom";
import TopProducts from "./TopProducts";
import Graph from "./Graph";

// Card component to display statistics
const Card = ({ icon, fall, header, percentage, value }) => {
  return (
    <div className="bg-offGrey rounded-xl w-full p-4 max-w-sm flex flex-col gap-3 dark:bg-drkSec dark:text-drkTextPrimary">
      <div className="flex items-center gap-2">
        {icon}
        <h4 className="font-semibold text-lg">{header}</h4>
      </div>
      <div className="flex justify-between m-1">
        <span className="text-xl font-bold self-center">{value}</span>
        <div className="flex flex-col items-center">
          <div
            className={`flex items-center gap-2 ${
              fall ? "text-red-600" : "text-green-600"
            }`}
          >
            {fall ? <AiOutlineFall /> : <AiOutlineRise />}
            <span className="text-sm">{percentage}%</span>
          </div>
          <span className="text-xs">vs last 7 days</span>
        </div>
      </div>
    </div>
  );
};

// Dashboard component
const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        {/* Cards section for displaying statistics */}
        <div className="flex flex-wrap gap-2 md:gap-8 justify-evenly p-4">
          <Card
            icon={<AiOutlineDollarCircle />}
            header="Total Income"
            fall={false}
            value="$20223"
            percentage="16"
          />
          <Card
            icon={<AiOutlineDollarCircle />}
            header="Total Sales"
            fall={false}
            value="$40223"
            percentage="16"
          />
          <Card
            icon={<AiOutlineDollarCircle />}
            header="Total Orders"
            fall={false}
            value="3223"
            percentage="4"
          />
          <Card
            icon={<AiOutlineDollarCircle />}
            header="Total Stocks"
            fall={true}
            value="8223"
            percentage="7"
          />
        </div>
        {/* Graph and Top Products section */}
        <div className="flex gap-8 flex-col md:flex-row p-8 items-center justify-center">
          <Graph />
          <div className="bg-offGrey dark:bg-slate-900 rounded-xl dark:text-drkTextPrimary mt-20 md:mt-0">
            <TopProducts />
          </div>
        </div>
        {/* Orders section */}
        <div className="p-6 w-full">
          <div className="w-full flex justify-between p-4 border-4 rounded-xl mb-2">
            <h4 className="text-2xl font-bold dark:text-drkTextMid mt-1">
              Orders
            </h4>
            <NavLink to="/orders" className="bg-golden rounded-xl p-2">
              View All
            </NavLink>
          </div>
          <OrdersTableDashboard />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
