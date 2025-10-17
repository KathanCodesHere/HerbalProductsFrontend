import React from "react";
import Hero from "../Hero";
import FeaturedProducts from "../FeaturedProducts";
import AboutHome from "../AboutHome";
import Ingredients from "../Ingredients";
import WhyChooseKeshHerbal from "../WhyChooseKeshHerbal";
import Benefits from "../Benefits";
import BeforeAfter from "../BeforeAfter";
import FAQs from "../FAQs";
import Reviews from "../Reviews";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section should span full viewport width */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        <Hero />
      </div>

      {/* Other sections remain normal */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
        <FeaturedProducts />
        <WhyChooseKeshHerbal />
        <Ingredients />
        <BeforeAfter/>
        <Benefits/>
        <Reviews/>
        <AboutHome />
        <FAQs/>
      </div>
    </div>
  );
};

export default Home;
