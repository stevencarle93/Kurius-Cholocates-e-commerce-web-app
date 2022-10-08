import React, { useContext } from "react";
import { DataContext } from "../../store/Dataprovider";
import { Context } from "../../store/appContext";
import '../../../styles/index.css';

export const ProductosPrivados = () => {
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;

  const { store, actions } = useContext(Context);

  return (
    <div>
        <h2 className="border-bottom mx-5">Nuestros Productos</h2>
      {store.products.map((product, index) => {
        return (
            <div className="producto card2" key={index}>
              <a>
                <div className="producto__img">
                  <img src={product.picture} alt={product.name} />
                </div>
              </a>
              <div className="buysession">
                <div className="producto__footer">
                  <h1>{product.name}</h1>
                  <p>{product.description}</p>
                  <p className="price">${product.price}</p>
                </div>
                <div className="button">
                  <button
                    className="btn"
                    onClick={() => addCarrito(product.id)}
                  >
                    Añadir al carrito
                  </button>
                  <div>
                    <a href={"/Details/" + product.id} className="btn">
                      Ver más
                    </a>
                  </div>
                </div>
              </div>
            </div>
        );
      })}
    </div>
  );
};
