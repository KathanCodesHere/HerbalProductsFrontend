import React, { useState } from "react";
import { useAdmin } from "../../hooks/useAdmin"; 

const CreateProduct = () => {
  const {loading, error, createProductAd}=useAdmin();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category_id: "",
    brand_id: "",
    stock: "",
    image_url: "",
    is_active: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log("Product Created:", product);
    try{
      const data=await createProductAd(product);
      console.log(data);
    }
    catch(err){
      console.log(err)
    }
    alert("✅ Product created successfully (dummy action)");
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-md">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#023918] text-center">
        Create Product
      </h2>

      <form
        className="flex flex-col gap-4 sm:gap-5"
        onSubmit={handleSubmit}
      >
        {/* Product Name */}
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="border p-3 sm:p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#1C941E]"
          value={product.name}
          onChange={handleChange}
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Product Description"
          rows="3"
          className="border p-3 sm:p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#1C941E]"
          value={product.description}
          onChange={handleChange}
        ></textarea>

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="border p-3 sm:p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#1C941E]"
          value={product.price}
          onChange={handleChange}
        />

        {/* Category ID */}
        <input
          type="number"
          name="category_id"
          placeholder="Category ID"
          className="border p-3 sm:p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#1C941E]"
          value={product.category_id}
          onChange={handleChange}
        />

        {/* Brand ID */}
        <input
          type="number"
          name="brand_id"
          placeholder="Brand ID"
          className="border p-3 sm:p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#1C941E]"
          value={product.brand_id}
          onChange={handleChange}
        />

        {/* Quantity */}
        <input
          type="number"
          name="stock"
          placeholder="stock"
          className="border p-3 sm:p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#1C941E]"
          value={product.stock}
          onChange={handleChange}
        />

        {/* Image URL */}
        <input
          type="url"
          name="image_url"
          placeholder="Image URL"
          className="border p-3 sm:p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#1C941E]"
          value={product.image_url}
          onChange={handleChange}
        />

        {/* Active Status */}
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            name="is_active"
            checked={product.is_active}
            onChange={handleChange}
            className="w-5 h-5 accent-[#1C941E] cursor-pointer"
          />
          <span className="text-gray-700 font-medium">Active</span>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#1C941E] text-white py-3 sm:py-4 rounded-lg font-medium hover:bg-[#167718] transition-all duration-300"
        >
          {loading?'creating...':"Create Product"}
        </button>
        {error}
      </form>
    </div>
  );
};

export default CreateProduct;
