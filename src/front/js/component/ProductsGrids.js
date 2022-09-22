import React from "react";
import "../../styles/index.css";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import Barra_Blanco_35 from "../../img/Barras/barra-blanco-35.png";
import Barra_Chocoleche_42 from "../../img/Barras/barra-chocoleche-42.png";
import Barra_Negro_54 from "../../img/Barras/barra-negro-54.png";
import Barra_Negro_70 from "../../img/Barras/barra-negro-70.png";
import Portada_Principal_Barras from "../../img/Barras/portada-principal-barras.jpg";
import Cajas_1 from "../../img/Bombones/Cajas1_Modified.jpg";
import Cajas_2 from "../../img/Bombones/Cajas2.jpg";
import Cajas_4 from "../../img/Bombones/Cajas4.jpg";
import Portada_Principal_Bombones from "../../img/Bombones/portada-principal-bombones.jpg";
import Cobertura_Blanco_35 from "../../img/Coberturas/cobertura-blanco-35.png";
import Cobertura_Chocoleche_42 from "../../img/Coberturas/cobertura-chocoleche-42.png";
import Cobertura_Chocoleche_60 from "../../img/Coberturas/cobertura-chocoleche-60.png";
import Cobertura_Negro_54 from "../../img/Coberturas/cobertura-negro-54.png";
import Cobertura_Negro_70 from "../../img/Coberturas/cobertura-negro-70.png";
import Portada_Principal_Coberturas from "../../img/Coberturas/portada-principal-coberturas.jpg";
import { Link } from "react-router-dom";

/*<div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={divStyle}>
<div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-black noa">Prueba de imagen</h2>
    <ul className="d-flex list-unstyled mt-auto">
        <li className="me-auto">
            <img src={Barra_Blanco_35} alt="Bootstrap" width="200" height="200" className="rounded-circle border border-white" />
        </li>
        <li className="d-flex align-items-center me-3">
            <small>Prueba</small>
        </li>
        <li className="d-flex align-items-center">

        </li>
    </ul>
</div>
</div>*/

export const CustomCard = () => {
  const divStyle = {
    backgroundColor: "red",
  };

  return (
    <div className="mt-5">
      <h2 className="border-bottom mx-5">Nuestros Productos</h2>

      <div className="container px-4 py-5" id="custom-cards">
        <div className="row row-cols-1  row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div className="row row-cols-1 row-cols-md-2">
              <Link to="/Details/1">
                <div className="col mb-4">
                  <div className="card2">
                    <img
                      src={Barra_Blanco_35}
                      className="card-img-top"
                      alt="..."
                    ></img>
                    <div className="card-body">
                      <h6 className="card-title">
                        Barra de Chocolate Blanco 35%
                      </h6>
                      <button type="button" className="btn btn-info">
                        Ver más
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/Details/2">
                <div className="col mb-4">
                  <div className="card2">
                    <img
                      src={Barra_Chocoleche_42}
                      className="card-img-top"
                      alt="..."
                    ></img>
                    <div className="card-body">
                      <h6 className="card-title">
                        Barra de Chocolate Blanco 42%
                      </h6>
                      <button type="button" className="btn btn-info">
                        Ver más
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/Details/3">
                <div className="col mb-4">
                  <div className="card2">
                    <img
                      src={Barra_Negro_54}
                      className="card-img-top"
                      alt="..."
                    ></img>
                    <div className="card-body">
                      <h6 className="card-title">
                        Barra de Chocolate Negro 54%
                      </h6>
                      <button type="button" className="btn btn-info">
                        Ver más
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/Details/4">
                <div className="col mb-4">
                  <div className="card2">
                    <img
                      src={Barra_Negro_70}
                      className="card-img-top"
                      alt="..."
                    ></img>
                    <div className="card-body">
                      <h6 className="card-title">
                        Barra de Chocolate Negro 70%
                      </h6>
                      <button type="button" className="btn btn-info">
                        Ver más
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/*<div className="col">
            <Link to="#">
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src={Cajas_1}
                      className="card-img-top"
                      alt="..."
                    ></img>
                    <div className="card-body">
                      <h6 className="card-title">Bombones Caja 1</h6>
                      <button type="button" className="btn btn-info">Ver más</button>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src={Cajas_2}
                      className="card-img-top"
                      alt="..."
                    ></img>
                    <div className="card-body">
                      <h6 className="card-title">Bombones Caja 2</h6>
                      <button type="button" className="btn btn-info">Ver más</button>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src={Cajas_4}
                      className="card-img-top"
                      alt="..."
                    ></img>
                    <div className="card-body">
                      <h6 className="card-title">Bombones Caja 4</h6>
                      <button type="button" className="btn btn-info">Ver más</button>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src={Portada_Principal_Bombones}
                      className="card-img-top"
                      alt="..."
                    ></img>
                    <div className="card-body">
                      <h6 className="card-title">Portada Principal Bombones</h6>
                      <button type="button" className="btn btn-info">Ver más</button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
  </div>*/}

          <div className="col">
            <div className="row row-cols-1 row-cols-md-2">
              <Link to="/Details/5">
                <div className="col mb-4">
                  <div className="card2">
                    <img
                      src={Cobertura_Blanco_35}
                      className="card-img-top"
                      alt="..."
                    ></img>
                    <div className="card-body">
                      <h6 className="card-title">Cobertura de Blanco 35%</h6>
                      <button type="button" className="btn btn-info">
                        Ver más
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/Details/6">
                <div className="col mb-4">
                  <div className="card2">
                    <img
                      src={Cobertura_Chocoleche_42}
                      className="card-img-top"
                      alt="..."
                    ></img>
                    <div className="card-body">
                      <h6 className="card-title">
                        Cobertura de Chocolate Con Leche 42%
                      </h6>
                      <button type="button" className="btn btn-info">
                        Ver más
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/Details/7">
                <div className="col mb-4">
                  <div className="card2">
                    <img
                      src={Cobertura_Chocoleche_60}
                      className="card-img-top"
                      alt="..."
                    ></img>
                    <div className="card-body">
                      <h6 className="card-title">
                        Cobertura de Chocolate con Leche 60%
                      </h6>
                      <button type="button" className="btn btn-info">
                        Ver más
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/Details/8">
                <div className="col mb-4">
                  <div className="card2">
                    <img
                      src={Cobertura_Negro_54}
                      className="card-img-top"
                      alt="..."
                    ></img>
                    <div className="card-body">
                      <h6 className="card-title">
                        Cobertura de Chocolate Semi Dulce 54%
                      </h6>
                      <button type="button" className="btn btn-info">
                        Ver más
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/Details/9">
                <div className="col mb-4">
                  <div className="card2">
                    <img
                      src={Cobertura_Negro_70}
                      className="card-img-top"
                      alt="..."
                    ></img>
                    <div className="card-body">
                      <h6 className="card-title">
                        Cobertura de Chocolate Semi Amargo 70%
                      </h6>
                      <button type="button" className="btn btn-info">
                        Ver más
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
