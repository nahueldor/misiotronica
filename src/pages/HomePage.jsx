import { Link } from "react-router-dom";
import { CarouselSales } from "../components/CarouselSales";

export function HomePage() {
  return (
    <div>
      <>
        {/* Contenido de la página de inicio */}
        <main className="container mt-4">
          <div className="jumbotron">
            <h1 className="display-4">Bienvenido a Misiotrónica</h1>
            <h2 className="lead">Descubre lo último en gadgets y más.</h2>
            <hr className="my-4" />
            {/* Carousel con los 8 ultimos productos agregados */}
            <CarouselSales />
            <hr className="my-4" />
            <p>Explora nuestra selección y realiza tus compras ahora.</p>
            {/* Nos redirecciona a Venta */}
            <Link className="btn btn-success btn-lg" to="/sales" role="button">
              Explorar Productos
            </Link>
          </div>
        </main>
      </>
    </div>
  );
}
