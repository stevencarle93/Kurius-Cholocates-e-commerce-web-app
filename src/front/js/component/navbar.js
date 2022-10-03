import React, { useState, useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Context } from '../store/appContext'
import { DataContext } from "../store/Dataprovider";

export const Navbar = () => {

	const value = useContext(DataContext);
	const [menu, setMenu] = value.menu;
	const [carrito] = value.carrito
	
	const toogleMenu = () => {
		setMenu(!menu)
	}

	const navigate = useNavigate();
	const { store, actions } = useContext(Context)

	const handleLogout = async () => {
		let response = await actions.logout()
		if (response == "ok"){
      navigate("/")
    }
    else{
      alert(response)
    }
	}

	const protectedCall = async () => {
		let response = await actions.protectedTest()
		if (response == "ok"){
      console.log("Successfull request")
    }
    else{
      console.log(response)
    }
		if (response == "Sesion expired") alert("Inicia sesión nuevamente")
	}

	const loginBar = () => {
		if (store.token != ""){
			return (
				<>
					<div className="px-4 m-auto text-white">
						¡Bienvenido {store.user}!
					</div>
						<button type="button" className="btn btn-warning" onClick={() => handleLogout()}>Logout</button>
				</>
			)
		}
		return (
			<>
				<Link to="/login">
					<button type="button" className="btn btn-outline-light me-2">Login</button>
				</Link>
				<Link to="/signup">
					<button type="button" className="btn btn-warning">Sign-up</button>
				</Link>
			</>
		)
	}

	return (
		<nav className="navbar navbar-black">
			<div className="mx-5">
				<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
					<li><Link to="/" className="nav-link px-2 text-warning bold">Home</Link></li>
					<li><Link to="#" onClick={()=>protectedCall()} className="nav-link px-2 text-danger bold">Protected Call</Link></li>
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
			<div className="d-flex text-end mx-5">
				<div className="cart mx-5" onClick={() => toogleMenu()}>
					<box-icon name="cart"></box-icon>
					<span className="items__count">{carrito.length}</span>
				</div>
				{loginBar()}
			</div>
		</nav>
	);
};