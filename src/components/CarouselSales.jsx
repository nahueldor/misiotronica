import React, { useState } from "react";
import { productList } from "../assets/js/productList";
import "./css/CarouselSales.css"; // Importa tu archivo de estilos CSS para el carrusel
import { Link } from "react-router-dom";

export function CarouselSales() {
  console.log(productList.length - 9, productList.length - 1);

  const images = productList
    .map((producto) => ({
      id: producto.id,
      imagen: producto.imagen,
    }))
    .slice(productList.length - 8, productList.length);

  const imagesPerSlide = 4; // Número de imágenes por diapositiva
  const [activeSlide, setActiveSlide] = useState(0);

  const startImageIndex = activeSlide;
  const endImageIndex = (activeSlide + imagesPerSlide) % images.length;

  const visibleImages =
    startImageIndex <= endImageIndex
      ? images.slice(startImageIndex, endImageIndex)
      : [...images.slice(startImageIndex), ...images.slice(0, endImageIndex)];

  const goToNextSlide = () => {
    setActiveSlide((activeSlide + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setActiveSlide((activeSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <section className="slides d-flex justify-content-center">
        {visibleImages.map((image, index) => (
          <Link key={index} to={`/sales/buy/${image.id}`}>
            <article className="mx-3 little_card">
              <img src={image.imagen} alt={`Imagen Carousel ${index + 1}`} />
            </article>
          </Link>
        ))}
      </section>
      <button className="prev btn btn-success" onClick={goToPrevSlide}>
        &#10094;
      </button>
      <button className="next btn btn-success" onClick={goToNextSlide}>
        &#10095;
      </button>
    </div>
  );
}
