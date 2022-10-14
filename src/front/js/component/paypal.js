import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../store/appContext"
import { PayPalButtons } from "@paypal/react-paypal-js"
import Swal from "sweetalert2"
import { DataContext } from "../store/Dataprovider";

export const PayPal = () => {
  const { store, actions } = useContext(Context)
  const navigate = useNavigate()
  const value = useContext(DataContext)
  const [menu, setMenu] = value.menu

  const handleAprove = async (order) => {
    let shipping_address = 
      order.payer.address.address_line_1 + ", " +
      order.payer.address.admin_area_1 + ", " +
      order.payer.address.country_code + ", " +
      order.payer.address.postal_code

    let orderData = [
      store.carrito,
      {
        shipping_address: shipping_address,
        order_state: order.status
      }
    ]
    let response = await actions.crearOrden(orderData)
    if (response == "ok"){
      Swal.fire( {
        title: "Pago realizado con exito",
        text: "Tu orden ha sido creada",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "green",
        timer: "1500",
        background:"#f2ebe1"
      } )
      navigate("/")
      setMenu(!menu)
    }
    else Swal.fire( {
      title: "Hubo un error con el pago",
      text: response,
      icon: "error",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "crimson",
      timer: "1500",
      background:"#f2ebe1"
    } )
  }

  return (
      <PayPalButtons
        className="button-paypal"
        style = { {
          color: "gold",
          layout: "vertical",
          heigth: 30,
          shape: "rect",
          label: "pay",
          size: "small",
          tagline: false,
        } }
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [ { amount: {
                currency_code: "USD",
                value: store.total,
              } } ]
          } )
        } }
        onApprove = { async (data, actions) => {
          const order = await actions.order.capture()
            console.log(order)
            handleAprove(order)
        } }
        onCancel={(data) => {
          Swal.fire( {
            title: "Peticion de pago cancelada",
            icon: "error",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "crimson",
            timer: "2500",
            background:"#f2ebe1"
        } )
        } }
        onError={(error) => {
          Swal.fire( {
            title: "Error en el pago. Inténtalo nuevamente",
            icon: "error",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "crimson",
            timer: "2500",
            background:"#f2ebe1"
          } )
        } }
      />
  )
}
