import React from "react";

const HerbalInfoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        
        {/* Left Side - Image */}
        <div className="md:w-1/2">
          <img
            src="https://i.pinimg.com/736x/8d/a3/3f/8da33fe5dfaa8fbbbf0f94180b84a6f4.jpg"
            alt="Herbal Ingredients"
            className="rounded-3xl shadow-xl w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-green-800 mb-4">
            Experience the Power of Ayurveda 🌱
          </h2>
          <p className="text-green-700 text-lg mb-6">
            Our herbal shampoos are enriched with the essence of age-old Ayurvedic 
            ingredients like Amla, Bhringraj, and Neem — carefully blended to 
            strengthen your hair naturally. We believe in purity, sustainability, 
            and the timeless benefits of nature for holistic hair care.
          </p>
          <button className="bg-yellow-400 text-green-900 font-semibold px-8 py-3 rounded-xl hover:bg-yellow-300 transition duration-300 shadow-md">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HerbalInfoSection;
