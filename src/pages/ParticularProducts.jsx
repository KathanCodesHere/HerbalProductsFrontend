import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const ParticularProducts = () => {
    const product = {
    name: "Aloe Vera Herbal Shampoo",
    image:
      "https://www.kaynahealthcare.com/uploads/gallery_images/product_gallery1694079843Herbal_Shampoo_%28Ingredients%29.jpg",
    price: "₹399",
    description:
      "Experience the pure essence of Aloe Vera with our 100% herbal shampoo. It gently cleanses your scalp, strengthens roots, and leaves your hair silky smooth. Free from parabens, sulfates, and artificial fragrance.",
    benefits: [
      "Hydrates dry scalp",
      "Prevents dandruff",
      "Adds natural shine",
      "Promotes hair growth",
    ],
  };
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center py-12 px-6 font-sans">
      {/* Product Card */}
      <motion.div
        className="bg-white shadow-xl rounded-2xl p-8 max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start gap-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Product Image */}
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded-2xl shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        />

        {/* Product Info */}
        <div className="md:w-1/2">
          <motion.h1
            className="text-3xl font-bold text-green-800"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {product.name}
          </motion.h1>

          <motion.p
            className="text-gray-700 mt-4 leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {product.description}
          </motion.p>

          <motion.div
            className="text-2xl text-green-700 font-semibold mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {product.price}
          </motion.div>

          {/* Benefits List */}
          <motion.ul
            className="list-disc pl-5 mt-4 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {product.benefits.map((b, i) => (
              <li key={i} className="mt-1">
                {b}
              </li>
            ))}
          </motion.ul>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
            >
              Add to Cart
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-green-700 text-green-700 px-6 py-3 rounded-lg hover:bg-green-700 hover:text-white transition"
            >
              Buy Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ParticularProducts