import React, { useContext } from "react"
import { DataContext } from "../../store/Dataprovider"
import { PreviewCart } from "./VisualCart"
import { PayPal } from "../paypal"

export const Checkout = (props) => {

    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;

    // const show1 = menu ? "carrito-container show" : "carrito-container"
    // const show2 = menu ? "carrito show" : "carrito"


  

    return (
        <div className="checkout-container">
            <div className="checkout">
                <div className="carrito__close">
                    <box-icon name="bar"></box-icon>
                </div>
                <h2 className="text-center">Termina tu pedido</h2>
                <div className="contenido">
                    <div className="row">
                        <div className="carrito__items2">
                           {/* componente */}
                           <PayPal total={total}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="carrito__items2">
                            <PreviewCart/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

