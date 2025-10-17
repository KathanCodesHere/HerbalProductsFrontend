import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa";

export default function MainLayout() {
  const whatsappNumber = "919876543210"; // Replace with your number (without + or 0)
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen bg-white text-[var(--color-text)] font-[var(--font-poppins)] relative">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="container mx-auto p-4">
        <Outlet /> {/* Renders child route */}
      </main>

      {/* Footer */}
      <Footer />

      {/* 🌿 Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.25)] hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
      </a>
    </div>
  );
}
