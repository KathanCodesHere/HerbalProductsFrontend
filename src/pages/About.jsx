import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 via-lime-50 to-green-100 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* 🌿 Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6 leading-tight">
            Discover the Power of <span className="text-green-600">Nature</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At <span className="font-semibold text-green-700">HerbalHearts</span>, we
            believe that true beauty comes from harmony with nature. Our herbal
            range—especially our signature{" "}
            <span className="text-green-700 font-semibold">Herbal Shampoo</span>—is
            crafted from pure plant-based ingredients, designed to nourish your
            hair and skin the natural way.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            We blend traditional Ayurvedic wisdom with modern formulations to
            deliver high-quality, eco-conscious products. No parabens, no
            sulfates—just the healing touch of herbs.
          </p>

          <a
            href="/products"
            className="inline-block bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow-md
                       hover:bg-green-800 transition-all duration-300 hover:shadow-lg"
          >
            Explore Our Range
          </a>
        </motion.div>

        {/* 🌱 Right Image Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-5 justify-items-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Image 1 */}
          <div className="col-span-1">
            <img
              src="https://plus.unsplash.com/premium_photo-1694412516047-c9ef201f9564?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXl1cnZlZGljJTIwaGVyYnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
              alt="Herbal Ingredients"
              className="rounded-2xl shadow-lg w-40 h-40 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Image 2 */}
          <div className="col-span-1 mt-6 sm:mt-40">
            <img
              src="https://images.unsplash.com/photo-1705083649602-03c5fbae2e89?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXl1cnZlZGljJTIwaGVyYnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
              alt="Herbal Shampoo"
              className="rounded-2xl shadow-lg w-40 h-40 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Image 3 */}
          <div className="col-span-1 sm:col-span-1 mt-2 sm:mt-0">
            <img
              src="https://images.unsplash.com/photo-1711302764367-7b87c8f41980?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF5dXJ2ZWRpYyUyMGhlcmJzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
              alt="Natural Oils"
              className="rounded-2xl shadow-lg w-40 h-40 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
