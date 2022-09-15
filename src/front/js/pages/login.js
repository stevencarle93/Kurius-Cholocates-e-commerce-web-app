import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  /*
  const login = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let email = data.get("email");
    let password = data.get("password");

    let loginData = {
      email: email,
      password: password,
    };

    let response = await actions.login("login", loginData, 'POST');

    if (response.ok) {
      response = await response.json()
      
      //redirigir a la landingPage
    
    } else {
      response = await response.json();
      console.log(response.message)
      alert("Usuario o constraseña inválidos");
      return;
    }
  };
  */
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "40vw" }}
      >
        <div className="card text-center" style={{ width: "50%" }}>
          <div className="card-header" style={{ width: "100%" }}>
            <h3>Login</h3>
          </div>
          <div className="card-body" style={{ width: "100%" }}>
            <form onSubmit="{(e) => login(e)}">
              <div className=" d-flex flex-column bd-highlight mb-3">
                <div className="d-flex mb-3">
                  <h5 className="col-4">Email</h5>
                  <input
                    className="col-6"
                    name="email"
                    placeholder="Escriba aquí su email"
                    type="email"
                  />
                </div>
                <div className="d-flex ">
                  <h5 className="col-4">Contraseña</h5>
                  <input
                    className="col-6"
                    name="password"
                    placeholder="Escriba aquí su clave"
                    type="password"
                  />
                </div>
              </div>
              <button className="btn btn-success" type="submit">
                Acceder
              </button>
            </form>
            <div className="mt-3">
              <Link to={"/restorepassword"}>
                <span>Olvidé mi contraseña</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
