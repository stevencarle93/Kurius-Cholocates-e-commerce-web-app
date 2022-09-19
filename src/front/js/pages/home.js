import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CustomCard } from "../component/ProductsGrids";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-indicators">
				<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
				<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
				<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
			</div>
			<div className="carousel-inner">
				<div className="carousel-item">
					<svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

					<div className="container-carousel">
						<div className="carousel-caption text-start">
							<h1 className="text-black">Promoción Uno</h1>
							<p>Descripción de producto para venta que llama la atención del cliente "(comprar)"</p>
							<p><a className="btn btn-lg btn-primary" href="#">¡Quiero Comprar!</a></p>
						</div>
					</div>
				</div>
				<div className="carousel-item active">
					<svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

					<div className="container-carousel">
						<div className="carousel-caption">
							<h2 className="text-black">Promoción dos</h2>
							<p>Descripción de producto para venta que llama la atención del cliente "(comprar)"</p>
							<p><a className="btn btn-lg btn-primary" href="#">¡Quiero Comprar!</a></p>
						</div>
					</div>
				</div>
				<div className="carousel-item">
					<svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

					<div className="container-carousel">
						<div className="carousel-caption text-end">
							<h1 className="text-black">Promocion tres</h1>
							<p>Descripción de producto para venta que llama la atención del cliente "(comprar)"</p>
							<p><a className="btn btn-lg btn-primary" href="#">¡Quiero Comprar!</a></p>
						</div>
					</div>
				</div>
			</div>
			<button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
			<CustomCard />
		</div>
	);
};
