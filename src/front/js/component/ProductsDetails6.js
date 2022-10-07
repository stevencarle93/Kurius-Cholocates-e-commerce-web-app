import React from "react";
import "../../styles/index.css";
import Cobertura_Chocoleche_42 from "../../img/Coberturas/cobertura-chocoleche-42.png";
import { Link } from "react-router-dom";

export const ProductsDetails6 = () => {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={Cobertura_Chocoleche_42} className="card-img" alt="..."></img>
        </div>
        <div className="col">
          <div className="card-body">
            <h5 className="card-title col-md-12 text-center">Cobertura de Chocolate Con Leche 42%</h5> <br></br>
            <div className="row">
              <br></br>
              <div className="col-md-4">
                <h6>Curva de Temperatura</h6> Fusión: 50° - 55° <br></br>
                Descenso: 28° - 29° <br></br>Cristalización: 30° - 31°
                <p>
                <br></br> <h6>Usos</h6> tabletas, bombones, trufas, pasteleria, postres, heladeria, galleteria, ganache
                </p>
              </div>
              <div className="col-md-4 vl">
                <h6>Perfil organoléptico</h6> <br></br> semillas secas, buen snap, buen brillo, sedoso, amargo ligero tostado. <br></br> <br></br>{" "}
                <h6>Fluidez</h6> 5/5
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};