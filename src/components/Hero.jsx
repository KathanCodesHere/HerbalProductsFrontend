import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const mobileImages = [
    "/hero/M1.jpg",
    "/hero/M2.jpg",
    "/hero/M3.jpg",
    "/hero/M4.jpg",
  ];
  const tabletImages = [
    "/hero/T1.jpg",
    "/hero/T2.jpg",
    "/hero/T3.jpg",
    "/hero/T4.jpg",
  ];
  const desktopImages = [
    "/hero/D1.jpg",
    "/hero/D2.jpg",
    "/hero/D3.jpg",
    "/hero/D4.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let images = desktopImages;
  if (windowWidth < 640) images = mobileImages;
  else if (windowWidth >= 640 && windowWidth < 1024) images = tabletImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000); // Slide every 7 seconds
    return () => clearInterval(interval);
  }, [images]);

  // Set container height based on screen size
  let containerHeight = "h-[36.5vw]"; // Desktop/Laptop (3000x1094)
  if (windowWidth < 640) containerHeight = "h-[108vw]"; // Mobile 1080x1080
  else if (windowWidth >= 640 && windowWidth < 1024) containerHeight = "h-[50vw]"; // Tablet 1220x600

  // Text for strips (duplicated for infinite scrolling effect)
  const topStripText = [
    "Get 25% off when you shop ₹999 or more ✨",
    "Free shipping on orders above ₹1499 🚚",
    "Limited time offer — grab it now! 💥",
    "Get 25% off when you shop ₹999 or more ✨",
    "Free shipping on orders above ₹1499 🚚",
    "Get 25% off when you shop ₹999 or more ✨",
    "Free shipping on orders above ₹1499 🚚",
    "Limited time offer — grab it now! 💥",
    "Get 25% off when you shop ₹999 or more ✨",
    "Free shipping on orders above ₹1499 🚚",
    "Get 25% off when you shop ₹999 or more ✨",
    "Free shipping on orders above ₹1499 🚚",
    "Limited time offer — grab it now! 💥",
    "Get 25% off when you shop ₹999 or more ✨",
    "Free shipping on orders above ₹1499 🚚",
  ];

  const bottomStripText = [
    "No coupon needed — save money this Diwali Offer! 🪔",
    "Shop our herbal hair care collection now! 🌿",
    "Hurry! Limited stock available ⏰",
    "No coupon needed — save money this Diwali Offer! 🪔",
    "Shop our herbal hair care collection now! 🌿",
    "No coupon needed — save money this Diwali Offer! 🪔",
    "Shop our herbal hair care collection now! 🌿",
    "Hurry! Limited stock available ⏰",
    "No coupon needed — save money this Diwali Offer! 🪔",
    "Shop our herbal hair care collection now! 🌿",
    "No coupon needed — save money this Diwali Offer! 🪔",
    "Shop our herbal hair care collection now! 🌿",
    "Hurry! Limited stock available ⏰",
    "No coupon needed — save money this Diwali Offer! 🪔",
    "Shop our herbal hair care collection now! 🌿",
  ];

  return (
    <section id="home" className="relative w-screen overflow-hidden">
      {/* 🔶 Top Offer Strip */}
      <div className="w-full bg-yellow-400 text-black py-2 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap font-semibold text-sm sm:text-base"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {topStripText.map((text, index) => (
            <span key={index} className="mr-10">
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* 🖼️ Background Slideshow */}
      <div className={`relative w-screen ${containerHeight} my-2`}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Herbal Slide"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* 🔶 Bottom Offer Strip */}
      <div className="w-full bg-yellow-400 text-black py-2 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap font-semibold text-sm sm:text-base"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
        >
          {bottomStripText.map((text, index) => (
            <span key={index} className="mr-10">
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
