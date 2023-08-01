import { useParams, Navigate } from "react-router-dom";
import { productList } from "../assets/js/productList";
import freeShipping from "../assets/img/freeShipping.png";

export function BuyPage() {
  const { id } = useParams();
  let product;

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

          {product.isStock ? (
            <div>
              <p className="text-muted">
                Disponibilidad: <span className="text-success">En Stock</span>
              </p>
              <button className="btn btn-success">Comprar</button>
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
