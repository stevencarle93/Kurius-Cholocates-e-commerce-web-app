import React, { useContext, useState } from "react";
import { DataContext } from "../../store/Dataprovider";
import { Context } from "../../store/appContext";
import '../../../styles/index.css';
import { Link } from "react-router-dom";

export const ProductosPrivados = () => {
  //const addCarritox = value.addCarrito;

  const { store, actions } = useContext(Context);

  // const allCategorias = ['All', ...new Set(store.products.map(product => product.product_type))]

  // const [category, setCategory] = useState(allCategorias)
  // const [productos, setProductos] = useState(store.products)


  // const filtrado = (product_type) => {
  //   console.log(product_type)
  // }
  // console.log("estas categorias: " + allCategorias)
  // console.log(productos)
  return (
    <>
      <h2 className="border-bottom mx-5 tituloproductos">Nuestros Productos</h2>
      <div className="productos">
        {store.products.map((product, index) => {
          return (
            <div className="producto card2" key={index}>
              <Link to={`/products/${product.id}`}>
                <div className="producto__img">
                  <img src={product.picture} alt={product.name} />
                </div>
              </Link>
              <div className="buysession">
                <div className="producto__footer">
                  <h1>{product.name}</h1>
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
                    <Link to={`/products/${product.id}`}>
                      Detalles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
