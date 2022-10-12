import React, { useContext, useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import { Context } from "../store/appContext"
import Swal from "sweetalert2"
import "../../styles/index.css"

export const Restore_Password_Restore = () => {
  const { store, actions } = useContext(Context)
  const navigate = useNavigate()
  const params = useParams()
  console.log(params.authorization)
  //const restore_token = window.location.href.substr(process.env.FRONTEND_URL.length+1)
  //console.log(restore_token)    
  
  const restore = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    let email = data.get("email")
    let password = data.get("password")
    let restoreData = { 
      authorization: params.authorization, 
      password: password,
      email: email }
    let response = await actions.restorePATCH(restoreData)
    console.log(response)
    if (response.message == "Contraseña reestablecida con éxito"){
      Swal.fire({
        title: response.message,
        text: "Ahora puedes hacer login",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "green",
        timer: "4000",
        background: "#f2ebe1"
      })
      navigate("/login") //se redirige para hacer el login
    }
    else {
      console.log(response)
      Swal.fire({
        title: "No se puedo reestablecer la contraseña",
        //text: "Ahora puedes hacer login",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "crisom",
        timer: "4000",
        background: "#f2ebe1"
      })
    }
  }
  
  return (
    <>
      {/* {restore_token != "" ? */}
      <div
        className="container d-flex justify-content-center align-items-center letraKurius"
        style={{ minHeight: "40vw", maxHeight: "100%", marginTop: "5%" }}
      >
        <div className="card text-center border-0" style={{ minWidth: "50%", maxWidth: "100%", maxHeight: "100%" }}>
          <div className="card-header cabezoteRegistro" style={{ width: "100%" }}>
            <h3>Reestablecer contraseña</h3>
          </div>
          <div className="card-body cajatextoRegistro" style={{ width: "100%" }}>
            <form onSubmit={(e) => restore(e)}>
            <div className=" d-flex flex-column bd-highlight mb-3">
                <div className="mb-3">
                  <h5>Email:</h5>
                  <div className="input-group justify-content-center">
                    <span className="input-group-text iconos" id="basic-addon1"><box-icon className="input-group-text iconos" name="user" /></span>
                    <input
                      className="inputs col-5"
                      name="email"
                      placeholder="Escriba aquí su email"
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <h5>Nueva contraseña:</h5>
                  <div className="input-group justify-content-center">
                    <span className="input-group-text iconos" id="basic-addon1"><box-icon className="input-group-text iconos" name="lock-open" /></span>
                    <input
                      className="inputs col-5"
                      name="password"
                      placeholder="Escriba aquí su clave"
                      type="password"
                    />
                  </div>
                </div>
              </div>
              <button className="btn buttonRegister" type="submit">
                Confirmar
              </button>
            </form>            
          </div>
        </div>
      </div>
    {/* : 
      Swal.fire({
        title: "Acceso denegado",
        text: "El tiempo para reestablecer la contrase;a termino. Inténtalo nuevamente",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "crimson",
        timer: "1500",
        background: "#f2ebe1"
      })
    } */}
    </>
  )
}