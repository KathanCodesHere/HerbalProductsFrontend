import React from "react";

const products = [
  {
    id: 1,
    name: "Aloe Vera Shampoo",
    description: "Soothes scalp & strengthens roots",
    // img: "https://images.unsplash.com/photo-1612277795229-6a6e1b6cb6b0",
    img: "https://images.unsplash.com/photo-1630398917451-1a409990fbc5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
  },
  {
    id: 2,
    name: "Neem Herbal Shampoo",
    description: "Fights dandruff naturally",
    img: "https://images.unsplash.com/photo-1629198730666-3c8c1f77b25b",
  },
  {
    id: 3,
    name: "Hibiscus Shine Shampoo",
    description: "Adds natural shine and bounce",
    img: "https://images.unsplash.com/photo-1598514982901-308e36df9e59",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold text-green-800 mb-10">Our Products</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-green-50 rounded-2xl shadow-md p-4 w-64 hover:shadow-lg transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="rounded-xl w-full h-40 object-cover"
            />
            <h3 className="text-xl font-bold text-green-800 mt-4">{item.name}</h3>
            <p className="text-green-700 text-sm mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
