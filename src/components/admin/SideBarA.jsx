import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const SideBarA = ({ closeSidebar }) => {
  const { pathname } = useLocation();

  const links = [
    { name: "Create Product", path: "/admin/create-product" },
    { name: "Create Category", path: "/admin/create-category" },
    { name: "User Orders", path: "/admin/orders" },
    { name: "All Categories", path: "/admin/allcat" },
  ];

  return (
    <aside className="h-full bg-[#023918] text-white flex flex-col p-6 shadow-lg">
      {/* Mobile header */}
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <button
          className="md:hidden text-2xl"
          onClick={closeSidebar}
        >
          <IoClose />
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={closeSidebar}
            className={`p-3 rounded-lg transition-all duration-200 hover:bg-[#1C941E] ${
              pathname === link.path ? "bg-[#1C941E]" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto text-center text-sm opacity-70 pt-4 border-t border-green-800">
        © 2025 Admin Panel
      </div>
    </aside>
  );
};

export default SideBarA;
