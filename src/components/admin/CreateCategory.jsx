import React, { useState } from "react";

const CreateCategory = () => {
  const [category, setCategory] = useState({ name: "", description: "" });

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Category Created:", category);
    alert("✅ Category created successfully (dummy action)");
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-md">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#023918] text-center">
        Create Category
      </h2>
      <form
        className="flex flex-col gap-4 sm:gap-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Category Name"
          className="border p-3 sm:p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#1C941E]"
          value={category.name}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Category Description"
          className="border p-3 sm:p-4 rounded-lg w-full resize-none focus:outline-none focus:ring-2 focus:ring-[#1C941E]"
          rows="3"
          value={category.description}
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          className="bg-[#1C941E] text-white py-3 sm:py-4 rounded-lg font-medium hover:bg-[#167718] transition-all duration-300"
        >
          Create Category
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
