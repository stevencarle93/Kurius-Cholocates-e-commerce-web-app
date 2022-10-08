import React, { useState, useContext, useEffect } from "react"
import { Context } from "../store/appContext"
import { PayPalButtons } from "@paypal/react-paypal-js"


export const Paypal = ({ carrito }) => {
  const { store, actions } = useContext(Context)

  /////////////    PASAR AL STORE?    /////////////
  // Creamos variable donde guardamos si el pago esta realizado
  const [paidFor, setPaidFor] = useState(false)
  // Creamos variable por si ocurre algun error
  const [error, setError] = useState(null)

  
  // Llamamos a la funcion con el backend para cumplir con el pedido
  const handleAprove = (orderId) => {
    setPaidFor(true)
    setPaidFor(false)
  }

  if (paidFor) {
    // Mostramos mensaje indicando al usuario que el pago se ha completado con exito
    actions.hacerPedido();
    notifyOk("Su pago ha sido realizado correctamente");
  }

  if (error) {
    // Mostramos mensaje de error
    notifyError("Error al realizar el pago!!!");
  }

  return (
    <>
      <PayPalButtons
        className="button-paypal"
        style={{
          color: "gold",
          layout: "vertical",
          heigth: 30,
          shape: "rect",
          label: "pay",
          size: "small",
          tagline: false,
        }}
        // Creamos la orden
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: store.precioCesta,
                },
              },
            ],
          });
        }}
        // Aprobacion
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          handleAprove(data.orderID);
        }}
        onCancel={() => {
          //Mostramos mensaje si hay una cancelacion
          notifyError("La peticion de pago ha sido cancelada");
        }}
        // En caso de Error
        onError={(error) => {
          setError(true);
          console.error("Error al realizarse la operación", error);
          setError(false);
        }}
      />
      <div>
        {/* Componente Alert  
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />*/}
      </div>
    </>
  );
};
