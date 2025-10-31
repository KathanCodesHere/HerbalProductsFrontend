// src/services/authService.js
import axiosInstance from "../api/axiosInstance";

export const getAllProductService = async () => {
  const response = await axiosInstance.get("/products?page=1&limit=10");
  return response.data;
};

export const getSingleProductService = async (add) => {
  const response = await axiosInstance.get(`${add}`);
  return response.data;
};

export const deleteProductService = async (id) => {
  const response = await axiosInstance.delete(`/products/${id}`);
  return response.data;
};

export const updateProductService = async (id,formdata) => {
  const response = await axiosInstance.put(`/products/${id}`,formdata);
  return response.data;
};