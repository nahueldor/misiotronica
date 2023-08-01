import { CardProducto } from "./CardProducto.jsx";

export function CardProductoList({ filteredArray }) {
  return (
    <div className="container">
      {filteredArray.length > 0 ? (
        <div className="row">
          {filteredArray.map((product, index) => (
            <CardProducto key={index} product={product} />
          ))}
        </div>
      ) : (
        <h2 className="text-center">
          Lo sentimos, no hay resultados que coincidan con tu búsqueda. 😒
        </h2>
      )}
    </div>
  );
}
