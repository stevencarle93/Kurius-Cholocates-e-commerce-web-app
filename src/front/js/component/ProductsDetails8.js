import React from "react";
import "../../styles/index.css";
import Cobertura_Negro_54 from "../../img/Coberturas/cobertura-negro-54.png";
import { Link } from "react-router-dom";

export const ProductsDetails8 = () => {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={Cobertura_Negro_54} className="card-img" alt="..."></img>
        </div>
        <div className="col">
          <div className="card-body">
            <h5 className="card-title col-md-12 text-center">Cobertura de Chocolate Semi Dulce 54%</h5> <br></br>
            <div className="row">
              <br></br>
              <div className="col-md-4">
                <h6>Curva de Temperatura</h6> Fusión: 45° - 50° <br></br>
                Descenso: 26° - 27° <br></br>Cristalización: 28° - 30°
                <p>
                <br></br> <h6>Usos</h6> tabletas, bombones, trufas, pasteleria, postres.
                </p>
              </div>
              <div className="col-md-4 vl">
                <h6>Perfil organoléptico</h6> <br></br> Notas ligeras a fruto seco, buen snap, cremoso, equilibrado entre el cacao y el dulzor del azúcar. <br></br> <br></br>{" "}
                <h6>Fluidez</h6> 3/5
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};