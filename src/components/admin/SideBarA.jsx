import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBarA = () => {
  const { pathname } = useLocation();

  const links = [
    { name: "Create Product", path: "/admin/create-product" },
    { name: "Create Category", path: "/admin/create-category" },
    { name: "User Orders", path: "/admin/orders" },
    { name: "All Users", path: "/admin/users" },
  ];

  return (
    <aside className="w-64 bg-[#023918] text-white p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`p-3 rounded-lg hover:bg-[#1C941E] transition ${
              pathname === link.path ? "bg-[#1C941E]" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default SideBarA;
