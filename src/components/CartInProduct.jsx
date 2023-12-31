import "./css/CartInProduct.css";

export function CartInProduct({ product, onRemove }) {
  // Función para recortar el texto si es demasiado largo
  const cortarString = (str) => {
    return str.length > 75 ? `${str.substring(0, 75).trim()}...` : str;
  };

  return (
    <article className="col-12 my-2">
      <div className="card bg-success-light">
        <div className="row no-gutters">
          {/* Columna para mostrar la imagen del producto */}
          <div className="col-3">
            <img
              src={product.imagen}
              className="card-img img_cart"
              alt="Imagen del producto"
            />
          </div>
          {/* Columna para mostrar el nombre y precio del producto */}
          <div className="col-8">
            <div className="card-body cart-body">
              <h4 className="card-text mx-2">
                {cortarString(product.producto)}
              </h4>
              <h2 className="card-title mx-2">
                ${product.precio.toLocaleString("es-AR")}
              </h2>
            </div>
          </div>
          {/* Columna para el botón de eliminar producto */}
          <div className="col-1 d-flex justify-content-end">
            <button
              type="button"
              className="btn-close m-2"
              aria-label="Close"
              onClick={() => onRemove(product.id)}
            >
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
