// src/components/WhyChooseKeshHerbal.jsx
import React from "react";
import { Leaf, Heart } from "lucide-react";

const WhyChooseKeshHerbal = () => {
  return (
    <section className="bg-green-50 py-14 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-10">
        Why Choose <span className="text-green-600">Kesh Herbal?</span>
      </h2>

      <div className="max-w-3xl mx-auto space-y-10 text-gray-700">
        {/* Point 1 */}
        <div>
          <div className="flex justify-center mb-3">
            <Leaf className="text-green-700 w-8 h-8" />
          </div>
          <h3 className="text-2xl font-semibold text-green-900 mb-2">
            Handmade with Original Ingredients
          </h3>
          <p className="leading-relaxed text-base md:text-lg">
            Every Kesh Herbal product is crafted by hand using pure oils like
            coconut, jojoba, olive, and sesame. We avoid synthetic chemicals and
            preserve the authenticity of natural ingredients — ensuring your
            hair receives nothing but pure, herbal care.
          </p>
        </div>

        {/* Point 2 */}
        <div>
          <div className="flex justify-center mb-3">
            <Heart className="text-green-700 w-8 h-8" />
          </div>
          <h3 className="text-2xl font-semibold text-green-900 mb-2">
            Made with Love & Traditional Care
          </h3>
          <p className="leading-relaxed text-base md:text-lg">
            Inspired by age-old Ayurvedic secrets, each Kesh Herbal formula is a
            reflection of Indian heritage and devotion. Our blends are designed
            to strengthen, nourish, and rejuvenate your hair naturally — because
            true beauty begins with nature’s touch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseKeshHerbal;
