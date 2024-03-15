import { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiTimerLine } from "react-icons/ri";
import { updateOrderStatus } from "../data/OrdersData";
import useOrders from "../context/orders";
import { useEffect } from "react";

const OrderModalView = ({ open, onCloseModal, onOpenModal, order }) => {
  const [orderStatus, setOrderStatus] = useState();
  const [editMode, setEditMode] = useState(false);
  const { orders, setOrders } = useOrders();
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  useEffect(() => {
    setOrderStatus(order?.status);
  }, [order]);

  const handleSave = () => {
    updateOrderStatus(order.order_id, orderStatus);
    setOrders(
      orders.map((item) => {
        if (item.order_id === order.order_id) {
          item.status = orderStatus;
        }
        return item;
      })
    );
    toggleEditMode();
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        styles={{
          modal: {
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#fff",
            minWidth: "600px",
          },
          closeButton: {
            padding: "15px",
          },
        }}
      >
        <div>
          {/* header */}
          <h2 className="font-bold text-2xl p-1">Order Details</h2>
          <hr className="my-2 border-2 rounded-lg" />
          {/* details */}
          <div>
            <div className="flex flex-col p-2 text-2xl gap-4">
              <div>
                <span className="font-semibold">Order Id: </span>
                <span className="font-medium">{order?.order_id}</span>
              </div>
              <div>
                <span className="font-semibold">Customer: </span>
                <span className="font-medium italic">
                  {order?.customer_name}
                </span>
              </div>
              <div>
                <span className="font-semibold">Order Date: </span>
                <span className="font-medium">{order?.order_date}</span>
              </div>
              <div>
                <span className="font-semibold">Product: </span>
                <span className="font-medium">{order?.product_name}</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="font-semibold">Order Status:</span>
                {editMode ? (
                  <select
                    id="orderStatus"
                    value={orderStatus}
                    onChange={(e) => setOrderStatus(e.target.value)}
                    className="border rounded-xl p-1"
                  >
                    <option value="delivered">delivered</option>
                    <option value="pending">pending</option>
                  </select>
                ) : (
                  <span
                    className={`flex items-center gap-2 rounded-xl p-2 text-lg ${
                      orderStatus == "delivered" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {orderStatus === "delivered" ? (
                      <>
                        <CiDeliveryTruck />
                        <span>{order?.status}</span>
                      </>
                    ) : (
                      <>
                        <RiTimerLine />
                        <span>{order?.status}</span>
                      </>
                    )}
                  </span>
                )}
              </div>
            </div>
          </div>
          <hr className="my-2 border-2 rounded-lg" />

          <div className="p-2  flex gap-8">
            <button
              className="border px-4 py-2 rounded-lg"
              onClick={editMode ? handleSave : toggleEditMode}
            >
              {editMode ? "Save" : "Edit"}
            </button>
            <button
              className="border px-4 py-2 rounded-lg"
              onClick={() => {
                setEditMode(false);
                onCloseModal();
              }}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default OrderModalView;
