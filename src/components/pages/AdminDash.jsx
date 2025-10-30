import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CreateProduct from "../admin/CreateProduct";
import CreateCategory from "../admin/CreateCategory";
import Orders from "../admin/Orders";
import Users from "../admin/Users";
import SideBarA from "../admin/SideBarA";
import { FiMenu } from "react-icons/fi";

const AdminDash = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      {/* Sidebar */}
      <div
        className={`fixed md:static inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:w-64 w-64`}
      >
        <SideBarA closeSidebar={() => setIsSidebarOpen(false)} />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Right content area */}
      <div className="flex-1 flex flex-col">
        {/* Top bar for mobile toggle */}
        <header className="md:hidden bg-white shadow-md p-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-[#023918]">Admin Panel</h2>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-[#023918] text-2xl"
          >
            <FiMenu />
          </button>
        </header>

        {/* Main content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Navigate to="create-product" />} />
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="create-category" element={<CreateCategory />} />
            <Route path="orders" element={<Orders />} />
            <Route path="users" element={<Users />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDash;
