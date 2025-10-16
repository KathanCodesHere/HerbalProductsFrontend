// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://your-api-url.com/api", // ✅ replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add an interceptor to attach JWT token automatically
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
