import { NavLink } from "react-router-dom";
import { LiNavLink } from "./LiNavLink";

import imgM from "../assets/img/M.png";
import carrito from "../assets/img/carrito.png";
import "./css/Nav.css";

export function Nav() {
  return (
    <>
      {/* Barra de navegación superior */}
      <nav
        className="navbar navbar-expand-lg bg-success mb-3"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          {/* Enlace al inicio */}
          <NavLink className="navbar-brand" to={"/"}>
            <img className="mx-2 logo" src={imgM} alt="" />
            Misiotrónica
          </NavLink>

          <div>
            {/* Enlace al carrito de compras */}
            <NavLink className="navbar-brand mx-2 btn btn-success" to={"/cart"}>
              <img
                src={carrito}
                alt="Logo de carrito de compras"
                style={{ height: 36 }}
              />
            </NavLink>

            {/* Botón de menú desplegable */}
            <a
              className="btn btn-success"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
            >
              <span className="navbar-toggler-icon" style={{ fontSize: 24 }} />
            </a>
          </div>
        </div>
      </nav>

      {/* Menú lateral desplegable */}
      <div className="container">
        <div
          className="offcanvas offcanvas-start container_lateral_menu"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header bg-success text-white">
            {/* Enlace al inicio en el menú lateral */}
            <NavLink className="navbar-brand" to={"/"}>
              <img
                className="mx-2 logo"
                src={imgM}
                alt="El logo de la Empresa"
              />
              Misiotrónica
            </NavLink>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body bg-success">
            <div>
              {/* Lista de enlaces en el menú lateral */}
              <ul className="navbar-nav me-auto">
                <LiNavLink name={"Inicio"} path={"/"} />
                <LiNavLink name={"Venta"} path={"/sales"} />
                <LiNavLink name={"Sobre Nosotros"} path={"/about"} />
                <LiNavLink name={"Contacto"} path={"/contact"} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
