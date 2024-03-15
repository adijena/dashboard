import { createContext, useContext } from "react";

export const OrdersContext = createContext();

export const OrdersProvider = OrdersContext.Provider

export default function useOrders(){
    return useContext(OrdersContext);
}