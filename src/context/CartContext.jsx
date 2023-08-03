import React, { createContext, useContext, useState } from "react";

// Crear el contexto del carrito
const CartContext = createContext();

// Hook personalizado para usar el contexto del carrito
export function useCart() {
  return useContext(CartContext);
}

// Proveedor del carrito que contiene el estado y las funciones relacionadas con el carrito
export function CartProvider({ children }) {
  const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Estado local para almacenar los elementos del carrito
  const [cartItems, setCartItems] = useState(storedCartItems);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    // Comprobar si el producto ya está en el carrito
    const isProductInCart = cartItems.some((item) => item.id === product.id);

    // Si el producto no está en el carrito, agregarlo
    if (!isProductInCart) {
      setCartItems((prevCartItems) => {
        const updatedCartItems = [...prevCartItems, product];

        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        return updatedCartItems;
      });
    }
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter(
        (item) => item.id !== productId
      );

      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

      return updatedCartItems;
    });
  };

  // Función para obtener el precio total de todos los productos en el carrito
  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (total, product) => total + product.precio,
      0
    );
    return totalPrice;
  };

  // Proporcionar el contexto y las funciones relacionadas con el carrito a través del proveedor
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}
