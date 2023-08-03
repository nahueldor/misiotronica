import { CartInProduct } from "../components/CartInProduct";
import { useCart } from "../context/CartContext";
import { useEffect } from "react";

export function ShoppingCartPage() {
  /* Obtener los elementos del carrito, la función para eliminar productos 
  y el total del precio desde el contexto */
  const { cartItems, removeFromCart, getTotalPrice } = useCart();

  // Guardar el carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="container">
      {/* Verificar si el carrito contiene elementos */}
      {cartItems.length > 0 ? (
        <div className="row">
          {/* Mapear cada producto del carrito y mostrarlo utilizando el componente CartInProduct */}
          {cartItems.map((product, index) => (
            <CartInProduct
              key={index}
              product={product}
              onRemove={removeFromCart}
            />
          ))}

          {/* Mostrar el total del precio del carrito */}
          <h2 className="card-title my-5" style={{ paddingBottom: "10%" }}>
            Total: ${getTotalPrice().toLocaleString("es-AR")}
          </h2>
        </div>
      ) : (
        // Si el carrito está vacío, mostrar un mensaje
        <h2 className="text-center" style={{ paddingBottom: "30%" }}>
          No hay nada en su Carrito. 😒
        </h2>
      )}
    </div>
  );
}
