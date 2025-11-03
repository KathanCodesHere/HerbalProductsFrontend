import { useState } from "react";
import { placeOrderService,getAllOrdersService } from "../services/orderService";

export const useOrders = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //create Products
  const placeOrder = async (products) => {
    try {
      setLoading(true);
      const data = await placeOrderService(products);
      setError(null);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "ordering product failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

 
  //create Products
  const getAllOrders = async () => {
    try {
      setLoading(true);
      const data = await getAllOrdersService();
      setError(null);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "get all orders failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, placeOrder,getAllOrders};
};
