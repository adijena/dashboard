import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaSearch } from "react-icons/fa";

import { getAllOrders, searchOrdersById } from "../../data/OrdersData";
import OrdersTable from "./OrdersTable";
import { OrdersProvider } from "../../context/orders";

// Orders page
const Orders = () => {
  // State for storing orders data, pagination information, and search query
  const [orders, setOrders] = useState(null);
  const [pagination, setPagination] = useState({
    totalPages: 0,
    currentPage: 1,
  });
  const [search, setSearch] = useState("");

  const itemsPerPage = 8;

  // Function to handle moving between pages
  const nextPage = () => {
    let next = Math.min(pagination.currentPage + 1, pagination.totalPages);
    setPagination((prev) => ({
      ...prev,
      currentPage: next,
    }));
  };
  const prevPage = () => {
    let prevs = Math.max(pagination.currentPage - 1, 1);
    setPagination((prev) => ({
      ...prev,
      currentPage: prevs,
    }));
  };

  // Fetch orders data and set initial pagination state on component mount
  useEffect(() => {
    const fetchData = async () => {
      const ordersData = await getAllOrders();
      setOrders(ordersData);
      setPagination({
        currentPage: 1,
        totalPages: Math.ceil(ordersData.length / itemsPerPage),
      });
    };

    fetchData();
  }, []);

  // Function to search orders by ID
  const searchOrders = () => {
    const ordersData = searchOrdersById(search);
    setOrders(ordersData);
    setPagination({
      currentPage: 1,
      totalPages: Math.ceil(ordersData.length / itemsPerPage),
    });
  };

  // Calculate the start and end index of orders to display based on pagination
  const startIndex = (pagination.currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, orders?.length);

  return (
    <div>
      <div className="flex flex-col">
        {/* Header + Search bar */}
        <div className="p-6 flex justify-between w-full flex-col md:flex-row items-center gap-2 dark:text-drkTextMid">
          <h2 className="text-3xl font-bold">Orders</h2>
          <div className="flex gap-2">
            <input
              type="text"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Search Order ID"
              className="border rounded-xl p-2 w-64 md:w-72
              dark:bg-drkSec
              "
            />
            <button
              className="rounded-xl border p-2 dark:bg-drkSec"
              onClick={searchOrders}
            >
              <FaSearch size={24} />
            </button>
          </div>
        </div>
      </div>
      <div className="px-6">

        {/* Orders table */}
        <OrdersProvider value={{ orders, setOrders }}>
          <OrdersTable items={orders?.slice(startIndex, endIndex)} />
        </OrdersProvider>
        
        {/* pagination */}
        <div className="flex gap-2 justify-center items-center p-4 dark:text-drkBtn">
          <button onClick={prevPage}>
            <FaAngleLeft size={32} />
          </button>
          <span className="text-xl dark:text-drkTextPrimary">
            {pagination.currentPage}
          </span>
          <button onClick={nextPage}>
            <FaAngleRight size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Orders;
