import React, { useEffect, useState } from "react";
import { useAdmin } from "../../hooks/useAdmin";

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null); // For modal data
  const [updatedData, setUpdatedData] = useState({
    name: "",
    description: "",
  });
  const [showModal, setShowModal] = useState(false);

  const { getAllCategoryAd, updateCategoryAd, deleteCategoryAd } = useAdmin();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCategoryAd();
        setCategories(data.data.categories);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  // 🟢 Handle Delete Category
  const handleDelete = async (id) => {
    // if (!window.confirm("Are you sure you want to delete this category?")) return;
    try {
      await deleteCategoryAd(id);
      alert("category deleted");
      setCategories(categories.filter((cat) => cat.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // 🟢 Handle Edit Modal Open
  const handleEdit = (cat) => {
    setEditingCategory(cat);
    setUpdatedData({
      name: cat.name,
      description: cat.description,
    });
    setShowModal(true);
  };

  // 🟢 Handle Update Submit
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateCategoryAd(editingCategory.id, updatedData);
      setCategories(
        categories.map((cat) =>
          cat.id === editingCategory.id
            ? { ...cat, ...updatedData }
            : cat
        )
      );
      setShowModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-md overflow-x-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#023918] text-center">
        All Categories
      </h2>

      <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-[#1C941E] text-white">
          <tr>
            <th className="py-3 px-4 text-left text-sm sm:text-base">ID</th>
            <th className="py-3 px-4 text-left text-sm sm:text-base">Name</th>
            <th className="py-3 px-4 text-left text-sm sm:text-base">Description</th>
            <th className="py-3 px-4 text-left text-sm sm:text-base">Created At</th>
            <th className="py-3 px-4 text-center text-sm sm:text-base">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat, index) => (
            <tr
              key={cat.id}
              className={`border-b border-gray-200 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-green-50 transition-all duration-200`}
            >
              <td className="py-3 px-4 text-gray-700 text-sm sm:text-base">
                {cat.id}
              </td>
              <td className="py-3 px-4 text-gray-900 font-medium text-sm sm:text-base">
                {cat.name}
              </td>
              <td className="py-3 px-4 text-gray-700 text-sm sm:text-base">
                {cat.description}
              </td>
              <td className="py-3 px-4 text-gray-600 text-sm sm:text-base">
                {new Date(cat.created_at).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </td>
              <td className="py-3 px-4 flex gap-2 justify-center">
                <button
                  onClick={() => handleEdit(cat)}
                  className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(cat.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 🟢 Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
            <h3 className="text-xl font-semibold text-[#023918] mb-4 text-center">
              Edit Category
            </h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={updatedData.name}
                  onChange={(e) =>
                    setUpdatedData({ ...updatedData, name: e.target.value })
                  }
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-green-600 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <textarea
                  value={updatedData.description}
                  onChange={(e) =>
                    setUpdatedData({ ...updatedData, description: e.target.value })
                  }
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-green-600 outline-none"
                  required
                />
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllCategories;
