import React from "react";
import { motion } from "framer-motion";

const herbs = [
  {
    id: 1,
    name: "Coconut Oil",
    description:
      "Nourishes the scalp, strengthens roots, and gives hair a soft, natural shine.",
    img: "/ingredients/COCONUT OIL.png",
  },
  {
    id: 2,
    name: "Argan Oil",
    description:
      "Repairs damage, tames frizz, and restores smoothness with rich nutrients.",
    img: "/ingredients/ARGAN OIL.png",
  },
  {
    id: 3,
    name: "Sesame Seeds",
    description:
      "Improves scalp health, prevents greying, and strengthens hair naturally.",
    img: "/ingredients/SESAME OIL.png",
  },
  {
    id: 4,
    name: "Olive Oil",
    description:
      "Locks in moisture, prevents split ends, and adds a healthy glow.",
    img: "/ingredients/OLIVE OIL.png",
  },
  {
    id: 5,
    name: "Jojoba Oil",
    description:
      "Balances scalp oils, unclogs follicles, and promotes thicker growth.",
    img: "/ingredients/JOJOBA OIL.png",
  },
  {
    id: 6,
    name: "Arnica Oil",
    description:
      "Reduces dandruff, prevents breakage, and revitalizes dull hair.",
    img: "/ingredients/ARNICA OIL.png",
  },
];

const Ingredients = () => {
  return (
    <section className="py-20 bg-green-50 text-center overflow-hidden">
      <h2 className="sm:text-4xl  lg:text-4xl   font-extrabold text-[#023918] mb-16 drop-shadow-sm">
        Key Ingredients
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid of Ingredient Cards */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {herbs.map((herb, index) => (
            <motion.div
              key={herb.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-start xs:items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl hover:-translate-y-1 transition-all duration-300 h-auto sm:h-32"
            >
              {/* Left - Image */}
              <div className="flex-shrink-0">
                <img
                  src={herb.img}
                  alt={herb.name}
                  className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 object-contain rounded-full border-2 border-green-200 shadow-sm"
                />
              </div>

              {/* Right - Text */}
              <div className="text-left">
                <h3 className="text-lg xs:text-xl font-bold text-[#1C941E] mb-1">
                  {herb.name}
                </h3>
                <p className="text-green-800 text-xs xs:text-sm sm:text-base leading-snug">
                  {herb.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Product Image at the End */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 bg-white p-4 sm:p-6 shadow-xl border-4 border-green-300 mt-10 mx-auto w-64 sm:w-72 md:w-80 lg:w-96"
        >
          <img
            src="/product/ing.jpg"
            alt="Kesh Herbal Hair Oil"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Ingredients;
