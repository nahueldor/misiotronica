import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Comprobar si el producto ya está en el carrito
    const isProductInCart = cartItems.some((item) => item.id === product.id);

    // Si el producto no está en el carrito, agregarlo
    if (!isProductInCart) {
      setCartItems((prevCartItems) => [...prevCartItems, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, product) => total + product.precio, 0);
    return totalPrice;
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
}
