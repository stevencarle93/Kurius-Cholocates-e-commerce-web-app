import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

export const OrdersDetail = () => {
  const { store, actions } = useContext(Context);

  let all_orders = store.orders_detail;
  let each_order = [];

  return (
    <>
      <div style={{ fontSize: "8em", marginTop: "16vh" }}>
        <h2 className="text-center">Tus pedidos</h2>
      </div>
      <div className="order__items m-auto">
        {all_orders.length === 0 ? (
          <h2
            className="text-center"
            style={{
              fontSize: "3rem",
            }}
          >
            {" "}
            No has realizado ningún pedido
          </h2>
        ) : (
          all_orders.map((each_order, i) => {
            return (
              <div className="orders-container" key={i}>
                <div className="orderheader">
                  <p>Orden No. {each_order[i].order.id}</p>
                </div>
                <div className="order-cont">
                  {each_order.map((product_in_order, j) => {
                    return (
                      <div
                        className="border-bottom OrderDetails pe-5"
                        key={j}
                      >
                        <div className="orderData ps-0 justify-content-between">
                          <div className="">
                            <img src={product_in_order.product.picture} alt="" />
                          </div>
                          <div className="OrderInfo" style={{width: "35vw"}}>
                            <div className="d-flex">
                              <div style={{width: "26vw"}}>
                                <h4>{product_in_order.product.name}</h4>
                              </div>
                              <div className="orderhisto ms-0">
                                <p className="cantidad">
                                  Cantidad: {product_in_order.quantity}
                                </p>
                                <p className="price">
                                  Precio unitario: ${product_in_order.price}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="order__shipping ps-0" style={{width: "19vw"}}>
                            <p className="state text-success">
                              {each_order[i].order.order_state}
                            </p>
                            <p className="shipping_address">
                              {each_order[i].order.shipping_address}
                            </p>
                          </div>
                          <div className="DetallesButton button">
                            <Link
                              to={`/products/${product_in_order.product.id}`}
                              className="btn"
                            >
                              Comprar de nuevo
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};
