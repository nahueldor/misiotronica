import { CartInProduct } from "../components/CartInProduct";

import { useCart } from "../context/CartContext";

export function ShoppingCartPage() {
  const { cartItems, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className="container">
      {cartItems.length > 0 ? (
        <div className="row">
          {cartItems.map((product, index) => (
            <CartInProduct
              key={index}
              product={product}
              onRemove={removeFromCart}
            />
          ))}

          <h2 className="card-title my-5">
            Total: ${getTotalPrice().toLocaleString("es-AR")}
          </h2>
        </div>
      ) : (
        <h2 className="text-center" style={{ paddingBottom: "30%" }}>
          No hay nada en su Carrito. 😒
        </h2>
      )}
    </div>
  );
}
