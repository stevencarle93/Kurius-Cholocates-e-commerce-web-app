import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  /*
  const signup = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let name = data.get("name")
    let last_name = data.get("last_name")
    let email = data.get("email");
    let password = data.get("password");
    let signupData = {
      name: name,
      last_name:last_name,
      email: email,
      password: password
    };
    let response = await actions.login("signup", signupData, 'POST');
    if (response.ok) {
      response = await response.json();
      alert(response.message);
      //redirigir a la landingPage
    } else {
      response = await response.json();
      if (response != undefined) alert(response.message);
      else alert("Internal error");
      return;
    }
  };
  */
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center letraKurius"
        style={{ height: "40vw" }}
      >
        <div className="card text-center border-0" style={{ width: "55%" }}>
          <div className="card-header cabezoteRegistro" style={{ width: "100%" }}>
            <h3>Sign-up</h3>
          </div>
          <div className="card-body cajatextoRegistro" style={{ width: "100%" }}>
            <form onSubmit="{(e) => signup(e)}">
              <div className=" d-flex flex-column bd-highlight mb-3">
                <div className="row d-flex my-3 me-0 justify-content-center">
                  <h6 className="col-2 text-end">Nombre</h6>
                  <input
                    className="col-7"
                    name="name"
                    placeholder="Escriba aquí su nombre"
                    type="string"
                  />
                </div>
                <div className="row d-flex mb-3 me-0 justify-content-center">
                  <h6 className="col-2 text-end">Apellido</h6>
                  <input
                    className="col-7"
                    name="last_name"
                    placeholder="Escriba aquí su apellido"
                    type="string"
                  />
                </div>
                <div className="row d-flex mb-3 me-0 justify-content-center">
                  <h6 className="col-2 text-end">Email</h6>
                  <input
                    className="col-7"
                    name="email"
                    placeholder="Escriba aquí su email"
                    type="email"
                  />
                </div>
                <div className="row d-flex mb-3 me-0 justify-content-center">
                  <h6 className="col-2 text-end">Contraseña</h6>
                  <input
                    className="col-3"
                    name="password"
                    placeholder="Escriba aquí su clave"
                    type="password"
                  />
                  <div class="col-4">
                    <span id="passwordHelpInline" class="form-text">
                      Debe tener entre 8-20 caracteres
                    </span>
                  </div>
                </div>
              </div>
              <button className="btn btn-success" type="submit">
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};