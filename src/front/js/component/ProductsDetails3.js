import React from "react";
import "../../styles/index.css";
import Barra_Negro_54 from "../../img/Barras/barra-negro-54.png";
import { Link } from "react-router-dom";

export const ProductsDetails3 = () => {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={Barra_Negro_54} className="card-img" alt="..."></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Barra de Chocolate Negro 54%</h5>
            <p className="card-text">
            Chocolate negro con un toque dulce que nos regala el balance perfecto de sabor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};