import React from "react";

const HerbalInfoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14 px-6">
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-center  md:text-left">
          <h2 className="text-4xl font-extrabold text-green-800 mb-4">
            Experience the Power of Ayurveda 
          </h2>
          <p className="text-green-700 text-lg my-10 font-sans text-justify">
            Kesh Herbal is a trusted name in natural haircare, dedicated to providing premium-quality herbal solutions for strong, healthy, and beautiful hair. Our signature <span className="font-bold">Kesh Herbal Hair Oil</span> is a unique blend of <span className="font-semibold">coconut, jojoba, olive, sesame, arnica, and argan oils</span>, crafted to deeply nourish the scalp, reduce hair fall, and promote natural shine. Embrace nature’s essence with Kesh Herbal.

          </p>
          <button className="bg-yellow-400 text-green-900 font-semibold px-8 py-3 rounded-xl hover:bg-yellow-300 transition duration-300 shadow-md">
            Learn More
          </button>
        </div>
        {/* Right Side - Image */}
        <div className="md:w-1/2">
          <img
            src="/product/02_page-0001.jpg"
            alt="Herbal Ingredients"
            className="rounded-3xl shadow-xl w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default HerbalInfoSection;
