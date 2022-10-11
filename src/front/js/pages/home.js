import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "boxicons";
import { Carrito } from "../component/Carrito/Carrito";
import "../../styles/index.css";
import { ProductList } from "../component/Products/ProductList";
import { ReviewsCarousel } from "../component/ReviewsCarousel";
import { Carousel } from "../component/Carousel";
import { ProductosPrivados } from "../component/Products/ProductosPrivados";

export const Home = () => {
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
  const [color, changeColor] = useState("#ffffff");
  document.body.style.backgroundColor = color;

  /*<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="..." className="d-block w-100" alt="...">
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="...">
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="...">
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>*/

  /*<div id="myCarousel" classNameName="carousel slide" data-bs-ride="carousel">
<div classNameName="carousel-indicators">
<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" classNameName="active" aria-current="true" aria-label="Slide 1"></button>
<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div classNameName="carousel-inner">
<div classNameName="carousel-item">
  <svg classNameName="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

  <div classNameName="container-carousel">
    <div classNameName="carousel-caption text-start">
      <h1 classNameName="text-black">Promoción Uno</h1>
      <p>Descripción de producto para venta que llama la atención del cliente "(comprar)"</p>
      <p><a classNameName="btn btn-lg btn-primary" href="#">¡Quiero Comprar!</a></p>
    </div>
  </div>
</div>
<div classNameName="carousel-item active">
  <img src={Cajas_1} classNameName="d-block" width="100%" height="20%" alt="..."></img>
  <div classNameName="container-carousel">
    <div classNameName="carousel-caption">
      <h2 classNameName="text-black">Promoción dos</h2>
      <p>Descripción de producto para venta que llama la atención del cliente "(comprar)"</p>
      <p><a classNameName="btn btn-lg btn-primary" href="#">¡Quiero Comprar!</a></p>
    </div>
  </div>
</div>
<div classNameName="carousel-item">
  <svg classNameName="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

  <div classNameName="container-carousel">
    <div classNameName="carousel-caption text-end">
      <h1 classNameName="text-black">Promocion tres</h1>
      <p>Descripción de producto para venta que llama la atención del cliente "(comprar)"</p>
      <p><a classNameName="btn btn-lg btn-primary" href="#">¡Quiero Comprar!</a></p>
    </div>
  </div>
</div>
</div>
<button classNameName="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
<span classNameName="carousel-control-prev-icon" aria-hidden="true"></span>
<span classNameName="visually-hidden">Previous</span>
</button>
<button classNameName="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
<span classNameName="carousel-control-next-icon" aria-hidden="true"></span>
<span classNameName="visually-hidden">Next</span>
</button>*/
  const { store, actions } = useContext(Context);
  //<ProductList />
  return (
    <>
      <Carousel />
      <Carrito />
      <h2 className="border-bottom mx-5">Nuestros Productos</h2>
      <ProductosPrivados products={store.products.result} />
      <ReviewsCarousel />
    </>
  );
};
