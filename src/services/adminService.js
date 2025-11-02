import axiosInstance from "../api/axiosInstance";

export const createProductService = async (userData) => {
  const response = await axiosInstance.post("/products", userData);
  return response.data; 
};

export const createCategoryService = async (userData) => {
  const response = await axiosInstance.post("/categories", userData);
  return response.data; 
};

export const getAllCategoryService = async () => {
  const response = await axiosInstance.get("/categories");
  return response.data; 
};

export const deleteCategoryService = async (id) => {
  const response = await axiosInstance.delete(`/categories/${id}`);
  return response.data; 
};

export const updateCategoryService = async (id,data) => {
  const response = await axiosInstance.delete(`/categories/${id}`,data);
  return response.data; 
};