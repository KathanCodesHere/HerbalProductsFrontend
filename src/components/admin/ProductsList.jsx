import React, { useEffect, useState } from "react";
import { useProducts } from "../../hooks/useProducts";

const ProductsList = () => {
  const { loading, error, getAllProducts, deleteProduct, updateProduct } = useProducts();
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null); // for modal editing
  const [isModalOpen, setIsModalOpen] = useState(false);

//   Fetch all products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        console.log(data);
        setProducts(data.data.items);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    // if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await deleteProduct(id);
      setProducts(products.filter((p) => p.id !== id));
      alert("🗑️ Product deleted successfully");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to delete product");
    }
  };

  // Handle edit button
  const handleEditClick = (product) => {
    setEditProduct(product);
    setIsModalOpen(true);
  };

  // Handle modal input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditProduct({
      ...editProduct,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle update submit
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updated = await updateProduct(editProduct.id, editProduct);
      setProducts(
        products.map((p) => (p.id === updated.id ? updated : p))
      );
      alert("✅ Product updated successfully");
      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to update product");
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#023918] text-center">
        Product List
      </h2>

      {loading && <p className="text-center text-gray-500">Loading products...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-[#1C941E] text-white">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Quantity</th>
              <th className="py-3 px-4 text-left">Active</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((p) => (
                <tr key={p.id} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-4">{p.id}</td>
                  <td className="py-3 px-4">{p.name}</td>
                  <td className="py-3 px-4">₹{p.price}</td>
                  <td className="py-3 px-4">{p.category_id}</td>
                  <td className="py-3 px-4">{p.stock}</td>
                  <td className="py-3 px-4">
                    {p.is_active ? (
                      <span className="text-green-600 font-medium">Yes</span>
                    ) : (
                      <span className="text-red-500 font-medium">No</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center space-x-3">
                    <button
                      onClick={() => handleEditClick(p)}
                      className="px-3 py-1 bg-[#1C941E] text-white rounded-lg hover:bg-[#167718] transition-all"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && editProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-6 sm:p-8 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>

            <h3 className="text-2xl font-bold mb-4 text-[#023918] text-center">
              Edit Product
            </h3>

            <form onSubmit={handleUpdate} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C941E]"
                value={editProduct.name}
                onChange={handleChange}
              />

              <textarea
                name="description"
                placeholder="Description"
                rows="3"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C941E]"
                value={editProduct.description}
                onChange={handleChange}
              ></textarea>

              <input
                type="number"
                name="price"
                placeholder="Price"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C941E]"
                value={editProduct.price}
                onChange={handleChange}
              />

              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C941E]"
                value={editProduct.quantity}
                onChange={handleChange}
              />

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="is_active"
                  checked={editProduct.is_active}
                  onChange={handleChange}
                  className="w-5 h-5 accent-[#1C941E] cursor-pointer"
                />
                <span className="text-gray-700 font-medium">Active</span>
              </label>

              <button
                type="submit"
                className="bg-[#1C941E] text-white py-3 rounded-lg font-medium hover:bg-[#167718] transition-all"
              >
                Update Product
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
