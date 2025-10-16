// src/pages/Products.jsx
import React from "react";
import productsData from "../data/productsData";
import ProductCard from "../components/productCard";

const Products = () => {
  return (
    <section className="bg-green-50 py-18 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl pt-2 font-bold text-green-700">
            Our Herbal Products
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Explore our range of 100% natural and herbal wellness products.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
