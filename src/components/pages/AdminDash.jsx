import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CreateProduct from "../admin/CreateProduct";
import CreateCategory from "../admin/CreateCategory";
import Orders from "../admin/Orders";
import Users from "../admin/Users";
import SideBarA from "../admin/SideBarA";

const AdminDash = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar (always visible) */}
      <SideBarA />

      {/* Right content area */}
      <div className="flex-1 p-6 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Navigate to="create-product" />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="create-category" element={<CreateCategory />} />
          <Route path="orders" element={<Orders />} />
          <Route path="users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDash;
