import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../store/Dataprovider";
import { Context } from '../../store/appContext'
import Swal from "sweetalert2"

export const Carrito = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  //const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  const tooglefalse = () => {
    setMenu(false);
  };

  const show1 = menu ? "carrito-container show" : "carrito-container";
  const show2 = menu ? "carrito show" : "carrito";

  // const resta = (id) => {
  //   carrito.forEach((item) => {
  //     if (item.id === id) {
  //       item.cantidad === 1 ? (item.cantidad = 1) : (item.cantidad -= 1);
  //     }
  //   });
  //   setCarrito([...carrito]);
  // };
  // const suma = (id) => {
  //   carrito.forEach((item) => {
  //     if (item.id === id) {
  //       item.cantidad += 1;
  //     }
  //   });
  //   setCarrito([...carrito]);
  // };
  // const removerProduct = (id) => {
  //   carrito.forEach((item, index) => {
  //     if (item.id === id) {
  //       item.cantidad = 1;
  //       carrito.splice(index, 1);
  //     }
  //   });
  //   setCarrito([...carrito]);
  // };
  
  
  useEffect



  return (
    <div className={show1}>
      <div className={show2}>
        <div className="carrito__close" onClick={tooglefalse}>
          <box-icon name="x" />
        </div>
        <h2>Su carrito</h2>

        <div className="carrito__items">
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
        </div>
        <div className="carrito__footer">
          <h3>Total: ${store.total}</h3>
          {store.token?
            <Link to="/checkout">
              <button className="btn">Comprar</button>
            </Link> 
             : 
            <button className="btn" onClick={()=>(
              Swal.fire({
                title: "Inicia sesión para proceder con el pago",
                
                icon: "error",
                confirmButtonText: "Ok",
                confirmButtonColor: "crimson",
                timer: "4000",
                background:"#f2ebe1"
            }), navigate("/login"))}>Comprar</button>} 
        </div>
      </div>
    </div>
  );
};
