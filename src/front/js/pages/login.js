import React, { useContext, useEffect } from "react"
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom"
import "../../styles/index.css"
import Swal from 'sweetalert2'

export const Login = () => {
  const { store, actions } = useContext(Context)
  const navigate = useNavigate()

  const login = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    let email = data.get("email")
    let password = data.get("password")
    let loginData = {
      email: email,
      password: password,
    };
    let response = await actions.login(loginData);
    if (response == "ok"){
      Swal.fire({
        title: "Bienvenido",
        text: response.message,
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "green",
        timer: "1500",
        background: "#f2ebe1"
      })
      navigate("/")
    }
    else{
      Swal.fire({
        title: "Datos incorrectos",
        text: toString(response.message),
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "crimson",
        timer: "4000",
        background:"#f2ebe1"
    })
    }

  };
  
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center letraKurius"
        style={{ minHeight: "40vw", maxHeight: "100%", marginTop: "5%" }}
      >
        <div className="card text-center border-0" style={{ minWidth: "50%", maxWidth: "100%", maxHeight: "100%" }}>
          <div className="card-header cabezoteRegistro" style={{ width: "100%" }}>
            <h3>Login</h3>
          </div>
          <div className="card-body cajatextoRegistro" style={{ width: "100%" }}>
            <form onSubmit={(e) => login(e)}>
              <div className=" d-flex flex-column bd-highlight mb-3">
                <div className="mb-3">
                  <h5>Email:</h5>
                  <input
                    className="col-7"
                    name="email"
                    placeholder="Escriba aquí su email"
                    type="email"
                  />
                </div>
                <div>
                  <h5>Contraseña:</h5>
                  <input
                    className="col-7"
                    name="password"
                    placeholder="Escriba aquí su clave"
                    type="password"
                  />
                </div>
              </div>
              <button className="btn buttonRegister" type="submit">
                Acceder
              </button>
            </form>
            <div className="mt-3">
              <Link to={"/restorepassword"} onClick={() => changeColor("#F2EBE1")}>
                <span>Olvidé mi contraseña</span>
              </Link>
            </div>
            <div>
              <Link to={"/signup"} onClick={() => changeColor("#F2EBE1")}>
                <span>¿Aún no eres usuario? Regístrate</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}