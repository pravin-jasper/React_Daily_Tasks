
import React, { useState } from "react";

// Product data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2499,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    id: 3,
    name: "Sneakers",
    price: 2999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    id: 4,
    name: "Backpack",
    price: 1499,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
  },
];

// Product Card Component
function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold text-white">
          {product.name}
        </h2>

        <p className="text-cyan-400 text-lg font-semibold mt-2">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <button
          onClick={() => onAddToCart(product)}
          className="w-full mt-4 bg-cyan-500 text-slate-950 font-bold py-2 rounded-lg hover:bg-cyan-400 transition"
        >
          Add to Cart +
        </button>
      </div>
    </div>
  );
}

// Cart Item Component
function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl mb-3">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 rounded-lg object-cover"
      />

      <div className="flex-1">
        <h3 className="text-white font-semibold">
          {item.name}
        </h3>

        <p className="text-cyan-400">
          ₹{item.price.toLocaleString("en-IN")}
        </p>

        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={() => onDecrease(item.id)}
            className="bg-slate-700 px-3 rounded"
          >
            -
          </button>

          <span className="text-white">{item.quantity}</span>

          <button
            onClick={() => onIncrease(item.id)}
            className="bg-slate-700 px-3 rounded"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={() => onRemove(item.id)}
        className="text-red-400 hover:text-red-300"
      >
        Remove
      </button>
    </div>
  );
}

// Main App Component
function Day8() {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCart((previousCart) => {
      const existingItem = previousCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove product
  const removeItem = (id) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    );
  };

  // Calculate total items
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <header className="bg-slate-900 p-5 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-400">
            ShopZone 🛍️
          </h1>

          <div className="bg-cyan-500 text-slate-950 px-4 py-2 rounded-lg font-bold">
            🛒 Cart: {totalItems}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">

        {/* Products */}
        <h2 className="text-3xl font-bold mb-6">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {/* Shopping Cart */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">
            Shopping Cart 🛒
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-400 bg-slate-900 p-6 rounded-xl text-center">
              Your cart is empty. Add some products!
            </p>
          ) : (
            <div className="bg-slate-900 p-5 rounded-2xl">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                  onRemove={removeItem}
                />
              ))}

              {/* Cart Total */}
              <div className="border-t border-slate-700 pt-5 mt-5 flex justify-between items-center">
                <div>
                  <p className="text-gray-400">
                    Total Items: {totalItems}
                  </p>

                  <h3 className="text-2xl font-bold text-cyan-400 mt-2">
                    Total: ₹{totalPrice.toLocaleString("en-IN")}
                  </h3>
                </div>

                <button
                  onClick={() => alert("Order placed successfully!")}
                  className="bg-green-500 text-slate-950 font-bold px-6 py-3 rounded-lg hover:bg-green-400 transition"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </section>

      </main>
    </div>
  );
}

export default Day8;
