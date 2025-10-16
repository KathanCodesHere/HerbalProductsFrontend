import React from "react";

const products = [
  {
    id: 1,
    name: "Aloe Vera Shampoo",
    description: "Soothes scalp & strengthens roots",
    img: "https://i.pinimg.com/736x/25/63/a1/2563a1c34e56e4f3188e335e204483b2.jpg",
  },
  {
    id: 2,
    name: "Neem Herbal Shampoo",
    description: "Fights dandruff naturally",
    img: "https://i.pinimg.com/1200x/8a/3f/97/8a3f97243d6d7a3cd92e72137a569200.jpg",
  },
  {
    id: 3,
    name: "Hibiscus Shampoo",
    description: "Adds natural shine and bounce",
    img: "https://i.pinimg.com/736x/f1/03/31/f1033170fe8c5729c060f17018cabb39.jpg",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-green-50 to-white text-center">
      <h2 className="text-4xl font-extrabold text-green-800 mb-12 drop-shadow-sm">
        🌿 Our Herbal Shampoo Collection
      </h2>

      <div className="flex justify-center gap-10 flex-wrap">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-green-100 rounded-3xl shadow-lg p-6 w-80 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="rounded-2xl w-full h-56 object-cover shadow-md"
            />
            <h3 className="text-2xl font-bold text-green-900 mt-5">
              {item.name}
            </h3>
            <p className="text-green-700 text-base mt-3">{item.description}</p>
            <button className="mt-5 bg-yellow-400 text-green-900 font-semibold px-6 py-2 rounded-xl hover:bg-yellow-300 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
