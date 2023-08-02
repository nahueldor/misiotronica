import "./css/SearchInput.css";

import { useState } from "react";
import { useForm } from "react-hook-form";

export function SearchInput({ onSearch }) {
  // Estado local para almacenar los términos de búsqueda
  const [searchTerm, setSearchTerm] = useState({
    buscador: "",
    categoria: "",
    min: "",
    max: "",
    envioFree: false,
    stock: false,
  });

  const { handleSubmit } = useForm();

  // Manejador para cambios en los campos de búsqueda
  const handleChange = (event) => {
    /* Obtenemos los selectores de categoría para limpiar 
    el valor "-- Ninguno --" cuando se seleccione */
    let categoriaSelector = document.getElementById("categoria");
    let categoriaSelectorSmall = document.getElementById("categoria_small");

    if (categoriaSelector.value === "-- Ninguno --") {
      categoriaSelector.value = "";
    }

    if (categoriaSelectorSmall.value === "-- Ninguno --") {
      categoriaSelectorSmall.value = "";
    }

    // Actualizamos el estado según el tipo de campo
    if (event.target.name === "envioFree" || event.target.name === "stock") {
      setSearchTerm({
        ...searchTerm,
        [event.target.name]: event.target.checked,
      });
    } else {
      setSearchTerm({
        ...searchTerm,
        [event.target.name]: event.target.value,
      });
    }
  };

  // Manejador para el envío del formulario
  const onSubmit = () => {
    onSearch(searchTerm);
  };

  // Manejador para limpiar el formulario y los filtros
  const onReset = () => {
    let clean = {
      ...searchTerm,
      buscador: "",
      categoria: "",
      min: "",
      max: "",
      envioFree: false,
      stock: false,
    };

    document.getElementById("filterForm").reset();

    setSearchTerm(clean);
    onSearch(clean);
  };

  return (
    <aside className="card container border-success pb-3">
      <div className="row">
        <form id="filterForm" onSubmit={handleSubmit(onSubmit)}>
          {/* Campos de búsqueda para pantallas grandes */}
          <fieldset className="form-group d-none d-lg-block">
            <div className="col-12 mt-2">
              <legend className="mt-2">Buscar</legend>
              <input
                className="form-control mb-3"
                type="search"
                placeholder=""
                id="buscador"
                name="buscador"
                onChange={handleChange}
              />
            </div>

            <div className="col-12 mb-3">
              <legend className="mt-2">Categoría</legend>
              <select
                id="categoria"
                name="categoria"
                className="form-select custom-select"
                onChange={handleChange}
                defaultValue={""}
              >
                <option value="" disabled hidden></option>
                <option value="-- Ninguno --">-- Ninguna --</option>
                <option value="baterias">Baterías</option>
                <option value="cables">Cables</option>
                <option value="luces">Luces</option>
                <option value="placas">Placas</option>
                <option value="sensores">Sensores</option>
              </select>
            </div>

            <div className="col-12">
              <legend className="mt-2">Precio</legend>
              <div className="d-inline-flex">
                <input
                  className="form-control mb-3"
                  type="number"
                  min="1"
                  id="min"
                  name="min"
                  placeholder="Min."
                  onChange={handleChange}
                />
                <span className="text-center mx-2"> _ </span>
                <input
                  className="form-control mb-3"
                  type="number"
                  id="max"
                  name="max"
                  placeholder="Max."
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-12 mb-3">
              <legend className="mt-2">Disponibilidades</legend>
              <div className="form-check form-switch">
                <input
                  className="form-check-input form-check-input-success"
                  type="checkbox"
                  id="envioFree"
                  name="envioFree"
                  onChange={handleChange}
                />
                <label className="form-check-label">Envío Gratis</label>
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input form-check-input-success"
                  type="checkbox"
                  id="stock"
                  name="stock"
                  onChange={handleChange}
                />
                <label className="form-check-label">Solo en Existencia</label>
              </div>
            </div>
          </fieldset>

          {/* Campos de búsqueda para pantallas pequeñas */}
          <fieldset className="form-group d-block d-lg-none row">
            <h4 className="col-6 d-inline-flex mt-4">Buscar</h4>
            <h4 className="col-6 d-inline-flex mt-4">Categoría</h4>

            <div className="col-6 d-inline-flex">
              <input
                className="form-control mb-3"
                type="search"
                placeholder=""
                id="buscador_small"
                name="buscador"
                onChange={handleChange}
              />
            </div>

            <div className="col-6 d-inline-flex mb-3">
              <select
                id="categoria_small"
                name="categoria"
                className="form-select custom-select"
                onChange={handleChange}
                defaultValue={""}
              >
                <option value="" disabled hidden></option>
                <option value="-- Ninguno --">-- Ninguna --</option>
                <option value="baterias">Baterías</option>
                <option value="cables">Cables</option>
                <option value="luces">Luces</option>
                <option value="placas">Placas</option>
                <option value="sensores">Sensores</option>
              </select>
            </div>

            <h4 className="col-6 d-inline-flex mt-4">Precio</h4>
            <h4 className="col-6 d-inline-flex mt-4">Disponibilidades</h4>

            <div className="col-6 d-inline-flex">
              <div className="d-inline-flex">
                <input
                  className="form-control mb-3"
                  type="number"
                  min="1"
                  id="min_small"
                  name="min"
                  placeholder="Min."
                  onChange={handleChange}
                />
                <span className="text-center mx-2"> _ </span>
                <input
                  className="form-control mb-3"
                  type="number"
                  id="max_small"
                  name="max"
                  placeholder="Max."
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-6 d-inline-flex mb-3">
              <div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input form-check-input-success"
                    type="checkbox"
                    id="envioFree_small"
                    name="envioFree"
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Envío Gratis</label>
                </div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input form-check-input-success"
                    type="checkbox"
                    id="stock_small"
                    name="stock"
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Solo en Existencia</label>
                </div>
              </div>
            </div>
          </fieldset>

          {/* Botones para filtrar y limpiar */}
          <div className="btn-group d-flex justify-content-center">
            <button type="submit" className="btn btn-lg btn-success mt-3">
              Filtrar
            </button>
            <button
              type="button"
              className="btn btn-lg btn-success btn-green-light mt-3"
              onClick={onReset}
            >
              Limpiar
            </button>
          </div>
        </form>
      </div>
    </aside>
  );
}
