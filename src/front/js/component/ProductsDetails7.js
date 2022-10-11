import React from "react";
import "../../styles/index.css";
import Cobertura_Chocoleche_60 from "../../img/Coberturas/cobertura-chocoleche-60.png";
import { Link } from "react-router-dom";

export const ProductsDetails7 = () => {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={Cobertura_Chocoleche_60} className="card-img" alt="..."></img>
        </div>
        <div className="col">
          <div className="card-body">
            <h5 className="card-title col-md-12 text-center">Cobertura de Chocolate con Leche 60%</h5> <br></br>
            <div className="row">
              <br></br>
              <div className="col-md-4">
                <h6>Curva de Temperatura</h6> Fusión: 45° - 50° <br></br>
                Descenso: 28° - 29° <br></br>Cristalización: 30° - 31°
                <p>
                <br></br> <h6>Usos</h6> Trufas, tabletas, pasteleria, chocolate a la taza, postres
                </p>
              </div>
              <div className="col-md-4 vl">
                <h6>Perfil organoléptico</h6> <br></br> Semillas secas, notas ligeras, sedoso, untuoso, cremoso, buen snap, buen brillo, balance entre el cacao y semilla seca. <br></br> <br></br>{" "}
                <h6>Fluidez</h6> 3/5
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};