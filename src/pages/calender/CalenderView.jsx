import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import OrderModalView from "../../components/OrderModalView";
import { useEffect } from "react";
import { getAllOrders } from "../../data/OrdersData";
import CalenderOrderModal from "./CalenderOrderModal";

const localizer = momentLocalizer(moment);

function CalendarView() {
  const [orders, setOrders] = useState();
  const [order, setOrder] = useState(null);
  const [events, setEvents] = useState();
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    const ordersData = getAllOrders();
    setOrders(ordersData);
    console.log(orders);
    setEvents(
      orders?.map((order) => ({
        title: `Order #${order.order_id}`,
        start: new Date(order.order_date),
        end: new Date(order.order_date),
        allDay: true,
        order: order,
      }))
    );
    console.log(events);
  }, [orders]);

  const EventComponent = ({ event }) => {
    return (
      <div style={{ position: "relative" }} onClick={() => handleClick(event)}>
        {event.title}
      </div>
    );
  };
  const handleClick = (event) => {
    setOrder(event.order);
    onOpenModal();
  };

  return (
    <div className="container mx-auto p-8 flex flex-col gap-8">
      <h2 className="text-2xl font-bold text-center dark:text-drkTextPrimary">
        Orders Calender
      </h2>
      <div
        style={{ height: "calc(100vh - 16rem)" }}
        className="bg-white p-4 rounded-xl"
      >
        <Calendar
          localizer={localizer}
          events={events}
          views={["month", "day", "week"]}
          components={{
            event: EventComponent,
          }}
        />
      </div>

      {order && (
        <CalenderOrderModal
          open={open}
          onCloseModal={onCloseModal}
          onOpenModal={onOpenModal}
          order={order}
        />
      )}
    </div>
  );
}

export default CalendarView;
