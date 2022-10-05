import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../store/appContext"
import "../../styles/index.css"

export const RestorePassword = () => {
  const { store, actions } = useContext(Context)
  const [cambio, setCambio] = useState(false)
  const navigate = useNavigate()

  const passwordInput = document.getElementById('passwordInput')
  
  const restoreDisplay = () => {
		if (store.user){
      passwordInput.value = ""
      return (
				<>
					<form onSubmit={(e) => restore(e)}>
            <div className=" d-flex flex-column bd-highlight mb-3">
              <div className="d-flex">
                <h5 className="col-4 text-end pe-3">Nueva contraseña:</h5>
                <input
                  id="passwordInput"
                  className="col-6"
                  name="password"
                  placeholder="Escriba aquí su nueva clave"
                  type="password"
                />
              </div>
            </div>
            <button className="btn buttonRegister" type="submit">
              Confirmar
            </button>
          </form>
				</>
			)
		}
    else {
      return (
        <>
          <form onSubmit={(e) => searchUser(e)}>
            <div className=" d-flex flex-column bd-highlight mb-3">
              <div className="d-flex">
                <h5 className="col-4 text-end pe-3">Email:</h5>
                <input
                  id="passwordInput"
                  className="col-6"
                  name="email"
                  placeholder="Escriba el email registrado"
                  type="email"
                />
              </div>
            </div>
            <button className="btn buttonRegister" type="submit">
              Enviar
            </button>
          </form>
        </>
      )
    }
	}
  
  const searchUser = async (e) => {////////flaskmail?
    e.preventDefault()
    const data = new FormData(e.target)
    let email = data.get("email")
    let restoreData = { email: email }
    let response = await actions.restorePOST(restoreData)
    if (response.message === "User found") {
      setCambio (!cambio)
    } else {
      response = await response.json()
      console.log(response.message)
      alert("Email no registrado")
      return
    }
  }
  
  const restore = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    let password = data.get("password")
    let restoreData = { password: password }
    let response = await actions.restorePATCH(restoreData)
    console.log(response.message)
    if (response.message == "Password restablished"){
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
          <div className="card-header cabezoteRegistro" style={{ width: "100%" }}>
            <h3>Reestablecer contraseña</h3>
          </div>
          <div className="card-body cajatextoRegistro" style={{ width: "100%" }}>
            {restoreDisplay()}            
          </div>
        </div>
      </div>
    </>
  )
}