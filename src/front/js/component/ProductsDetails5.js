import React from "react";
import "../../styles/index.css";
import Cobertura_Blanco_35 from "../../img/Coberturas/cobertura-blanco-35.png";
import { Link } from "react-router-dom";

export const ProductsDetails5 = () => {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={Cobertura_Blanco_35} className="card-img" alt="..."></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Cobertura de Blanco 35%</h5>
            <p className="card-text">
              Curva de Temperatura Fusión: 40° - 45° (max)
Descenso: 25° - 27°
Cristalización: 28° - 30°
            </p>
            <p>Usos: tabletas, bombones, trufas, pasteleria, postres</p>
          </div>
        </div>
      </div>
    </div>
  );
};
