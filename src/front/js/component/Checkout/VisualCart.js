import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { DataContext } from "../../store/Dataprovider";

export const PreviewCart = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [total] = value.total;

  const { store, actions } = useContext(Context)

  const tooglefalse = () => {
    setMenu(false);
  };

  // const show1 = menu ? "carrito-container show" : "carrito-container"
  // const show2 = menu ? "carrito show" : "carrito"

  const resta = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.cantidad === 1 ? (item.cantidad = 1) : (item.cantidad -= 1);
      }
    });
    setCarrito([...carrito]);
  };
  const suma = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.cantidad += 1;
      }
    });
    setCarrito([...carrito]);
  };
  const removerProducto = (id) => {
    carrito.forEach((item, index) => {
      if (item.id === id) {
        item.cantidad = 1;
        carrito.splice(index, 1);
      }
    });
    setCarrito([...carrito]);
  };

  return (
    <>
      {store.carrito.length === 0 ? (
        <h2
          style={{
            textAling: "center",
            fontSize: "3rem",
          }}
        >
          {" "}
          Está Vacio
        </h2>
      ) : (
        <>
          {store.carrito.map((product, index) => (
            <div className="carrito__item" key={index}>
              <img src={product.picture} alt="" />
              <div>
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
              </div>
              <div className="cantidades">
                <box-icon
                  name="plus"
                  onClick={() => actions.suma(product.id)}
                ></box-icon>
                <p className="cantidad">{product.quantity}</p>
                <box-icon
                  name="minus"
                  onClick={() => actions.resta(product.id)}
                ></box-icon>
              </div>
              <div
                className="remove__item"
                onClick={() => actions.deleteCarrito(product)}
              >
                <box-icon name="trash"></box-icon>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};



PreviewCart