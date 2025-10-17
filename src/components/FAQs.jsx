// src/components/FAQs.jsx
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What are the main ingredients in Kesh Herbal products?",
    answer:
      "Our products are made from 100% natural ingredients like coconut oil, jojoba oil, argan oil, sesame seeds, and other Ayurvedic herbs to nourish and strengthen hair naturally.",
  },
  {
    question: "How often should I use the hair oil?",
    answer:
      "We recommend applying Kesh Herbal hair oil 2-3 times a week for optimal results. Massage gently into your scalp for better absorption.",
  },
  {
    question: "Is Kesh Herbal suitable for all hair types?",
    answer:
      "Yes! Our herbal formulas are safe and effective for all hair types including straight, wavy, curly, and coily hair.",
  },
  {
    question: "How long will it take to see results?",
    answer:
      "Most users notice improvement in hair texture and shine within 2-4 weeks of regular use. Hair growth benefits may take 2-3 months.",
  },
  {
    question: "Can I use Kesh Herbal products with other hair treatments?",
    answer:
      "Absolutely! Our products are chemical-free and can be safely used alongside shampoos, conditioners, or other natural hair treatments.",
  },
  {
    question: "Are there any side effects?",
    answer:
      "No. Kesh Herbal products are free from chemicals, parabens, and sulfates. Mild scalp sensitivity is rare but possible if you have allergies to specific natural oils.",
  },
  {
    question: "Where can I buy Kesh Herbal products?",
    answer:
      "You can buy directly from our website or from authorized resellers listed on our website to ensure authenticity.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="py-16 bg-green-50">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#023918] text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left text-green-900 font-semibold hover:bg-green-100 transition"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <FaChevronUp className="ml-2 text-green-700" />
              ) : (
                <FaChevronDown className="ml-2 text-green-700" />
              )}
            </button>

            {/* Answer */}
            <div
              className={`px-4 pb-4 text-green-800 text-sm sm:text-base transition-all duration-300 ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
