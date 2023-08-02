import { CardProducto } from "./CardProducto.jsx";

export function CardProductoList({ filteredArray }) {
  return (
    // Contenedor del listado de productos
    <div className="container">
      {/* Verificar si el array filtrado contiene elementos */}
      {filteredArray.length > 0 ? (
        // Si hay elementos en el array, mostrar el listado
        <div className="row">
          {/* Mapear los productos del array filtrado */}
          {filteredArray.map((product, index) => (
            // Mostrar cada producto utilizando el componente CardProducto
            <CardProducto key={index} product={product} />
          ))}
        </div>
      ) : (
        // Si el array filtrado está vacío, mostrar mensaje de no hay resultados
        <h2 className="text-center">
          Lo sentimos, no hay resultados que coincidan con tu búsqueda. 🤯
        </h2>
      )}
    </div>
  );
}
