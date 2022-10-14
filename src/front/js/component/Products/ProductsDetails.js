import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import { DataContext } from "../../store/Dataprovider";
import { Carrito } from "../Carrito/Carrito";


export const ProductsDetails = () => {

    const value = useContext(DataContext);
    const { store, actions } = useContext(Context)
    const params = useParams()
    const { product } = store;
    const [menu, setMenu] = value.menu;

    useEffect(() => {
        const loadData = async () => {
            console.log("Component did mount")
            await actions.loadProductsDetails(params.productId)
        }
        loadData()
    }, [])


    const show1 = menu ? "carrito-container show" : "carrito-container";
    const show2 = menu ? "carrito show" : "carrito";

    return (

        <div className="container-detalles">
            <div className={show1}>
                <div className={show2}>
                    <Carrito/>
                </div>
            </div>
            {product ? (
                <div className="container-details">
                    <div className="row ">
                        <div className="col-6 detailsimg">
                            <img src={product.picture} alt={product.name} />
                        </div>
                        <div className="col-6">
                            <div className="container-info">
                                <div className="title2">
                                    <h1 className="">{product.name}</h1>
                                </div>
                                <div className="my-5 informacion">
                                    <ul className="listadeinfo letradescription">
                                        <li className="d-flex m-5"><box-icon name='thermometer'  type='solid'/><p className="mx-1" />Presentación: {product.presentation}°</li>
                                        <li className="d-flex m-5"><box-icon name='package'  /><p className="mx-1" />Tipo de producto: {product.product_type}</li>
                                        <li className="d-flex m-5"><box-icon name='tachometer'  /><p className="mx-1" />Porcentaje: {product.percentage}%</li>
                                        <li className="d-flex m-5"><box-icon type='solid' name='chevrons-right'/><p className="mx-1"/>{product.description}</li>
                                    </ul>
                                </div>
                                <div className="button pricebutton">
                                    <button
                                        className="btn"
                                        onClick={() => actions.addCarrito(product)}
                                    >
                                        Añadir al carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
                : " "}
        </div>
    )
}




//   return (
//     <div className="card mb-3 d-flex justify-content-center">
//       <div className="row no-gutters">
//         <div className="col-md-4">
//           <img src={Cobertura_Blanco_35} className="card-img" alt="..."></img>
//         </div>
//         <div className="col">
//           <div className="card-body">
//             <h5 className="card-title col-md-12 text-center">Cobertura de Blanco 35%</h5> <br></br>
//             <div className="row">
//               <br></br>
//               <div className="col-md-4">
//                 <h6>Curva de Temperatura</h6> Fusión: 40° - 45° (max) <br></br>
//                 Descenso: 25° - 27° <br></br>Cristalización: 28° - 30°
//                 <p>
//                 <br></br> <h6>Usos</h6> tabletas, bombones, trufas, pasteleria, postres
//                 </p>
//               </div>
//               <div className="col-md-4 vl">
//                 <h6>Perfil organoléptico</h6> <br></br> buen brillo, buen nivel
//                 de snap, sabor a leche, cremoso, ingrediente principal manteca
//                 de cacao, dulzor equilibrado. <br></br> <br></br>{" "}
//                 <h6>Fluidez</h6> 5/5
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
