import React from "react";

const benefitsData = [
  {
    id: 1,
    title: "Provides Strong Hair",
    desc: "The best oil for strong hair roots — it nourishes your scalp with all the essential nutrients necessary to ensure strong and healthy hair.",
    img: "/benefits/be3.jpg", // replace with your actual image
  },
  {
    id: 2,
    title: "Reduces Dandruff",
    desc: "Encourages the growth of hair and conditions the hair shafts. It also detangles and soothes dandruff formation and consecutive itchiness.",
    img: "/benefits/be2.jpg",
  },
  {
    id: 3,
    title: "Nourishes Scalp",
    desc: "Provides essential nutrients, keeping the scalp healthy, hydrated, and free from dandruff.",
    img: "/benefits/be1.jpg",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 px-6 bg-white text-center">
      {/* 🌿 Section Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#023918] mb-16">
        Benefits
      </h2>

      {/* 🪴 Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
        {benefitsData.map((benefit) => (
          <div
            key={benefit.id}
            className="flex flex-col items-center text-center"
          >
            <img
              src={benefit.img}
              alt={benefit.title}
              className="w-85 h-60 object-cover mb-6 shadow-lg"
            />
            <h3 className="text-2xl font-semibold text-[#1C941E] mb-4">
              {benefit.title}
            </h3>
            <p className="text-gray-700 leading-relaxed font-sans text-base max-w-sm">
              {benefit.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
