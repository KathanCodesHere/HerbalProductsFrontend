import React from "react";
import { motion } from "framer-motion";

const herbs = [
  {
    id: 1,
    name: "Coconut Oil",
    description:
      "Nourishes the scalp, strengthens roots, and gives hair a soft, natural shine.",
  },
  {
    id: 2,
    name: "Argan Oil",
    description:
      "Repairs damage, tames frizz, and restores smoothness with rich nutrients.",
  },
  {
    id: 3,
    name: "Sesame Seeds",
    description:
      "Improves scalp health, prevents greying, and strengthens hair naturally.",
  },
  {
    id: 4,
    name: "Olive Oil",
    description:
      "Locks in moisture, prevents split ends, and adds a healthy glow.",
  },
  {
    id: 5,
    name: "Jojoba Oil",
    description:
      "Balances scalp oils, unclogs follicles, and promotes thicker growth.",
  },
  {
    id: 6,
    name: "Arnica Oil",
    description:
      "Reduces dandruff, prevents breakage, and revitalizes dull hair.",
  },
];

const Ingredients = () => {
  return (
    <section className="py-20 bg-green-50 text-center overflow-hidden">
      <h2 className="text-4xl font-extrabold text-green-900 mb-16 drop-shadow-sm">
        🌿 Ayurvedic Ingredients that Power Kesh Herbal
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 px-4 sm:px-6 lg:px-8">
        {/* First 3 Herbs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
          {herbs.slice(0, 3).map((herb, index) => (
            <motion.div
              key={herb.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2">
                {herb.name}
              </h3>
              <p className="text-green-700 text-sm sm:text-base leading-snug">
                {herb.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 bg-white p-4 sm:p-6  shadow-xl border-4 border-green-300"
        >
          <img
            src='/product/ing.jpg'
            alt="Kesh Herbal Hair Oil"
            className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80  object-cover"
          />
        </motion.div>

        {/* Last 3 Herbs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
          {herbs.slice(3, 6).map((herb, index) => (
            <motion.div
              key={herb.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2">
                {herb.name}
              </h3>
              <p className="text-green-700 text-sm sm:text-base leading-snug">
                {herb.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
