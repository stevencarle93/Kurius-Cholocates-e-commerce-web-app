import React, { useContext } from "react"
import { Context } from "../store/appContext"
import Swal from "sweetalert2"
import "../../styles/index.css"

export const Restore_Password_Request = () => {
  const { store, actions } = useContext(Context)

  const searchUser = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    if (data.get("email") != "") {
      Swal.fire({
        title: "Link de reestablecimiento enviado",
        text: "Revisa tu email y sigue los pasos",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "green",
        timer: "4000",
        background: "#f2ebe1"
      })
      let email = data.get("email")
      let restoreData = { email: email }
      let response = await actions.restoreRequest(restoreData)
      if (response) {
        //console.log(response)
      }
    }
    else Swal.fire({
      title: "No se puedo reestablecer la contraseña",
      text: "Introduce un correo electrónico",
      icon: "error",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "crisom",
      timer: "4000",
      background: "#f2ebe1"
    })   
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
          </div>
        </div>
      </div>
    </>
  )
}