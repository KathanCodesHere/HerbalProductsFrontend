import React, { useState } from "react";
import { FaTrashAlt, FaShoppingCart, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Wishlist = () => {
  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Aloe Vera Shampoo",
      image: "https://img.freepik.com/free-photo/natural-herbal-shampoo-bottle-green-leaves_1150-16861.jpg",
      price: "₹499",
      desc: "Nourishing shampoo with aloe vera and hibiscus extracts.",
    },
    {
      id: 2,
      name: "Neem & Tulsi Face Cream",
      image: "https://img.freepik.com/free-photo/natural-skincare-products-green-background_1150-17221.jpg",
      price: "₹699",
      desc: "Organic moisturizer with neem and tulsi for glowing skin.",
    },
    {
      id: 3,
      name: "Amla Hair Oil",
      image: "https://img.freepik.com/free-photo/essential-oil-bottle-with-green-leaves_1150-17812.jpg",
      price: "₹399",
      desc: "Strengthens roots and promotes natural hair growth.",
    },
  ]);

  const handleRemove = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const handleAddToCart = (item) => {
    alert(`${item.name} added to cart 🛒`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaHeart className="text-green-400" />
          <span className="text-green-400">My Wishlist</span>
        </motion.h1>

        {/* Empty State */}
        {wishlist.length === 0 ? (
          <motion.div
            className="text-center bg-white shadow-md rounded-xl p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-700 text-lg">Your wishlist is empty.</p>
            <motion.button
              onClick={() => navigate("/shop")}
              className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Browse Products
            </motion.button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            <AnimatePresence>
              {wishlist.map((item) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  layout
                >
                  {/* Product Image */}
                  <div className="h-56 overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Product Info */}
                    <div className="mb-4">
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h2>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>

                    {/* Price + Buttons */}
                    <div className="mt-auto flex flex-col gap-4">
                      <div className="flex justify-center">
                        <span className="text-lg font-bold text-gray-900">{item.price}</span>
                      </div>
                      <div className="flex justify-center gap-3">
                        <motion.button
                          onClick={() => handleAddToCart(item)}
                          className="bg-green-600 text-white px-3 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition-all duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaShoppingCart /> Add
                        </motion.button>
                        <motion.button
                          onClick={() => handleRemove(item.id)}
                          className="bg-red-100 text-red-600 px-3 py-2 rounded-md flex items-center gap-2 hover:bg-red-200 transition-all duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaTrashAlt /> Remove
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Continue Shopping */}
        <div className="text-center mt-12">
          <motion.button
            onClick={() => navigate("/shop")}
            className="bg-green-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue Shopping
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
