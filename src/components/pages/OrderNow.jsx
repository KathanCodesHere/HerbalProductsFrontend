import React from "react";

const OrderNow = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white px-4 py-10">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-md p-6 sm:p-10 flex flex-col items-center gap-8">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#023918] text-center">
          Order Now
        </h2>

        {/* Instructions */}
        <div className="text-center space-y-3 text-gray-700 text-sm sm:text-base">
          <p>Follow the steps below to place your order:</p>
          <ol className="list-decimal text-left mx-auto inline-block space-y-2 pl-5">
            <li>Scan the QR code shown below.</li>
            <li>Make your payment securely.</li>
            <li>After payment, fill out the order form with your details.</li>
          </ol>
        </div>

        {/* QR Code Section */}
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="border-4 border-[#1C941E] rounded-2xl overflow-hidden p-3 bg-gray-50 shadow-sm">
            <img
              src="Qr/Pay.jpeg" // 🟢 Replace this with your actual QR code image URL
              alt="QR Code"
              className="w-40 sm:w-56 md:w-64 h-auto object-contain"
            />
          </div>
          <p className="text-gray-600 text-sm sm:text-base text-center">
            Scan this QR code to pay for your order
          </p>
        </div>

        {/* Proceed Button */}
        <button
          className="mt-4 bg-[#1C941E] text-white px-8 py-3 rounded-lg font-medium text-base sm:text-lg hover:bg-[#167718] transition-all duration-300"
          onClick={() => alert('Redirecting to form...')}
        >
          Proceed
        </button>
      </div>    
    </div>
  );
};

export default OrderNow;
