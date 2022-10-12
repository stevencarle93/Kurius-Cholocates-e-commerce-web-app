import React, { useContext } from "react";
import { DataContext } from "../../store/Dataprovider";
import { Context } from "../../store/appContext";
import "../../../styles/index.css";
import { Link } from "react-router-dom";

export const ProductosPrivados = () => {
  const value = useContext(DataContext);
  //const addCarritox = value.addCarrito;

  const { store, actions } = useContext(Context);

  return (
<<<<<<< HEAD
    <div>
      {store.products.map((product, index) => {
        return (
          <div className="productos">
=======
    <>
      <div className="productos">
        {store.products.map((product, index) => {
          return (
>>>>>>> develop
            <div className="producto card2" key={index}>
              <a>
                <div className="producto__img">
                  <img src={product.picture} alt={product.name} />
                </div>
              </a>
              <div className="buysession">
                <div className="producto__footer">
                  <h1>{product.name}</h1>
                  <p className="text-break">{product.description}</p>
                  <p className="price">${product.price}</p>
                </div>
                <div className="button">
                  <button
                    className="btn"
                    onClick={() => actions.addCarrito(product)}
                  >
                    Añadir al carrito
                  </button>
                  <div>
<<<<<<< HEAD
                    {/*MODIFIQUE ESTA RUTA PARA VER SI PODIA LLEGAR DIRECTAMENTE AL DETALLE DEL PRODUCTO SIN ENFOCARME EN LA PALABRA "DETAILS" QUE TENIA ANTES DEL "/"*/}
                    <Link to={"/" + product.id} className="btn">
=======
                    <Link to={"/Details/" + product} className="btn">
>>>>>>> develop
                      Ver más
                    </Link>
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD
          </div>
        );
      })}
    </div>
=======
          );
        })}
      </div>
    </>
>>>>>>> develop
  );
};
