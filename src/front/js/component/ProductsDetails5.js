import React from "react";
import "../../styles/index.css";
import Cobertura_Blanco_35 from "../../img/Coberturas/cobertura-blanco-35.png";
import { Link } from "react-router-dom";

export const ProductsDetails5 = () => {
  return (
    <div className="card mb-3 d-flex justify-content-center">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={Cobertura_Blanco_35} className="card-img" alt="..."></img>
        </div>
        <div className="col">
          <div className="card-body">
            <h5 className="card-title col-md-12 text-center">Cobertura de Blanco 35%</h5> <br></br>
            <div className="row">
              <br></br>
              <div className="col-md-4">
                <h6>Curva de Temperatura</h6> Fusión: 40° - 45° (max) <br></br>
                Descenso: 25° - 27° <br></br>Cristalización: 28° - 30°
                <p>
                <br></br> <h6>Usos</h6> tabletas, bombones, trufas, pasteleria, postres
                </p>
              </div>
              <div className="col-md-4 vl">
                <h6>Perfil organoléptico</h6> <br></br> buen brillo, buen nivel
                de snap, sabor a leche, cremoso, ingrediente principal manteca
                de cacao, dulzor equilibrado. <br></br> <br></br>{" "}
                <h6>Fluidez</h6> 5/5
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
