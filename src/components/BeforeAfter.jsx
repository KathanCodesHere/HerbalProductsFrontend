// src/components/BeforeAfter.jsx
import React from "react";

const BeforeAfter = () => {
  return (
    <section className="py-16 bg-green-50 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#023918] mb-8">
        After Using Our Product
      </h2>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Image */}
        <div className="mb-6 ">
          <img
            src="/product/before.jpg" // Replace with your image path
            alt="After using Kesh Herbal"
            className="w-full h-[330px] sm:h-[350px] md:h-[380px] lg:h-[400px] xl:h-[450px] rounded-md shadow-md object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-green-800 text-base sm:text-lg leading-relaxed">
          Experience healthier, stronger, and thicker hair with Kesh Herbal’s
          all-natural products. Say goodbye to hair fall and hello to shiny,
          nourished hair that grows naturally.
        </p>
      </div>
    </section>
  );
};

export default BeforeAfter;
