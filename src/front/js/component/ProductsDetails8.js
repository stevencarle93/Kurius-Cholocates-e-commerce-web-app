import React from "react";
import "../../styles/index.css";
import Cobertura_Negro_54 from "../../img/Coberturas/cobertura-negro-54.png";
import { Link } from "react-router-dom";

export const ProductsDetails8 = () => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={Cobertura_Negro_54} className="card-img" alt="..."></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Cobertura de Chocolate Semi Dulce 54%</h5>
            <p className="card-text">
              Curva de Temperatura Fusión: 45° - 50°
Descenso: 26° - 27°
Cristalización: 28° - 30°
            </p>
            <p>Usos: tabletas, bombones, trufas, pasteleria, postres</p>
          </div>
        </div>
      </div>
    </div>
  );
};