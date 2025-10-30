import React, { useState } from "react";
import { useAdmin } from "../../hooks/useAdmin";
const CreateCategory = () => {
  const {loading , error, createCategoryAd}=useAdmin();
  const [category, setCategory] = useState({
    name: "",
    description: "",
    is_active: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCategory({
      ...category,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log("Category Created:", category);
    try{
      const data=await createCategoryAd(category);
      console.log(data);
      alert("✅ Category created successfully");
    }
    catch(err){
      console.log(err)
    }
    
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
        {/* Category Name */}
        <input
          type="text"
          name="name"
          placeholder="Category Name"
          className="border p-3 sm:p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#1C941E]"
          value={category.name}
          onChange={handleChange}
        />

        {/* Category Description */}
        <textarea
          name="description"
          placeholder="Category Description"
          rows="3"
          className="border p-3 sm:p-4 rounded-lg w-full resize-none focus:outline-none focus:ring-2 focus:ring-[#1C941E]"
          value={category.description}
          onChange={handleChange}
        ></textarea>

        {/* Active Toggle */}
        <label className="flex items-center gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            name="is_active"
            checked={category.is_active}
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
          {loading?'creating ...':'Create Category'}
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
