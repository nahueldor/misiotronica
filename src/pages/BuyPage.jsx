import { useParams, Navigate } from "react-router-dom";
import { productList } from "../assets/js/productList";

import { useCart } from "../context/CartContext";

import freeShipping from "../assets/img/freeShipping.png";

export function BuyPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  let product;

  //Para obtener el producto o devolver a la pagina de inexistente
  if (productList.length > id && id >= 0) {
    product = productList[id];
  } else {
    return <Navigate to="/*" />;
  }

  return (
    <div className="container my-5">
      <div className="row">
        {/* Imagen del producto */}
        <div className="col-md-6">
          <img
            className="img-fluid"
            src={product.imagen}
            alt={"Imagen de " + product.producto}
            style={{ height: 400 }}
          />
        </div>
        {/* Detalles del producto */}
        <div className="col-md-6">
          <h1>{product.producto}</h1>
          <p className="text-muted">{product.descripcion}</p>
          <h2 className="text-success">
            ${product.precio.toLocaleString("es-AR")}
          </h2>

          {/* Mostrar el logo de camioncito, si el envio es gratis */}
          {product.envioFree ? (
            <div className="my-3">
              <img
                className="d-inline"
                src={freeShipping}
                alt="Un camion de los envios gratis"
              />
              <p className="d-inline mx-2 text-success">Envio Gratis</p>
            </div>
          ) : (
            <div></div>
          )}

          {/* Habilitar y deshabilitar botón de compra, dependiendo del Stock */}
          {product.isStock ? (
            <div>
              <p className="text-muted">
                Disponibilidad: <span className="text-success">En Stock</span>
              </p>
              <button
                className="btn btn-success"
                onClick={() => addToCart(product)}
              >
                Comprar
              </button>
            </div>
          ) : (
            <div>
              <p className="text-muted">
                Disponibilidad: <span className="text-danger">Sin Stock</span>
              </p>
              <button className="btn btn-secondary" disabled>
                Comprar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
