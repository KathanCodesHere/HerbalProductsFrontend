import axiosInstance from "../api/axiosInstance";

// export const signupService = async (userData) => {
//   const response = await axiosInstance.post("/auth/register", userData);
//   return response.data; // contains user info or token
// };

export const placeOrderService = async (userData) => {
  const response = await axiosInstance.post("/orders",userData);
  return response.data;
};

export const getAllOrdersService = async () => {
  const response = await axiosInstance.get("/orders/all?page=1&limit=10");
  return response.data;
};
