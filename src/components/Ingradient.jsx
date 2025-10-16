import React from "react";

const herbs = [
  {
    id: 1,
    name: "Amla (Indian Gooseberry)",
    img: "https://i.pinimg.com/736x/e3/6c/b7/e36cb790d889096ba25cb891774accff.jpg",
    description:
      "Rich in Vitamin C, Amla strengthens hair roots, promotes hair growth, and prevents premature greying.",
    ingredients: "Vitamin C, antioxidants, amino acids, polyphenols.",
  },
  {
    id: 2,
    name: "Neem",
    img: "https://i.pinimg.com/1200x/a6/42/bc/a642bcf27516a6d645483fb58c152064.jpg",
    description:
      "Neem has antifungal and antibacterial properties that cleanse the scalp and fight dandruff naturally.",
    ingredients: "Azadirachtin, Nimbin, Quercetin, essential oils.",
  },
  {
    id: 3,
    name: "Tulsi (Holy Basil)",
    img: "https://i.pinimg.com/1200x/f2/3d/54/f23d542c8fdef687f27ad7601119d118.jpg",
    description:
      "Tulsi purifies the scalp, controls itchiness, and promotes stronger, shinier hair.",
    ingredients: "Eugenol, Vitamin K, antioxidants, iron.",
  },
  {
    id: 4,
    name: "Bhringraj",
    img: "https://i.pinimg.com/1200x/9a/e0/41/9ae0419883e0d5510135387fac62569e.jpg",
    description:
      "Known as the ‘King of Herbs’ for hair, Bhringraj prevents hair fall and helps in hair regeneration.",
    ingredients: "Ecliptine, wedelolactone, alkaloids, flavonoids.",
  },
  {
    id: 5,
    name: "Brahmi",
    img: "https://i.pinimg.com/1200x/cd/60/9e/cd609e24c8000e7a0d22185dce47e3ba.jpg",
    description:
      "Brahmi nourishes the scalp, reduces stress, and helps in maintaining healthy, thick hair.",
    ingredients: "Bacosides, saponins, alkaloids, sterols.",
  },
  {
    id: 6,
    name: "Shikakai",
    img: "https://i.pinimg.com/1200x/a7/2e/4d/a72e4d2eeba9b8773f6f772c103fadb2.jpg",
    description:
      "A natural cleanser that strengthens hair roots and adds softness and shine.",
    ingredients: "Saponins, vitamins A, D, E, and K.",
  },
  {
    id: 7,
    name: "Aloe Vera",
    img: "https://i.pinimg.com/736x/5d/6a/59/5d6a59f1d26cd5471a3427740c86d7ec.jpg",
    description:
      "Soothes the scalp, locks in moisture, and repairs damaged hair naturally.",
    ingredients: "Aloin, vitamins B12, A, C, E, enzymes, amino acids.",
  },
  {
    id: 8,
    name: "Ashwagandha",
    img: "https://i.pinimg.com/1200x/31/ec/ec/31ecec718ee308c62ff1a8e1fcf1c88f.jpg",
    description:
      "Reduces stress-related hair fall and rejuvenates hair follicles.",
    ingredients: "Withanolides, alkaloids, iron, antioxidants.",
  },
  {
    id: 10,
    name: "Mulethi (Licorice Root)",
    img: "https://i.pinimg.com/1200x/36/59/cb/3659cbf01b8f6619d0f06edc19651a31.jpg",
    description:
      "Prevents scalp infections, reduces hair loss, and adds smoothness.",
    ingredients: "Glycyrrhizin, flavonoids, saponins, coumarins.",
  },
];

const AyurvedicHerbs = () => {
  return (
    <section className="py-20 bg-green-50 text-center">
      <h2 className="text-4xl font-extrabold text-green-900 mb-12 drop-shadow-sm">
        🌿 Ayurvedic Herbs & Natural Ingredients
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {herbs.map((herb) => (
          <div
            key={herb.id}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl p-6 transition-transform hover:scale-105 duration-300 border border-green-100"
          >
            <img
              src={herb.img}
              alt={herb.name}
              className="w-full h-56 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-2xl font-bold text-green-800">{herb.name}</h3>
            <p className="text-green-700 mt-2">{herb.description}</p>
            <p className="text-sm text-green-600 mt-3">
              <span className="font-semibold text-green-900">Key Components:</span>{" "}
              {herb.ingredients}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AyurvedicHerbs;
