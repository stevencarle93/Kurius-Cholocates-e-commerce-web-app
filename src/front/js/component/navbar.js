import React, { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Context } from '../store/appContext'
import { DataContext } from "../store/Dataprovider"
import Logo from '../../img/LogoKurius.png'
import Swal from "sweetalert2"

export const Navbar = () => {
	const value = useContext(DataContext)
	const [menu, setMenu] = value.menu
//	const [carrito] = value.carrito
	const navigate = useNavigate();
	const { store, actions } = useContext(Context)
	const [reset] = useState([])
	const [color, changeColor] = useState("#0000");
	document.body.style.backgroundColor = color;

	const toogleMenu = () => {
		setMenu(!menu)
	}

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
		if (response == "Sesion expired") Swal.fire({
			title: "Sesión expirada",
			text: "Inicie sesión nuevamente",
			icon: "warning",
			confirmButtonText: "Ok",
			confirmButtonColor: "orange",
			timer: "4000",
			background:"#f2ebe1"
		})
	}

	const loginBar = () => {
		if (store.token != ""){
			return (
				<>
					<div className="px-4 m-auto text-dark bold">
						¡Bienvenido {store.user}!
					</div>
						<button type="button" className="btn btn-warning" onClick={() => handleLogout()}>Logout</button>
				</>
			)
		}
		return (
			<>
				<Link to="/login">
					<button type="button" className="btn btn-kurius me-2">Login</button>
				</Link>
				<Link to="/signup">
					<button type="button" className="btn btn-warning">Sign-up</button>
				</Link>
			</>
		)
	}

	const carritoView = () => {
		let restrictedViews = ["login", "signup", "restorepassword"]
		for (let views of restrictedViews) {
			if (window.location.href.indexOf(views) > -1) return
		}
		return (
			<>
				<div className="cart mx-5" onClick={() => toogleMenu()}>
					<box-icon name="cart"></box-icon>
					<span className="items__count">{store.carrito.length}</span>
				</div>
			</>
		)
	}


	
	return (
		<nav className="navbar navbar-black">
			<div className="mx-5">
				<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 align-items-center mb-md-0">
					<li><Link to="/" className="nav-link px-2 text-warning bold" onClick={() => changeColor("#0000") [reset]}><img className="logoNavbar" src={Logo} width="110px"/></Link></li>
				</ul>
			</div>
			<div className="d-flex align-items-center text-end mx-5">
				{carritoView()}
				{loginBar()}
			</div>
		</nav>
	)
}