import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { Context } from '../store/appContext'
import Swal from "sweetalert2"

export const OrdersDetail = () => {
  const { store, actions } = useContext(Context)
  
  let all_orders = store.orders_detail
  let each_order = []
  
  return (
    <>
      <div>
        <h2>Histórico de compras</h2>
      </div>
      <div className="carrito__items">
        {
          all_orders.length === 0 ? (
              <h2
                style={{
                  textAling: "center",
                  fontSize: "3rem",
                }}
              >
                {" "}
                No se ha realizado ningún pedido
              </h2>
          ) : (
            all_orders.map((each_order,i) =>{
              return (
                <div key={i}>
                  <p className="price">Orden No. {each_order[i].order.id}</p>
                  {
                    each_order.map((product_in_order,j) => {
                      return (
                        <div className="carrito__item" key={j}>
                          <img src={product_in_order.product.picture} alt="" />
                          <div>
                            <h3>{product_in_order.product.name}</h3>
                            <p className="price">Cantidad {product_in_order.quantity}</p>
                            <p className="price">Precio unitario ${product_in_order.price}</p>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          )
        }
      </div>
    </>
  )
}
