import React from "react";
import "../../styles/index.css";
import Barra_Blanco_35 from "../../img/Barras/barra-blanco-35.png";
import { Link } from "react-router-dom";

export const ProductsDetails1 = () => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={Barra_Blanco_35} className="card-img" alt="..."></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Barra de Chocolate Blanco 35%</h5>
            <p className="card-text">
            Para quienes quieres recordar su infancia en cada bocado. Su intenso y cremoso sabor a leche y es un cariño al paladar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
