// src/hooks/useAuth.js
import { useState } from "react";
import { getAllProductService,getSingleProductService,addtoCartService } from "../services/productService";

export const useProducts = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔐 getallprodcuts
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const data = await getAllProductService();
      setError(null);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "products loading failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };
   // 🔐 get single product
  const getSingleProduct = async (add) => {
    try {
      setLoading(true);
      const data = await getSingleProductService(add);
      setError(null);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "products loading failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // add to cart
  const addToCart = async (add) => {
    try {
      setLoading(true);
      const data = await addtoCartService(add);
      setError(null);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "add to cart failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, getAllProducts, getSingleProduct, addToCart};
};
