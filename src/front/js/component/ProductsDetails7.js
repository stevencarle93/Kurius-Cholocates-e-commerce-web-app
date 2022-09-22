import React from "react";
import "../../styles/index.css";
import Cobertura_Chocoleche_60 from "../../img/Coberturas/cobertura-chocoleche-60.png";
import { Link } from "react-router-dom";

export const ProductsDetails7 = () => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={Cobertura_Chocoleche_60} className="card-img" alt="..."></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Cobertura de Chocolate con Leche 60%</h5>
            <p className="card-text">
              Curva de Temperatura Fusión: 45° - 50°
Descenso: 28° - 29°
Cristalización: 30° - 31°
            </p>
            <p>Usos: Trufas, tabletas, pasteleria, chocolate a la taza, postres</p>
          </div>
        </div>
      </div>
    </div>
  );
};