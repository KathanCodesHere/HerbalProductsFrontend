import React from "react";

const dummyOrders = [
  { id: 1, user: "John Doe", total: "$120", status: "Delivered", date: "2025-10-20" },
  { id: 2, user: "Jane Smith", total: "$85", status: "Processing", date: "2025-10-21" },
  { id: 3, user: "Mike Johnson", total: "$60", status: "Cancelled", date: "2025-10-22" },
];

const Orders = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-[#023918]">User Orders</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#1C941E] text-white">
            <th className="p-3 text-left">Order ID</th>
            <th className="p-3 text-left">User</th>
            <th className="p-3 text-left">Total</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {dummyOrders.map((order) => (
            <tr key={order.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{order.id}</td>
              <td className="p-3">{order.user}</td>
              <td className="p-3">{order.total}</td>
              <td
                className={`p-3 font-semibold ${
                  order.status === "Delivered"
                    ? "text-green-600"
                    : order.status === "Processing"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {order.status}
              </td>
              <td className="p-3">{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
