import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../store/Dataprovider";

export const Carrito = () => {

    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;

    const tooglefalse = () => {
        setMenu(false)
    }

    const show1 = menu ? "carrito-container show" : "carrito-container"
    const show2 = menu ? "carrito show" : "carrito"


    const resta = id => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -= 1;
            }
        })
        setCarrito([...carrito])
    }
    const suma = id => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.cantidad += 1;
            }
        })
        setCarrito([...carrito])
    }
    const removerProducto = id => {
        carrito.forEach((item, index) => {
            if (item.id === id) {
                item.cantidad = 1;
                carrito.splice(index, 1)
            }
        })
        setCarrito([...carrito])
    }

    return (
        <div className={show1}>
            <div className={show2}>
                <div className="carrito__close" onClick={tooglefalse}>
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su carrito</h2>


                <div className="carrito__items">
                    {
                        carrito.length === 0 ? <h2 style={{
                            textAling: "center", fontSize: "3rem"
                        }}> Está Vacio</h2> :
                            <>
                                {
                                    carrito.map((producto) => (<div className="carrito__item" key={producto.id}>
                                        <img src={producto.image.default} alt="" />
                                        <div>
                                            <h3>{producto.title}</h3>
                                            <p className="price">${producto.price}</p>
                                        </div>
                                        <div className="cantidades">
                                            <box-icon name='plus' onClick={() => suma(producto.id)}></box-icon>
                                            <p className="cantidad">{producto.cantidad}</p>
                                            <box-icon name='minus' onClick={() => resta(producto.id)}></box-icon>
                                        </div>
                                        <div className="remove__item" onClick={() => removerProducto(producto.id)}>
                                            <box-icon name="trash"></box-icon>
                                        </div>
                                    </div>))
                                }
                            </>
                    }
                </div>
                <div className="carrito__footer">
                    <h3>Total: ${total}</h3>
                    <Link to="/checkout">
                    <button className="btn">Comprar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}