import { Link } from "react-router-dom";
import "./css/CardProducto.css";

export function CardProducto({ product }) {
  /* Función para cortar un string y 
  agregar puntos suspensivos si es demasiado largo */
  const cortarString = (str) => {
    return str.length > 75 ? `${str.substring(0, 75).trim()}...` : str;
  };

  return (
    // CardProducto que muestra información del producto
    <article className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3">
      {/* Enlace a la página para comprar el producto */}
      <Link to={`/sales/buy/${product.id}`} style={{ textDecoration: "none" }}>
        {/* Tarjeta del producto */}
        <div className="card bg-success cardProducto">
          {/* Imagen del producto */}
          <img
            className="card-img-top"
            src={product.imagen}
            alt={"Imagen de " + product.producto}
          />
          {/* Cuerpo de la tarjeta */}
          <div
            className="card-body"
            data-toggle="tooltip"
            data-placement="bottom"
            title={product.producto}
          >
            {/* Título del producto */}
            <h5 className="card-title">{cortarString(product.producto)}</h5>
          </div>
          {/* Pie de la tarjeta */}
          <div className="card-footer">
            {/* Precio del producto */}
            <h4 className="card-text">
              ${product.precio.toLocaleString("es-AR")}
            </h4>
          </div>
        </div>
      </Link>
    </article>
  );
}
