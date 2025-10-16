import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For page navigation

const Hero = () => {
  const images = [
    // "https://i.pinimg.com/736x/27/0a/43/270a4364058dcdd62781c8be950cccd7.jpg",
    "https://i.pinimg.com/1200x/a9/cc/51/a9cc5175db9327a5b5065de33cdde151.jpg",
    // "https://i.pinimg.com/1200x/77/10/ad/7710adbd47c5893e0042b2b97b872273.jpg",
    "https://i.pinimg.com/1200x/1f/55/f6/1f55f612aa2d23dfb68b474b5ba728c2.jpg",
    "https://i.pinimg.com/1200x/3a/ca/17/3aca1769221d7f8e1bacb8d969df27cc.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleShopNow = () => {
    navigate("/products"); // redirect to product page
  };

  return (
    <section
      id="home"
      className="relative h-[70vh] w-[90vw] mx-auto flex items-center justify-center text-center overflow-hidden rounded-2xl shadow-2xl"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Herbal Background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-70" : "opacity-0"
            }`}
          />
        ))}
        {/* Black gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Highlighted Text Box */}
      <div className="relative p-10 rounded-2xl text-white max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-300 drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">
  Jadoo Ayurveda Ka, Pyaar Nature Ka 💚
</h1>


        <p className="mt-4 text-xl font-medium text-yellow-100 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
          100% Herbal Haircare for strong, silky, and nourished hair — naturally!
        </p>
        <button
          onClick={handleShopNow}
          className="mt-6 px-8 py-3 bg-green-400 text-White-900 font-bold rounded-xl shadow-md hover:bg-white-300 hover:scale-105 transition-transform duration-300"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
