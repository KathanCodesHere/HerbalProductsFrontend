// src/components/ProductCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaStar, FaRegStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // navigate(`/product/${product.id}`);
    navigate(`/productsid`);
  };

  const rating = product.rating ?? 0;
  const newPrice = product.newPrice ?? product.price ?? "₹0";
  const oldPrice = product.oldPrice ?? null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      onClick={handleCardClick}
      className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer flex flex-col text-center"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-700 hover:scale-110"
          whileHover={{ rotate: 0.5, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 120 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-2xl font-bold text-green-700">{product.name}</h3>
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.description}</p>

          {product.ingredients && (
            <p className="text-sm text-gray-500 mt-3">
              <strong>Ingredients:</strong> {product.ingredients}
            </p>
          )}
        </div>

        {/* Price & Rating Section */}
        <div className="mt-5">
          {/* Price */}
          <div className="flex flex-col items-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-green-800">{newPrice}</p>
            {oldPrice && (
              <p className="text-sm sm:text-base text-red-500 line-through mt-1">
                {oldPrice}
              </p>
            )}
          </div>

          {/* Rating */}
          <div className="flex justify-center items-center mt-3">
            {[...Array(5)].map((_, i) =>
              i < Math.round(rating) ? (
                <FaStar key={i} className="text-yellow-400 text-sm sm:text-base" />
              ) : (
                <FaRegStar key={i} className="text-gray-300 text-sm sm:text-base" />
              )
            )}
            <span className="text-sm text-gray-600 ml-2">
              {rating ? rating.toFixed(1) : "0.0"}
            </span>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-center items-center gap-5 mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 bg-green-600 text-white py-1 px-4 rounded-lg hover:bg-green-700 transition-all text-sm sm:text-base"
          >
            <FaShoppingCart />
            <span className="sm:inline hidden">Add to Cart</span>
            <span className="inline sm:hidden">Cart</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${product.id}`);
            }}
            className="bg-yellow-400 text-green-900 font-semibold py-1 px-4 rounded-lg hover:bg-yellow-300 transition text-sm sm:text-base"
          >
            <span className="sm:inline hidden">Buy Now</span>
            <span className="inline sm:hidden">Buy</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
