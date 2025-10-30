import React,{useEffect,useState} from "react";
import {useAdmin} from '../../hooks/useAdmin'

const AllCategories = () => {

  const [categories,setCategories]=useState([]);
  const {getAllCategoryAd}=useAdmin();
    useEffect(()=>{
        const fetchData=async()=>{
            console.log("fetch data method");
            try{
                const data=await getAllCategoryAd();
                // console.log(data.data.categories);
                setCategories(data.data.categories)

            }
            catch(err){
                console.log(err);
            }
        }
        fetchData();
    },[]);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-md overflow-x-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#023918] text-center">
        All Categories
      </h2>

      <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-[#023918] text-white">
          <tr>
            <th className="py-3 px-4 text-left text-sm sm:text-base">ID</th>
            <th className="py-3 px-4 text-left text-sm sm:text-base">Name</th>
            <th className="py-3 px-4 text-left text-sm sm:text-base">Description</th>
            <th className="py-3 px-4 text-left text-sm sm:text-base">Created At</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCategories;
