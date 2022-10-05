import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../store/appContext"
import "../../styles/index.css"

export const Signup = () => {
  const { store, actions } = useContext(Context)
  const navigate = useNavigate()

  const signup = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    let name = data.get("name")
    let last_name = data.get("last_name")
    let email = data.get("email")
    let password = data.get("password")
    let signupData = {
      name: name,
      last_name: last_name,
      email: email,
      password: password,
    }
    let response = await actions.signup(signupData)
    if (response.validation == "ok"){
      alert(response.message)
      navigate("/login") //se redirige para hacer el login
    }
    else alert(response)
  }

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center letraKurius"
        style={{ minHeight: "40vw", maxHeight: "100%", marginTop: "5%" }}
      >
        <div className="card text-center border-0" style={{ minWidth: "50%", maxWidth: "100%", maxHeight: "100%" }}>
          <div
            className="card-header cabezoteRegistro"
            style={{ width: "100%" }}
          >
            <h3>Sign-up</h3>
          </div>
          <div
            className="card-body cajatextoRegistro"
            style={{ width: "100%" }}
          >
            <form onSubmit={(e) => signup(e)}>
              <div className=" d-flex flex-column bd-highlight mb-3">
                <div className="row d-flex my-3 me-0 justify-content-center">
                  <h6>Nombre:</h6>
                  <input
                    className="col-7"
                    name="name"
                    placeholder="Escriba aquí su nombre"
                    type="string"
                  />
                </div>
                <div className="row d-flex mb-3 me-0 justify-content-center">
                  <h6>Apellido:</h6>
                  <input
                    className="col-7"
                    name="last_name"
                    placeholder="Escriba aquí su apellido"
                    type="string"
                  />
                </div>
                <div className="row d-flex mb-3 me-0 justify-content-center">
                  <h6>Email:</h6>
                  <input
                    className="col-7"
                    name="email"
                    placeholder="Escriba aquí su email"
                    type="email"
                  />
                </div>
                <div className="row d-flex mb-3 me-0 justify-content-center">
                  <h6>Contraseña:</h6>
                  <input
                    className="col-5"
                    name="password"
                    placeholder="Escriba aquí su clave"
                    type="password"
                  />
                  <div>
                    <span id="passwordHelpInline" className="form-text">
                      Debe tener entre 8-20 caracteres
                    </span>
                  </div>
                </div>
              </div>
              <button className="btn buttonRegister" type="submit">
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
