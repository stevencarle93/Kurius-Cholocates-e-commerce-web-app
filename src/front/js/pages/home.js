import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Cajas_1 from "../../img/Bombones/Cajas1.jpg";
import Cajas_2 from "../../img/Bombones/Cajas2.jpg";
import Cajas_4 from "../../img/Bombones/Cajas4.jpg";
import Portada_Principal_Bombones from "../../img/Bombones/portada-principal-bombones.jpg";
import "../../styles/home.css";
import { CustomCard } from "../component/ProductsGrids";

export const Home = () => {
  const { store, actions } = useContext(Context);

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
  return (
	<>
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
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
        <div className="carousel-item active" style={{height:"20%"}}>
          <img src={Cajas_1} className="" width="100%" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div className="carousel-item">
		<img src={Cajas_2} className="" width="100%" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div className="carousel-item">
          <img src={Cajas_4} className="" width="100%" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
          </div>
		</div>
		<div className="carousel-item">
          <img src={Portada_Principal_Bombones} className="" width="100%" alt="..."/>
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
      <CustomCard />
	  </>
  );
};
