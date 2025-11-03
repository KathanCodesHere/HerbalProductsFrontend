import React, { useState, useEffect } from "react";
import { PlusCircleIcon, TrashIcon } from "lucide-react";
import { useProducts } from "../../hooks/useProducts";
import { useOrders } from "../../hooks/useOrders";
const OrderItem = () => {
  const { getAllProducts } = useProducts();
  const { loading, error, placeOrder } = useOrders();
  const [productOptions, setProductOptions] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await getAllProducts();
        setProductOptions(res.data.items || []);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, []);

  const [orderItems, setOrderItems] = useState([
    { product_id: "", price: 0, quantity: 1 },
  ]);

  const handleProductChange = (index, selectedProduct) => {
    const updatedItems = [...orderItems];
    const product = productOptions.find((p) => p.name === selectedProduct);
    updatedItems[index].product = selectedProduct;
    updatedItems[index].price = product ? product.price : 0;
    setOrderItems(updatedItems);
  };

  const handleQuantityChange = (index, quantity) => {
    const updatedItems = [...orderItems];
    updatedItems[index].quantity = Number(quantity);
    setOrderItems(updatedItems);
  };

  const handleAddItem = () => {
    setOrderItems([...orderItems, { product_id: "", price: 0, quantity: 1 }]);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = orderItems.filter((_, i) => i !== index);
    setOrderItems(updatedItems);
  };

  const handlePlaceOrder = async () => {
    try {
      // Filter out any empty product rows
      const validItems = orderItems;

      const orderData = {
        items: validItems.map((item) => ({
          product_id: item.product_id,
          quantity: item.quantity,
          price: item.price,
        })),
        status: "pending",
      };

      console.log("🟢 Sending order data:", orderData);

      const data = await placeOrder(orderData);
      console.log("✅ Order placed:", data);
    } catch (err) {
      console.log("❌ Error placing order:", err);
    }
  };

  const totalPrice = orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 md:p-8 w-full">
      <h2 className="text-2xl font-semibold text-green-700 mb-6 text-center md:text-left">
        Place Your Order
      </h2>

      <div className="space-y-5">
        {orderItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center md:space-x-4 bg-green-50 rounded-xl p-4 shadow-sm"
          >
            {/* Product Dropdown */}
            <div className="flex-1 mb-3 md:mb-0">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product
              </label>
              <select
                value={item.product}
                onChange={(e) =>
                  handleProductChange(index, e.target.value)
                }
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value="">Select a product</option>
                {productOptions.map((p) => (
                  <option key={p.name} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Display */}
            <div className="w-full md:w-28 mb-3 md:mb-0">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (₹)
              </label>
              <div className="border border-gray-300 rounded-lg p-2 text-gray-800 text-center bg-white">
                {item.price > 0 ? item.price : "--"}
              </div>
            </div>

            {/* Quantity Input */}
            <div className="w-full md:w-28 mb-3 md:mb-0">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(index, e.target.value)
                }
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            {/* Total for this item */}
            <div className="w-full md:w-32 mb-3 md:mb-0">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total (₹)
              </label>
              <div className="border border-gray-300 rounded-lg p-2 text-center text-green-700 font-medium bg-white">
                {item.price > 0 ? item.price * item.quantity : "--"}
              </div>
            </div>

            {/* Remove Button */}
            {orderItems.length > 1 && (
              <button
                onClick={() => handleRemoveItem(index)}
                className="mt-2 md:mt-6 text-red-500 hover:text-red-700 transition"
              >
                <TrashIcon size={22} />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Add new item button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleAddItem}
          className="flex items-center gap-2 text-green-600 font-medium hover:text-green-800 transition"
        >
          <PlusCircleIcon size={22} />
          Add Item
        </button>
      </div>

      {/* Grand Total Summary */}
      <div className="mt-8 border-t pt-4 text-right">
        <p className="text-lg font-semibold text-gray-700">
          Grand Total: <span className="text-green-700">₹{totalPrice}</span>
        </p>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-6">
        <button onClick={handlePlaceOrder} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderItem;
