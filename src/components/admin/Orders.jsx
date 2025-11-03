import React,{useEffect,useState} from "react";
import { useOrders } from "../../hooks/useOrders";

// const dummyOrders = [
//   { id: 1, user: "John Doe", total: "$120", status: "Delivered", date: "2025-10-20" },
//   { id: 2, user: "Jane Smith", total: "$85", status: "Processing", date: "2025-10-21" },
//   { id: 3, user: "Mike Johnson", total: "$60", status: "Cancelled", date: "2025-10-22" },
// ];

const Orders = () => {
  const { loading, error, getAllOrders } = useOrders();
  const [dummyOrders, setDummyOrders] = useState([])
  useEffect(()=>{
    const fetchData=async()=>{
      const data=await getAllOrders();
      // console.log(data.data.items);
      setDummyOrders(data.data.items);
    }
    fetchData();
  },[dummyOrders])
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
              <td className="p-3">{order.user_id}</td>
              <td className="p-3">{order.total_amount}</td>
              <td
                className={`p-3 font-semibold ${
                  order.status === "delivered"
                    ? "text-green-600"
                    : order.status === "pending"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {order.status}
              </td>
              <td className="p-3">{order.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
