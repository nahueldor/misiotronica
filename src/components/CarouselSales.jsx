import React, { useState } from "react";
import { productList } from "../assets/js/productList";
import "./css/CarouselSales.css";
import { Link } from "react-router-dom";

export function CarouselSales() {
  // Obtenemos las últimas 8 imágenes del producto y mapeamos sus datos
  const images = productList
    .slice(productList.length - 8, productList.length)
    .map((producto) => ({
      id: producto.id,
      imagen: producto.imagen,
    }));

  const imagesPerSlide = 4; // Número de imágenes por diapositiva
  const [activeSlide, setActiveSlide] = useState(0);

  // Índices de inicio y fin del grupo de imágenes visible en el carrusel
  const startImageIndex = activeSlide;
  const endImageIndex = (activeSlide + imagesPerSlide) % images.length;

  // Determinamos qué imágenes se mostrarán en el carrusel según los índices
  const visibleImages =
    startImageIndex <= endImageIndex
      ? images.slice(startImageIndex, endImageIndex)
      : [...images.slice(startImageIndex), ...images.slice(0, endImageIndex)];

  // Función para avanzar al siguiente grupo de imágenes en el carrusel
  const goToNextSlide = () => {
    setActiveSlide((activeSlide + 1) % images.length);
  };

  // Función para retroceder al grupo de imágenes anterior en el carrusel
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
