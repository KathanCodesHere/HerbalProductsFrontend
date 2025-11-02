import React from "react";

const UserOrders = () => {
  // Example orders data — you can replace this with API data later
  const orders = [
    { id: 1, productName: "Wireless Headphones", price: 2499 },
    { id: 2, productName: "Smart Watch", price: 4999 },
    { id: 3, productName: "Bluetooth Speaker", price: 1999 },
    { id: 4, productName: "Gaming Mouse", price: 1499 },
  ];

  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 md:p-8">
      <h2 className="text-2xl font-semibold text-green-700 mb-5 text-center md:text-left">
        My Orders
      </h2>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm md:text-base text-gray-700">
          <thead>
            <tr className="bg-green-100 text-left">
              <th className="py-3 px-4 rounded-tl-xl">#</th>
              <th className="py-3 px-4">Product Name</th>
              <th className="py-3 px-4 rounded-tr-xl text-right">Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order.id}
                className="border-b hover:bg-green-50 transition-all duration-200"
              >
                <td className="py-3 px-4 font-medium">{index + 1}</td>
                <td className="py-3 px-4">{order.productName}</td>
                <td className="py-3 px-4 text-right">₹{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* No Orders Message */}
      {orders.length === 0 && (
        <p className="text-gray-500 text-center mt-5">No orders found.</p>
      )}
    </div>
  );
};

export default UserOrders;
