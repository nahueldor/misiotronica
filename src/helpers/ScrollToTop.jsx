import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  // Obtenemos la ubicación actual de la ruta
  const location = useLocation();

  // Usamos el hook useEffect para ejecutar la función cada vez que cambia la ubicación (ruta)
  useEffect(() => {
    // Hacemos el desplazamiento hacia la parte superior de la página (x=0, y=0)
    window.scrollTo(0, 0);
  }, [location]);

  // Retornamos `null` ya que este componente no renderiza ningún contenido en la interfaz de usuario
  return null;
};

