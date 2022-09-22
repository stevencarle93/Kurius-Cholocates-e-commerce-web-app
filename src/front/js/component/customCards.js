import React from "react";
import '../../styles/index.css';
import rigoImageUrl from "../../img/rigo-baby.jpg";
import Barra_Blanco_35 from "../../img/Barras/blanco-35.png";
import { Link } from "react-router-dom";


export const CustomCard = () => {
    
    const divStyle = {
        backgroundColor: 'red',
    };

    return (
        <div className="mt-5">
            <h2 className="border-bottom mx-5">Custom cards</h2>

            <div className="container px-4 py-5" id="custom-cards">

                <div className="row row-cols-1  row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div className="col">
                        <Link to="#">

                            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={divStyle}>
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-black noa">Prueba de imagen</h2>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <img src={Barra_Blanco_35} alt="Bootstrap" width="200" height="200" className="rounded-circle border border-white" />
                                        </li>
                                        <li className="d-flex align-items-center me-3">
                                            <small>Prueba</small>
                                        </li>
                                        <li className="d-flex align-items-center">

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col">
                        <Link to="#">
                            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg " style={divStyle} >
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-black noa">Prueba de imagen dos</h2>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <img src={rigoImageUrl} alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                                        </li>
                                        <li className="d-flex align-items-center me-3">
                                            <small>Prueba</small>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <small>4d</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Link>

                    </div>

                    <div className="col">
                        <Link to="#">
                            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={divStyle} >
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-black noa">Prueba de imagen uno</h2>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <img src={rigoImageUrl} alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                                        </li>
                                        <li className="d-flex align-items-center me-3">
                                            <small>Prueba</small>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <small>5d</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};