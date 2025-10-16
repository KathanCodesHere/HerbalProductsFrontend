import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-green-100 py-20 text-center"
    >
      <h1 className="text-4xl font-bold text-green-800">
        Welcome to Nature’s Essence 🌿
      </h1>
      <p className="mt-4 text-lg text-green-700">
        100% Herbal Shampoos made with love and purity.
      </p>
      <button className="mt-6 px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition">
        Shop Now
      </button>
    </section>
  );
};

export default Hero;
