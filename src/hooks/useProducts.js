// src/hooks/useAuth.js
import { useState } from "react";
import { getAllProductService,getSingleProductService,deleteProductService,updateProductService } from "../services/productService";

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

  const deleteProduct = async (id) => {
    try {
      setLoading(true);
      const data = await deleteProductService(id);
      setError(null);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "products loading failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateProduct = async (id,formData) => {
    try {
      setLoading(true);
      const data = await updateProductService(id,formData);
      setError(null);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "products updating failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  

  return { loading, error, getAllProducts, getSingleProduct, deleteProduct, updateProduct};
};
