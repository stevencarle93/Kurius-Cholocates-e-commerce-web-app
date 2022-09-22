import React from "react";
import "../../styles/index.css";
import Barra_Negro_70 from "../../img/Barras/barra-negro-70.png";
import { Link } from "react-router-dom";

export const ProductsDetails4 = () => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={Barra_Negro_70} className="card-img" alt="..."></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Barra de Chocolate Negro 70%</h5>
            <p className="card-text">
            Chocolate semi amargo, de textura ligera, para quienes les gusta el sabor intenso a cacao.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};