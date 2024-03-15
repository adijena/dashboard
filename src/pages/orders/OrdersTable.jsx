import { useState, useEffect } from "react";
import { RiTimerLine } from "react-icons/ri";
import { CiDeliveryTruck } from "react-icons/ci";
import OrderModalView from "../../components/OrderModalView";
import useOrders from "../../context/orders";
import { deleteOrder } from "../../data/OrdersData";

const OrdersTable = ({ items }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const {orders, setOrders} = useOrders();
  const handleDelete = () => {
    deleteOrder(selectedOrder.order_id);
    setOrders(
      orders.filter((item) => item.order_id!== selectedOrder.order_id)
    );
    setSelectedOrder(null);
  };
  const handleOpen = () => {
    onOpenModal();
  };
  return (
    <>
      <div className="flex gap-2 pb-4 w-full justify-center md:justify-end">
        <button
          className="bg-golden rounded-xl p-2"
          disabled={!selectedOrder}
          onClick={handleDelete}
        >
          delete
        </button>
        <button
          className="bg-golden rounded-xl p-2"
          disabled={!selectedOrder}
          onClick={handleOpen}
        >
          open
        </button>
      </div>
      <div className="overflow-x-auto border-4 rounded-2xl">
        <table className="table-auto w-full">
          <thead className="border-b-4 bg-zinc-300 ">
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
            {items?.map((order, index) => (
              <tr
                key={order.order_id}
                className={`${index % 2 ? "bg-zinc-300" : "bg-neutral-200"} ${
                  order.order_id === selectedOrder?.order_id ? "bg-zinc-400" : ""
                } hover:cursor-pointer`}
                onClick={() => {
                  setSelectedOrder(order);
                }}
              >
                <td className="p-3 border-r-2">{order.order_id}</td>
                <td className="p-3 border-r-2">{order.customer_name}</td>
                <td className="p-3 border-r-2">{order.order_date}</td>
                <td className="p-3 flex gap-2 items-center ">
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
                <td className="p-3 border-x-2">{order.product_id}</td>
                <td className="p-3 border-r-2">{order.product_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <OrderModalView open={open} onCloseModal={onCloseModal} order={selectedOrder} onOpenModal={onOpenModal}/>
    </>
  );
};

export default OrdersTable;
