import React, { Component } from "react";
import Logo from '../../img/LogoKurius.png'

export const Footer = () => (
	<footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
		<div className="col-md-4 d-flex align-items-center">
			<div className="FooterKurius">
				<img src={Logo} alt="Kurius" />
				<span className="mx-5 mb-3 mb-md-0 text-muted">© Copyright, Kurius Inc e-commerce 2022 </span>
			</div>
			<ul className="nav">
				<li className=""><a className="text-muted" href="#"><box-icon name='facebook' size='lg' border='circle' type='logo'></box-icon></a></li>
				<li className=""><a className="text-muted" href="#"><box-icon name='instagram' size='lg' border='circle' type='logo'></box-icon></a></li>
				<li className=""><a className="text-muted" href="#"><box-icon name='github' size='lg' border='circle' type='logo'></box-icon></a></li>
			</ul>
		</div>

		<div className="col mb-3">

		</div>

		<div className="col mb-3">
			<h5>Section</h5>
			<ul className="nav flex-column">
				<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
				<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Productos</a></li>
			</ul>
		</div>

		<div className="col mb-3">
			<h5 className="mt-5">Productos</h5>
			<ul className="nav flex-column">
				<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Coberturas</a></li>
				<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Tabletas</a></li>
				<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Bombones</a></li>
			</ul>
		</div>

		<div className="col mb-3">
			<h5>Contacto</h5>
			<ul className="nav flex-column">
				<li className="nav-item mb-2 d-flex"><box-icon name='envelope' /><a href="mailto:info@kuriuschocolate.com" className="nav-link mx-2 p-0 text-muted">info@kuriuschocolate.com</a></li>
				<li className="nav-item mb-2 d-flex"><box-icon name='phone-call' animation='tada' /><a href="tel:+5930988902460" className="nav-link mx-2 p-0 text-muted">+593 098 890 24 60</a></li>
			</ul>
		</div>
	</footer>
);
