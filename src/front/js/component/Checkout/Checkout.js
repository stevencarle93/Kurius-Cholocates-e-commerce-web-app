import React, { useContext } from "react";
import { DataContext } from "../../store/Dataprovider";
import { PreviewCart } from "./VisualCart";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PayPal } from "../paypal";
import { Carrito } from "../Carrito/Carrito";
import { Context } from "../../store/appContext";


export const Checkout = () => {
  const value = useContext(DataContext);
  // const [menu, setMenu] = value.menu;
  // const [carrito, setCarrito] = value.carrito;
  // const [total] = value.total;

  const { store, actions } = useContext(Context)

  // const show1 = menu ? "carrito-container show" : "carrito-container"
  // const show2 = menu ? "carrito show" : "carrito"

  return (
    <PayPalScriptProvider
      options={ {
        "client-id": "sb",
        currency: "USD",
      } }
    >
      <div className="checkout-container">
        <div className="checkout">
          <div className="carrito__close">
            <box-icon name="bar"></box-icon>
          </div>
          <h2 className="text-center">Termina tu pedido</h2>
          <div className="contenido">
            <div className="row">
              <div className="carrito__items2">
                <h2>Valor de la compra: ${store.total}</h2>
                <PayPal />
              </div>
            </div>
            <div className="row">
              <div className="carrito__items2">
                <PreviewCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
};
