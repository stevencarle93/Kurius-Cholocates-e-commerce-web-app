import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../store/Dataprovider";


export const ProductoItem = ({
    id,
    title,
    price,
    image,
    description}) => {

        const value = useContext(DataContext);
        const addCarrito = value.addCarrito;

    return(
        <div>
            <div className='producto card2'>
                    <a>
                        <div className='producto__img'>
                            <img src={image.default} alt={title} />
                        </div>
                    </a>
                    <div className='buysession'>
                        <div className='producto__footer'>
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <p className='price'>${price}</p>
                        </div>
                        <div className='button'>
                            <button className='btn' onClick={() => addCarrito(id)}>
                                Añadir al carrito
                            </button>
                            <div>
                                <a href='#' className='btn'>Ver más</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}