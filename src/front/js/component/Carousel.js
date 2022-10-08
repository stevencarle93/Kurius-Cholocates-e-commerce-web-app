import React from "react";
import Cajas_1 from "../../img/Bombones/Cajas1.jpg";
import Cajas_2 from "../../img/Bombones/Cajas2.jpg";
import Cajas_4 from "../../img/Bombones/Cajas4.jpg";
import Portada_Principal_Bombones from "../../img/Bombones/portada-principal-bombones.jpg";


export const Carousel = () => {

return (
    <div
        id="carouselExampleCaptions"
        className="carousel slide maincarousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active bg-dark"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            className="active bg-dark"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            className="active bg-dark"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            className="active bg-dark"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: "20%" }}>
            <img src={Cajas_1} className="" width="100%" height="30%" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item">
            <img src={Cajas_2} className="" width="100%" height="30%" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item">
            <img src={Cajas_4} className="" width="100%" height="30%" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item">
            <img src={Portada_Principal_Bombones} className="" width="100%" height="30%" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon btn btn-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon btn btn-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
)
}