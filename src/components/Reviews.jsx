// src/components/Reviews.jsx
import React from "react";
import { FaStar, FaRegStar, FaUserCircle } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Aarav Mehta",
    profile: "/profiles/user1.jpg",
    rating: 5,
    title: "Amazing Product!",
    review:
      "I’ve been using this oil for a month and my hair feels so much healthier and stronger. Highly recommend it!",
  },
  {
    id: 2,
    name: "Priya Sharma",
    profile: "/profiles/user2.jpg",
    rating: 4,
    title: "Visible Results",
    review:
      "The product really works! I noticed a reduction in hair fall after two weeks. The fragrance is also nice.",
  },
  {
    id: 3,
    name: "Rohit Verma",
    profile: "/profiles/user3.jpg",
    rating: 5,
    title: "Worth Every Penny!",
    review:
      "This herbal oil revived my dull hair. The natural ingredients are the best part — no chemicals at all.",
  },
  {
    id: 4,
    name: "Sneha Patel",
    profile: "/profiles/user4.jpg",
    rating: 4,
    title: "Good Quality",
    review:
      "I love how non-sticky and light it feels. Great packaging and quick delivery too!",
  },
];

const ratingDistribution = [
  { stars: 5, percent: 70 },
  { stars: 4, percent: 20 },
  { stars: 3, percent: 6 },
  { stars: 2, percent: 3 },
  { stars: 1, percent: 1 },
];

const Reviews = () => {
  const averageRating = 4.8;
  const totalReviews = 335;

  return (
    <section className="bg-green-50 py-16 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#023918] mb-10">
          Customer Reviews
        </h2>

        {/* Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              {/* Rating Stars */}
              <div className="flex mb-2 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) =>
                  i < r.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                )}
              </div>

              {/* Profile + Name */}
              <div className="flex items-center gap-3 mb-3">
                <FaUserCircle className="text-4xl text-[#1C941E]" />

                <span className="font-semibold text-[#023918]">{r.name}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#1C941E] mb-1">
                {r.title}
              </h3>

              {/* Review */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {r.review}
              </p>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-[#023918] mb-2">
            {averageRating} <span className="text-yellow-500">★</span> out of 5
          </h3>
          <p className="text-gray-600 mb-6">
            Based on {totalReviews} customer reviews
          </p>

          {/* Rating Distribution */}
          <div className="space-y-2 mb-6">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-3">
                <span className="w-10 text-sm font-semibold text-[#023918]">
                  {item.stars} ★
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#1C941E] h-2 rounded-full"
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500">
                  {item.percent}%
                </span>
              </div>
            ))}
          </div>

          {/* Write a Review Button */}
          <button className="mt-4 px-8 py-3 bg-[#023918] text-white font-semibold rounded-xl shadow-md hover:bg-[#1C941E] transition">
            Write a Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
