import React, { useState } from "react";

const CreateCategory = () => {
  const [category, setCategory] = useState({ name: "", description: "" });

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Category Created:", category);
    alert("Category created successfully (dummy action)");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-[#023918]">Create Category</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Category Name"
          className="border p-3 rounded-lg"
          value={category.name}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Category Description"
          className="border p-3 rounded-lg"
          rows="3"
          value={category.description}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="bg-[#1C941E] text-white p-3 rounded-lg hover:bg-[#167718]"
        >
          Create Category
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
