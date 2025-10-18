// src/services/authService.js
import axiosInstance from "../api/axiosInstance";

export const signupService = async (userData) => {
  const response = await axiosInstance.post("/auth/register", userData);
  return response.data; // contains user info or token
};

export const loginService = async (credentials) => {
  const response = await axiosInstance.post("/auth/login", credentials);
  return response.data;
};

export const profileService = async () => {
  const response = await axiosInstance.get("/auth/profile");
  return response.data;
};

export const logoutService = async () => {
  // Optional — if your backend supports a logout endpoint
  const response = await axiosInstance.post("/auth/logout");
  return response.data;
};
