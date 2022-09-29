import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";


export const Login = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [color, changeColor] = useState("#F2EBE1");
	document.body.style.backgroundColor = color;
  
  const login = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let email = data.get("email");
    let password = data.get("password");
    let loginData = {
      email: email,
      password: password,
    };
    let response = await actions.login(loginData);
    if (response == "ok"){
      
      navigate("/") //ususario registrado
    }
    else{
      alert(response)
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
              <button className="btn btn-success" type="submit">
                Acceder
              </button>
            </form>
            <div className="mt-3">
              <Link to={"/restorepassword"} onClick={() => changeColor("#F2EBE1")}>
                <span>Olvidé mi contraseña</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};