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

export const addtoCartService = async (credentials) => {
  const response = await axiosInstance.post("/cart", credentials);
  return response.data;
};