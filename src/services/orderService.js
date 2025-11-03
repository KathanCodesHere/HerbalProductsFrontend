import axiosInstance from "../api/axiosInstance";

// export const signupService = async (userData) => {
//   const response = await axiosInstance.post("/auth/register", userData);
//   return response.data; // contains user info or token
// };

export const placeOrderService = async (userData) => {
  const response = await axiosInstance.post("/orders",userData);
  return response.data;
};

