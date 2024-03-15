import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiTimerLine } from "react-icons/ri";

const CalenderOrderModal = ({ open, onCloseModal, onOpenModal, order }) => {

  return (
    <div>
      {order &&<Modal
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
          <h2 className="font-bold text-2xl p-1">Order Details</h2>
          <hr className="my-2 border-2 rounded-lg" />
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
                <span
                  className={`flex items-center gap-2 rounded-xl p-2 text-lg ${
                    order?.status === "delivered" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {order?.status === "delivered" ? (
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
              </div>
            </div>
          </div>
          <hr className="my-2 border-2 rounded-lg" />
          <button
            className="border px-4 py-2 rounded-lg"
            onClick={onCloseModal}
          >
            Close
          </button>
        </div>
      </Modal>}
    </div>
  );
};

export default CalenderOrderModal;
