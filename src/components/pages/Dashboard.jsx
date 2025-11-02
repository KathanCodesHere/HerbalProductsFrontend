import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Profile from "../Profile";
// import Wishlist from "../Wishlist";
import Cart from "../Cart";
import UserOrders from "../UserOrders";


const Dashboard = () => {
  const [selected, setSelected] = useState("profile");
  const navigate = useNavigate();

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("userChange"));
    navigate("/"); // redirect to home
  };

  const renderComponent = () => {
    switch (selected) {
      case "profile":
        return <Profile />;
      // case "wishlist":
      //   return <Wishlist />;
      case "cart":
        return <Cart />;
      case "orders":
        return <UserOrders/>
      default:
        return <Profile />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-white shadow-md p-5 flex md:flex-col justify-around md:justify-start md:space-y-4">
        <button
          className={`px-4 py-2 rounded-md transition ${
            selected === "profile"
              ? "bg-green-500 text-white"
              : "hover:bg-green-100"
          }`}
          onClick={() => setSelected("profile")}
        >
          Profile
        </button>

        {/* <button
          className={`px-4 py-2 rounded-md transition ${
            selected === "wishlist"
              ? "bg-green-500 text-white"
              : "hover:bg-green-100"
          }`}
          onClick={() => setSelected("wishlist")}
        >
          Wishlist
        </button> */}

        <button
          className={`px-4 py-2 rounded-md transition ${
            selected === "cart"
              ? "bg-green-500 text-white"
              : "hover:bg-green-100"
          }`}
          onClick={() => setSelected("cart")}
        >
          Cart
        </button>
        <button
          className={`px-4 py-2 rounded-md transition ${
            selected === "orders"
              ? "bg-green-500 text-white"
              : "hover:bg-green-100"
          }`}
          onClick={() => setSelected("orders")}
        >
          My Orders
        </button>

        {/* ✅ Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-4 md:mt-auto px-4 py-2 rounded-md font-medium text-red-600 border border-red-400 
                     hover:bg-red-500 hover:text-white transition-all duration-300"
        >
          Logout
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
          >
            {renderComponent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dashboard;
