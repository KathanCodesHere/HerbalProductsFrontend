import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingCart } from "react-icons/fa";
const products = [
  {
    id: 1,
    name: "Kesh Herbal Hair Oil",
    ingredients: [
      "Coconut Oil",
      "Jojoba Oil",
      "Olive Oil",
      "Sesame Oil",
      "Arnica Oil",
      "Argan Oil",
    ],
    packSize: "200ml",
    price: 349,
    cutPrice: 499,
    rating: 4.6
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <h2 className="text-3xl sm:text-5xl md:text-4xl font-extrabold text-center text-green-800 mb-14 drop-shadow-sm">
        🌿 Our Hero Product
      </h2>

      <div className="flex flex-col items-center gap-12">
        {products.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row bg-white border-2 border-green-200 shadow-lg overflow-hidden w-[90%] max-w-5xl hover:shadow-2xl transition duration-300"
          >
            {/* Image Section */}
            <div className="md:w-1/2 w-full flex justify-center items-center bg-green-50">
              <img
                src='/product/01_page-0001.jpg'
                alt={item.name}
                className="w-full md:w-[90%] h-64 md:h-90 object-cover rounded-2xl m-4"
              />
            </div>

            {/* Product Details Section */}
            <div className="md:w-1/2 w-full p-6 md:p-8 flex flex-col justify-center text-left">
              <h3 className="text-3xl font-bold text-green-900 mb-3">
                {item.name}
              </h3>

              <p className="text-green-700 mb-2 font-medium">
                <span className="font-semibold text-green-800">Ingredients:</span>{" "}
                {item.ingredients.join(", ")}
              </p>

              <p className="text-green-700 mb-2 font-medium">
                <span className="font-semibold text-green-800">Pack Size:</span>{" "}
                {item.packSize}
              </p>

              {/* Price Section */}
              <div className="flex items-center gap-3 mt-3">
                <span className="text-2xl font-bold text-green-900">
                  ₹{item.price}
                </span>
                <span className="text-lg line-through text-gray-500">
                  ₹{item.cutPrice}
                </span>
                <span className="text-sm text-red-500 font-semibold">
                  Save ₹{item.cutPrice - item.price}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center mt-3">
                {Array.from({ length: 5 }, (_, i) => {
                  const starValue = i + 1;
                  if (item.rating >= starValue) {
                    return <FaStar key={i} className="text-yellow-400 text-lg" />;
                  } else if (item.rating >= starValue - 0.5) {
                    return (
                      <FaStarHalfAlt key={i} className="text-yellow-400 text-lg" />
                    );
                  } else {
                    return <FaRegStar key={i} className="text-gray-300 text-lg" />;
                  }
                })}
                <span className="ml-2 text-green-800 font-medium">
                  {item.rating.toFixed(1)} / 5
                </span>
              </div>


              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-6">
                <button className="bg-yellow-400 text-green-900 font-semibold px-6 py-3 rounded-xl hover:bg-yellow-300 transition w-fit">
                  Buy Now
                </button>
                <button className="flex items-center gap-2 bg-green-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-600 transition w-fit">
                  <FaShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
