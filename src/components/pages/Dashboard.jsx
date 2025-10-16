import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Profile from "../Profile";
import Wishlist from "../Wishlist";
import Cart from "../Cart";

const Dashboard = () => {
  const [selected, setSelected] = useState("profile");

  const renderComponent = () => {
    switch (selected) {
      case "profile":
        return <Profile />;
      case "wishlist":
        return <Wishlist/>;
      case "cart":
        return <Cart />;
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
            selected === "profile" ? "bg-blue-500 text-white" : "hover:bg-blue-100"
          }`}
          onClick={() => setSelected("profile")}
        >
          Profile
        </button>
        <button
          className={`px-4 py-2 rounded-md transition ${
            selected === "wishlist" ? "bg-blue-500 text-white" : "hover:bg-blue-100"
          }`}
          onClick={() => setSelected("wishlist")}
        >
          Wishlist
        </button>
        <button
          className={`px-4 py-2 rounded-md transition ${
            selected === "cart" ? "bg-blue-500 text-white" : "hover:bg-blue-100"
          }`}
          onClick={() => setSelected("cart")}
        >
          Cart
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
