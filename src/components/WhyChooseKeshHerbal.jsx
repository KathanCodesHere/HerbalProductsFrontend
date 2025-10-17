// src/components/WhyChooseKeshHerbal.jsx
import React, { useEffect, useRef } from "react";
import { Leaf, Heart, ShieldCheck } from "lucide-react";

const WhyChooseKeshHerbal = () => {
  const scrollRef = useRef(null);

  // 👇 Auto-scroll a bit on mobile
  useEffect(() => {
    const container = scrollRef.current;
    if (window.innerWidth < 768 && container) {
      container.scrollTo({ left: 30, behavior: "smooth" });
    }
  }, []);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 md:px-10">
      {/* 🌿 Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#023918] mb-12">
        Why <span className="text-[#1C941E]">Kesh Herbal?</span>
      </h2>

      {/* 🌿 Cards Container */}
      <div
        ref={scrollRef}
        className="
          flex 
          flex-nowrap
          lg:flex-wrap 
          lg:justify-center
          overflow-x-auto 
          lg:overflow-visible 
          gap-8 sm:gap-10
          scroll-smooth
          pb-4
          no-scrollbar
          mx-auto
          max-w-7xl
        "
      >
        {/* Card 1 */}
        <div className="flex-shrink-0 w-[85%] sm:w-[70%] md:w-[60%] lg:w-[30%] text-center px-4">
          <div className="flex justify-center mb-4">
            <Leaf className="text-[#1C941E] w-10 h-10" />
          </div>
          <h3 className="text-2xl font-semibold text-[#023918] mb-3">
            Handmade with Original Ingredients
          </h3>
          <p className="text-[#1C941E] leading-relaxed text-base md:text-lg font-sans">
            Every Kesh Herbal product is crafted by hand using pure oils like
            coconut, jojoba, olive, and sesame. We avoid synthetic chemicals and
            preserve the authenticity of natural ingredients — ensuring your
            hair receives nothing but pure, herbal care.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex-shrink-0 w-[85%] sm:w-[70%] md:w-[60%] lg:w-[30%] text-center px-4">
          <div className="flex justify-center mb-4">
            <Heart className="text-[#1C941E] w-10 h-10" />
          </div>
          <h3 className="text-2xl font-semibold text-[#023918] mb-3">
            Made with Love & Traditional Care
          </h3>
          <p className="text-[#1C941E] leading-relaxed text-base md:text-lg font-sans">
            Inspired by age-old Ayurvedic secrets, each Kesh Herbal formula is a
            reflection of Indian heritage and devotion. Our blends are designed
            to strengthen, nourish, and rejuvenate your hair naturally — because
            true beauty begins with nature’s touch.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex-shrink-0 w-[85%] sm:w-[70%] md:w-[60%] lg:w-[30%] text-center px-4">
          <div className="flex justify-center mb-4">
            <ShieldCheck className="text-[#1C941E] w-10 h-10" />
          </div>
          <h3 className="text-2xl font-semibold text-[#023918] mb-3">
            Safe & Sustainable Products for you
          </h3>
          <p className="text-[#1C941E] leading-relaxed text-base md:text-lg font-sans">
            Our commitment goes beyond great hair — we ensure every product is
            cruelty-free, eco-friendly, and packaged sustainably. Kesh Herbal
            promotes wellness that’s safe for you and gentle on the planet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseKeshHerbal;
