// src/hooks/useAuth.js
import { useState } from "react";
import { getAllProductService } from "../services/productService";

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


  return { loading, error, getAllProducts};
};
