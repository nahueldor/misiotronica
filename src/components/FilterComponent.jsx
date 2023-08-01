import { useState } from "react";

import { SearchInput } from "./SearchInput";
import { CardProductoList } from "./CardProductoList.jsx";

import { productList } from "../assets/js/productList";

export function FilterComponent() {
  const [filteredArray, setFilteredArray] = useState(productList);

  const isOkFilter = (searchTerm, product) => {
    if (
      !product.producto
        .toLowerCase()
        .includes(searchTerm.buscador.toLowerCase())
    ) {
      return false;
    }

    if (
      searchTerm.categoria !== "" &&
      product.categoria !== searchTerm.categoria
    ) {
      return false;
    }

    if (searchTerm.min !== "" && searchTerm.min > product.precio) {
      return false;
    }

    if (searchTerm.max !== "" && searchTerm.max < product.precio) {
      return false;
    }

    if (searchTerm.stock && !product.isStock) {
      return false;
    }

    if (searchTerm.envioFree && !product.envioFree) {
      return false;
    }

    return true;
  };

  const handleSearch = (searchTerm) => {
    const filteredItems = productList.filter((item) =>
      isOkFilter(searchTerm, item)
    );
    setFilteredArray(filteredItems);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-3 mb-4">
          <SearchInput onSearch={handleSearch} />
        </div>
        <div className="col-12 col-lg-9">
          <CardProductoList className="col-8" filteredArray={filteredArray} />
        </div>
      </div>
    </div>
  );
}
