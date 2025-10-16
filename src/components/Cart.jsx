import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Herbal Aloe Shampoo",
      price: 299,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Organic Neem Face Wash",
      price: 249,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1e1?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Aloe Vera Gel",
      price: 199,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1611078489935-0cb964de46f2?w=400&h=400&fit=crop",
    },
  ]);

  // Increase quantity
  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity (not below 1)
  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <motion.div
      className="p-6 pl-20 pr-20 bg-white rounded-2xl shadow-md max-w-5xl mx-auto mt-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
        🛒 Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          Your cart is empty. Add some herbal products!
        </p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 pb-4 mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Product Info */}
                <div className="flex items-center gap-4 w-full sm:w-1/2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg shadow-sm"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-green-700 font-medium">
                      ₹{item.price.toFixed(2)} each
                    </p>
                  </div>
                </div>

                {/* Quantity and Total Price Section */}
                <div className="flex flex-col sm:flex-row items-center gap-5 mt-3 sm:mt-0">
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-3 py-1 bg-green-200 text-green-800 rounded-md hover:bg-green-300 transition"
                    >
                      −
                    </button>
                    <span className="text-lg font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-3 py-1 bg-green-200 text-green-800 rounded-md hover:bg-green-300 transition"
                    >
                      +
                    </button>
                  </div>

                  {/* Total Price for Item */}
                  <div className="text-lg font-semibold text-green-700">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <FaTrashAlt size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cart Summary */}
          <motion.div
            className="mt-8 p-5 bg-green-50 rounded-xl shadow-inner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex justify-between text-lg font-semibold text-gray-700">
              <span>Total</span>
              <span className="text-green-800">₹{totalPrice.toFixed(2)}</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-5 bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Proceed to Checkout
            </motion.button>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default Cart;
