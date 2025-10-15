const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-green-100 py-16 text-center">
        <h1 className="text-4xl font-bold text-green-800">
          Welcome to Nature’s Essence 🌿
        </h1>
        <p className="mt-4 text-lg text-green-700">
          100% Herbal Shampoos made with love and purity.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition">
          Shop Now
        </button>
      </section>

      {/* Product Section */}
      <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-semibold text-green-800 mb-8">
          Our Best Herbal Shampoos
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Aloe Vera Shampoo",
              img: "https://m.media-amazon.com/images/I/61njsOj715L._SL1080_.jpg",
              desc: "Hydrates and nourishes your hair naturally.",
            },
            {
              name: "Neem & Tulsi Shampoo",
              img: "https://tse2.mm.bing.net/th/id/OIP._QTg0LY9D83VFY1qY_GsowHaHa?cb=12&pid=Api",
              desc: "Fights dandruff and keeps scalp fresh.",
            },
            {
              name: "Hibiscus Shine Shampoo",
              img: "https://zinniaco.in/wp-content/uploads/2024/10/3-2.png",
              desc: "Adds natural shine and softness to your hair.",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="bg-green-50 rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-56 object-cover rounded-xl"
              />
              <h3 className="text-xl font-semibold mt-4 text-green-700">
                {item.name}
              </h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-green-50 px-8 text-center">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">About Us</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          We believe that beauty comes from nature. Our shampoos are crafted
          using pure herbs and essential oils to make your hair stronger,
          smoother, and naturally beautiful — without any harmful chemicals.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-6 text-center">
        <p>
          © {new Date().getFullYear()} Nature’s Essence | All Rights Reserved
        </p>
        <p className="mt-2 text-sm">Contact us: support@naturesessence.com</p>
      </footer>
    </div>
  );
};

export default Home;
