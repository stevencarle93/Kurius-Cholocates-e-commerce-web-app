import React, { useContext } from 'react'

import '../../../styles/index.css'
import { DataContext } from '../../store/Dataprovider'
import { ProductoItem } from './productoItem'

export const ProductList = () => {

    const value = useContext(DataContext)
    const [productos] = value.productos
    return (
        <>
            <h2 className="border-bottom mx-5">Nuestros Productos</h2>
            <div className='productos'>
                {
                    productos.map(producto => (
                        <ProductoItem
                        key={producto.id} 
                        id={producto.id}
                        title={producto.title}
                        price={producto.price}
                        image={producto.image}
                        description={producto.description}
                        cantitad={producto.cantitad}
                        />
                    ))
                }
            </div>
        </>
    )
}