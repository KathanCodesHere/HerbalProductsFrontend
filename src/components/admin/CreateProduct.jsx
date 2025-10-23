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
    alert("Product created successfully (dummy action)");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-[#023918]">Create Product</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="border p-3 rounded-lg"
          value={product.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="border p-3 rounded-lg"
          value={product.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="border p-3 rounded-lg"
          value={product.category}
          onChange={handleChange}
        />
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          className="border p-3 rounded-lg"
          value={product.image}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-[#1C941E] text-white p-3 rounded-lg hover:bg-[#167718]"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
