import React from "react";

const dummyUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "User", joined: "2025-09-10" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", joined: "2025-08-15" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "User", joined: "2025-07-30" },
];

const Users = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-[#023918]">All Users</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#1C941E] text-white">
            <th className="p-3 text-left">User ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">Joined</th>
          </tr>
        </thead>
        <tbody>
          {dummyUsers.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{user.id}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3 font-semibold">
                {user.role === "Admin" ? (
                  <span className="text-green-700">{user.role}</span>
                ) : (
                  <span className="text-gray-700">{user.role}</span>
                )}
              </td>
              <td className="p-3">{user.joined}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
