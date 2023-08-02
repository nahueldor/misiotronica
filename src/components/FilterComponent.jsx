import { useState } from "react";
import { SearchInput } from "./SearchInput";
import { CardProductoList } from "./CardProductoList.jsx";
import { productList } from "../assets/js/productList";

export function FilterComponent() {
  // Estado para almacenar el array de productos filtrados
  const [filteredArray, setFilteredArray] = useState(productList);

  // Función para verificar si un producto cumple con los criterios de búsqueda
  const isOkFilter = (searchTerm, product) => {
    // Filtrar por nombre del producto
    if (
      !product.producto
        .toLowerCase()
        .includes(searchTerm.buscador.toLowerCase())
    ) {
      return false;
    }

    // Filtrar por categoría
    if (
      searchTerm.categoria !== "" &&
      product.categoria !== searchTerm.categoria
    ) {
      return false;
    }

    // Filtrar por rango de precios
    if (searchTerm.min !== "" && searchTerm.min > product.precio) {
      return false;
    }

    if (searchTerm.max !== "" && searchTerm.max < product.precio) {
      return false;
    }

    // Filtrar por disponibilidad de stock
    if (searchTerm.stock && !product.isStock) {
      return false;
    }

    // Filtrar por envío gratuito
    if (searchTerm.envioFree && !product.envioFree) {
      return false;
    }

    return true;
  };

  // Función para manejar la búsqueda de productos
  const handleSearch = (searchTerm) => {
    const filteredItems = productList.filter((item) =>
      isOkFilter(searchTerm, item)
    );
    setFilteredArray(filteredItems);
  };

  return (
    <div className="container">
      <div className="row">
        {/* Columna para el componente de búsqueda */}
        <div className="col-12 col-lg-3 mb-4">
          <SearchInput onSearch={handleSearch} />
        </div>
        {/* Columna para la lista de productos filtrados */}
        <div className="col-12 col-lg-9">
          <CardProductoList className="col-8" filteredArray={filteredArray} />
        </div>
      </div>
    </div>
  );
}
