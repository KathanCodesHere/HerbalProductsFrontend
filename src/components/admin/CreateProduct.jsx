import React, { useState } from "react";

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Created:", product);
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
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="border p-3 sm:p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#1C941E]"
          value={product.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="border p-3 sm:p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#1C941E]"
          value={product.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="border p-3 sm:p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#1C941E]"
          value={product.category}
          onChange={handleChange}
        />
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          className="border p-3 sm:p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#1C941E]"
          value={product.image}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-[#1C941E] text-white py-3 sm:py-4 rounded-lg font-medium hover:bg-[#167718] transition-all duration-300"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
