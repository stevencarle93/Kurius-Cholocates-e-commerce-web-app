import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";
import ScrollToTop from "./component/scrollToTop";
import { Layout } from "./layout";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Signup } from "./pages/signup";
import { Login } from "./pages/login";
import { RestorePassword } from "./pages/restorepassword";
import { DataProvider } from './store/Dataprovider'
import { Checkout } from './component/Checkout/Checkout'
import { ProductsDetails } from "./component/Products/ProductsDetails";
import { ProductosPrivados } from "./component/Products/ProductosPrivados";



const AppRoutes = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/

    const basename = process.env.BASENAME || "";

    return (
        <div>
            <DataProvider>
                <BrowserRouter basename={basename}>
                    <ScrollToTop>
                        <Routes>
                            <Route  element={<Layout />}>
                                <Route index element={<Home />} />
                                <Route path="/products" >
                                    <Route index element={<ProductosPrivados/>}/>
                                    <Route path=":productId" element={<ProductsDetails/>}/>
                                </Route>
                                <Route element={<Signup />} path="/signup" />
                                <Route element={<Login />} path="/login" />
                                <Route element={<RestorePassword />} path="/restorepassword" />
                                <Route element={<Demo />} path="/demo" />
                                <Route element={<Single />} path="/single/:theid" />
                                <Route element={<Checkout />} path="/checkout" />
                                <Route element={<h1>Not found!</h1>} />
                            </Route>
                        </Routes>
                    </ScrollToTop>
                </BrowserRouter>
            </DataProvider>
        </div>
    );
};

export default injectContext(AppRoutes);