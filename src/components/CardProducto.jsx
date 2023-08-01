import { Link } from "react-router-dom";
import "./css/CardProducto.css"

export function CardProducto({ product }) {
  const cortarString = (str) => {
    return str.length > 75 ? `${str.substring(0, 75).trim()}...` : str;
  };

  return (
    <article className="col-sm-12 	col-md-6 	col-lg-4 	col-xl-4 mb-3">
      <Link to={`/sales/buy/${product.id}`} style={{ textDecoration: "none" }} target="_blank">
        <div className="card bg-success cardProducto">
          <img
            className="card-img-top"
            src={product.imagen}
            alt={"Imagen de " + product.producto}
          />
          <div
            className="card-body"
            data-toggle="tooltip"
            data-placement="bottom"
            title={product.producto}
          >
            <h5 className="card-title">{cortarString(product.producto)}</h5>
          </div>
          <div className="card-footer">
            <h4 className="card-text">${product.precio.toLocaleString("es-AR")}</h4>
          </div>
        </div>
      </Link>
    </article>
  );
}
