// src/components/ProductCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // navigate(`/product/${product.id}`);
    navigate('/productsid');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      onClick={handleCardClick}
      className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-700 hover:scale-110"
          whileHover={{ rotate: 0.5, scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 120 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-green-700">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          <strong>Ingredients:</strong> {product.ingredients}
        </p>
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-bold text-green-800">{product.price}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation(); // stops card click
              navigate(`/product/${product.id}`);
            }}
            className="bg-green-600 text-white py-1 px-4 rounded-lg hover:bg-green-700 transition-all"
          >
            Buy Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
