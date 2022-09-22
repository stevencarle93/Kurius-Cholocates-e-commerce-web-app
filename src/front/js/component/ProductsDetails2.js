import React from "react";
import "../../styles/index.css";
import Barra_Chocoleche_42 from "../../img/Barras/barra-chocoleche-42.png";
import { Link } from "react-router-dom";

export const ProductsDetails2 = () => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={Barra_Chocoleche_42} className="card-img" alt="..."></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Barra de Chocolate Blanco 42%</h5>
            <p className="card-text">
            Una deliciosa y equilibrada combinación entre leche y cacao que saca una sonrisa con cada bocado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};