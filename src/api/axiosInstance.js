// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://herbal-6tab.onrender.com/api", // ✅ replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add an interceptor to attach JWT token automatically
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
