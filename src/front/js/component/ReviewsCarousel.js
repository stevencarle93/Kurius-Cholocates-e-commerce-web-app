import React from "react";
import "../../styles/index.css";
import { Link } from "react-router-dom";
import Barra_Blanco_35 from "../../img/Barras/barra-blanco-35.png";
import Barra_Chocoleche_42 from "../../img/Barras/barra-chocoleche-42.png";
import Barra_Negro_54 from "../../img/Barras/barra-negro-54.png";
import Barra_Negro_70 from "../../img/Barras/barra-negro-70.png";

export const ReviewsCarousel = () => {
  return (
      <div
        id="carouselExampleCaptions2"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions2"
            data-bs-slide-to="0"
            className="active bg-dark"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions2"
            data-bs-slide-to="1"
            className="active bg-dark"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions2"
            data-bs-slide-to="2"
            className="active bg-dark"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions2"
            data-bs-slide-to="3"
            className="active bg-dark"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: "20%" }}>
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src="https://mamiverse.com/es/wp-content/uploads/2016/02/9-razones-por-las-que-los-colombianos-son-unas-de-las-personas-ma%CC%81s-felices-MainPhoto.jpg"
                    className="card-img"
                    alt="..."
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      Me encantó la Barra de Chocolate Blanco 35%!!
                    </h5>
                    <p className="card-text">
                      De verdad que es el mejor chocolate que he comido en mi vida le doy 5 estrellas de 5 en mi Review.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6oTMK9RZQoHrVjtFSgP7PVDbINmSYvcD1DA&usqp=CAU"
                    className="card-img"
                    alt="..."
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      Me encantó la Barra de Chocolate Blanco 42%!!
                    </h5>
                    <p className="card-text">
                    De verdad que es el mejor chocolate que he comido en mi vida le doy 5 estrellas de 5 en mi Review.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src="https://cloudfront-us-east-1.images.arcpublishing.com/semana/O4XNACZ4NBDE5BEQ7AUOZVRBK4.jpg"
                    className="card-img"
                    alt="..."
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Me encantó la Barra de Chocolate Negro 54%!!</h5>
                    <p className="card-text">
                    De verdad que es el mejor chocolate que he comido en mi vida le doy 5 estrellas de 5 en mi Review.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src="https://www.areacucuta.com/wp-content/uploads/2019/08/luisa-barrios-perez_19_Colombia_barranquilla.jpg"
                    className="card-img"
                    alt="..."
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Me encantó la Barra de Chocolate Negro 70%!!</h5>
                    <p className="card-text">
                    De verdad que es el mejor chocolate que he comido en mi vida le doy 5 estrellas de 5 en mi Review.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions2"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon btn btn-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions2"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon btn btn-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  );
};
