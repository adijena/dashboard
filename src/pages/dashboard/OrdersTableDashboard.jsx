import { useState } from "react";
import { useEffect } from "react";
import { getAllOrders } from "../../data/OrdersData";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiTimerLine } from "react-icons/ri";

// OrdersTableDashboard component to display a table of recent orders
const OrdersTableDashboard = () => {
  const [orders, setOrders] = useState(null);
  // Fetch orders
  useEffect(() => {
    const data = getAllOrders();
    setOrders(data.slice(0, 5));
  }, []);
  return (
    <div className="overflow-x-auto border-4 rounded-2xl">
      <table className="table-auto w-full">
        <thead className="border-b-4 bg-zinc-300">
          <tr>
            <th className="p-4 border-r-2">Order ID</th>
            <th className="p-4 border-r-2">Customer Name</th>
            <th className="p-4 border-r-2">Order Date</th>
            <th className="p-4 border-r-2">Status</th>
            <th className="p-4 border-r-2">Product ID</th>
            <th className="p-4 border-r-2">Product Name</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {orders?.map((order, index) => (
            <tr
              key={order.order_id}
              className={`${index % 2 ? "bg-zinc-300" : "bg-neutral-200"}`}
            >
              <td className="p-3 border-r-2">{order.order_id}</td>
              <td className="p-3 border-r-2">{order.customer_name}</td>
              <td className="p-3 border-r-2">{order.order_date}</td>
              <td className="p-3 border-r-2 flex gap-2 items-center ">
                {order.status === "delivered" ? (
                  <>
                    <CiDeliveryTruck className="text-green-700" />
                    <span>{order.status}</span>
                  </>
                ) : (
                  <>
                    <RiTimerLine className="text-red-700" />
                    <span>{order.status}</span>
                  </>
                )}
              </td>
              <td className="p-3 border-r-2">{order.product_id}</td>
              <td className="p-3 border-r-2">{order.product_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default OrdersTableDashboard;
