import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const OrderContext = createContext();

export const OrderProvider = (props) => {
  const [orders, setOrders] = useState([]);

  async function getOrders() {
    const allOrders = await axios.post("/api/order/allorders");
    console.log(allOrders.data);
    setOrders(allOrders.data);
  }

  useEffect(() => {
    getOrders();
  }, []);

  const contextValus = {
    orders,
    setOrders,
  };

  return (
    <OrderContext.Provider value={contextValus}>
      {props.children}
    </OrderContext.Provider>
  );
};
