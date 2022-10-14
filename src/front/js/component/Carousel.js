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
        <div className="align-items-center carousel-item active">
          <div className="row align-items-center">
            <div className="col-6">
              <img src={Cajas_1} className="" width="100%" height="100%" alt="..." />
            </div>
            <div className="text-carousel col-4">
              Vivimos por y para el chocolate
            </div>
          </div>
        </div>
        <div className="align-items-center carousel-item">
          <div className=" row align-items-center">
            <div className="col-6">
              <img src={Cajas_2} className="" width="100%" height="100%" alt="..." />
            </div>
            <div className="text-carousel  col-4">
            El sabor de la libertad en cada bocado 
            </div>
          </div>
        </div>
        <div className="align-items-center carousel-item">
          <div className=" row align-items-center">
            <div className="col-6">
              <img src={Cajas_4} className="" width="100%" height="100%" alt="..." />
            </div>
            <div className="text-carousel  col-4">
            Descubre sabores que revolucionarán tu paladar
            </div>
          </div>
        </div>
        <div className="align-items-center carousel-item">
          <div className=" row align-items-center">
            <div className="col-6">
              <img src={Portada_Principal_Bombones} className="" width="100%" height="100%" alt="..." />
            </div>
            <div className="text-carousel col-4">
            Be Kurius<br></br>
            Stay kurius
            </div>
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