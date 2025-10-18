// src/pages/Products.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import productsData from "../../data/productsData";
import { FaStar, FaShoppingCart } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useProducts } from "../../hooks/useProducts";
const Products = () => {
  const {loading, error, getAllProducts}=useProducts();
  const [productsData, setProductsData] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    const fetchAllProducts=async()=>{
      try{
        const res=await getAllProducts();
        console.log(res);
        setProductsData(res.data.items);
        console.log(productsData);
      }
      catch(err){
        console.log(err);
      }
    }
    fetchAllProducts();
  },[])

  
  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
    console.log("we clicke ")
    // navigate(`/productsid`);
  };

  return (
    <section className="bg-green-50 py-10 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl pt-2 font-bold text-[#023918]">
            Our Herbal Products
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Explore our range of 100% natural and herbal wellness products.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8" >

          {productsData.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.02 }}
              className="relative bg-white rounded-xl shadow-md overflow-hidden group transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-84 object-cover transition-all duration-300 group-hover:border-4 group-hover:border-green-700"
                />

                {/* Buttons */}
                <div
                  className={`
                    absolute bottom-4 right-4 flex flex-col gap-2
                    opacity-100 sm:opacity-0 sm:group-hover:opacity-100
                    transition-opacity duration-300
                  `}
                >
                  <button className="bg-[#023918] text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-[#1C941E] transition">
                    Buy Now
                  </button>
                  <button className="bg-white text-[#023918] text-sm px-4 py-2 rounded-lg shadow-md border border-green-700 hover:bg-green-100 flex items-center justify-center gap-2 transition">
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 text-center" onClick={() => handleCardClick(product.id)}>
                <h3 className="text-md font-semibold text-[#023918]">
                  {product.name}
                </h3>
                  
                {/* Price Section */}
                <div className="mt-3 flex items-center justify-center gap-2">
                  <span className="text-gray-500 line-through">
                    ₹{product.oldPrice}
                  </span>
                  <span className="text-red-600 font-bold">
                    ₹{product.price}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex justify-center items-center mt-2 text-yellow-500">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < product.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
