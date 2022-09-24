import React, {useState} from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const [color, changeColor] = useState("#0000");
	document.body.style.backgroundColor = color;
	return (
		<nav className="navbar navbar-black">
			<div className="mx-5">
				<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
					<li><Link to="/" className="nav-link px-2 text-warning bold" onClick={() => changeColor("#0000")}>Home</Link></li>
					<li><a href="#" className="nav-link px-2 text-white">Features</a></li>
					<li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
					<li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
					<li><a href="#" className="nav-link px-2 text-white">About</a></li>
				</ul>
			</div>
			<div className="align-items-end justify-content-center justify-content-lg-start">
				<form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
					<input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
				</form>
			</div>

			<div className="text-end mx-5">
				<Link to="/login" onClick={() => changeColor("#F2EBE1")}>
					<button type="button" className="btn btn-outline-light me-2">Login</button>
				</Link>
				<Link to="/signup" onClick={() => changeColor("#F2EBE1")}>
				<button type="button" className="btn btn-warning">Sign-up</button>
				</Link>
			</div>
		</nav>
	);
};