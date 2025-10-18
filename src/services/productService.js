// src/services/authService.js
import axiosInstance from "../api/axiosInstance";

export const getAllProductService = async () => {
  const response = await axiosInstance.get("/products?page=1&limit=10");
  return response.data;
};