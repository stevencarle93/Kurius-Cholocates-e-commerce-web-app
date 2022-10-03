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
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Cobertura de Chocolate Con Leche 42%</h5>
            <p className="card-text">
              Curva de Temperatura Fusión: 45° - 50°
Descenso: 25° - 27°
Cristalización: 28° - 30°
            </p>
            <p>Usos: Trufas, tabletas, rellenos, pasteleria, postress</p>
          </div>
        </div>
      </div>
    </div>
  );
};