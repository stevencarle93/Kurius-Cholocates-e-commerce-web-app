import React, { useContext, useEffect, useState } from "react";
import "../../styles/index.css";
import { DataContext } from "../store/Dataprovider";
import Barra_Blanco_35 from "../../img/Barras/barra-blanco-35.png";
import { Context } from "../store/appContext";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


export const ProductsDetails1 = () => {
  //LO QUE NO ESTA COMENTADO ES LA ULTIMA IDEA QUE ENSAYE BASADO EN MI CODIGO DE STAR WARS

  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(async () => {
    await actions.loadProductDetails(params.ProductId);
  }, []);
  const { product } = store;
  console.log (product)
  /*return <>{person ? <p>{person.properties.name}</p> : ""}</>;*/
  /*const value = useContext(DataContext);
  const { store, actions } = useContext(Context);
  console.log (store.products[0])*/
  /*<div>
  {store.products?.map((product, index) => {
  <div className="card mb-3" key={index}>
    <div className="row no-gutters">
      <div className="col-md-4">
        <img src={product.picture} className="card-img" alt="..."></img>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
          {product.description}
          </p>
        </div>
      </div>
    </div>
  </div>
})};
</div>*/
  /*<div className="card mb-3">
<div className="row no-gutters">
  <div className="col-md-4">
    <img src={Barra_Blanco_35} className="card-img" alt="..."></img>
  </div>
  <div className="col-md-8">
    <div className="card-body">
      <h5 className="card-title">Barra de Chocolate Blanco 35%</h5>
      <p className="card-text">
      Para quienes quieres recordar su infancia en cada bocado. Su intenso y cremoso sabor a leche y es un cariño al paladar.
      </p>
    </div>
  </div>
</div>
</div>*/

/*    <div>
      {store.products.map((product, index) => {
        <div className="card mb-3" key={index}>
          {console.log(product.picture)}
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={product.picture} className="card-img" alt="..."></img>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          </div>
        </div>;
      })}
      ;
    </div>*/

  //NO ESTOY RETORNANDO NADA PORQUE QUIERO SIMPLEMENTE ENSAYAR EL CONSOLE.LOG DE ARRIBA Y VER QUE ME LLEGA PERO LLEGA VACIO
  return (
<div></div>
  );
};
