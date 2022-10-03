import React from "react";
import "../../styles/index.css";
import Cobertura_Negro_70 from "../../img/Coberturas/cobertura-negro-70.png";
import { Link } from "react-router-dom";

export const ProductsDetails9 = () => {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={Cobertura_Negro_70} className="card-img" alt="..."></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Cobertura de Chocolate Semi Amargo 70%</h5>
            <p className="card-text">
              Curva de Temperatura Fusión: 50° - 55°
Descenso: 28° - 29°
Cristalización: 30° - 31°
            </p>
            <p>Usos: tabletas, bombones, trufas, pasteleria, postres, heladeria, galleteria, ganache</p>
          </div>
        </div>
      </div>
    </div>
  );
};