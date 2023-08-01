import { Link } from "react-router-dom";
import comp from "../assets/img/Computadora-ERROR-404.gif";
export function NotFoundPage() {
  return (
    <div className="text-center">
      <h1>404 Not Found 😭</h1>
      <h4>Pagina no encontrada</h4>
      <div className="d-flex justify-content-center mt-5 mb-3">
        
        <img src={comp} alt="Gato girando" style={{ height: 250 }} />
      </div>
      <Link className="btn btn-success" to={"/"}>
        Volver al Inicio
      </Link>
    </div>
  );
}
