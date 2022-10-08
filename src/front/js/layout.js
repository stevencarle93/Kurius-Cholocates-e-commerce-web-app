import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import 'boxicons';
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { ProductsDetails1 } from "./component/ProductsDetails1";
import { ProductsDetails2 } from "./component/ProductsDetails2";
import { ProductsDetails3 } from "./component/ProductsDetails3";
import { ProductsDetails4 } from "./component/ProductsDetails4";
import { ProductsDetails5 } from "./component/ProductsDetails5";
import { ProductsDetails6 } from "./component/ProductsDetails6";
import { ProductsDetails7 } from "./component/ProductsDetails7";
import { ProductsDetails8 } from "./component/ProductsDetails8";
import { ProductsDetails9 } from "./component/ProductsDetails9";
import injectContext from "./store/appContext";
import { Signup } from "./pages/signup";
import { Login } from "./pages/login";
import { RestorePassword } from "./pages/restorepassword";
import { DataProvider } from './store/Dataprovider'
import { Checkout } from './component/Checkout/Checkout'
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PayPalScriptProvider } from "@paypal/react-paypal-js"

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <DataProvider>
      <PayPalScriptProvider
        options={{
          "client-id": "sb",
          currency: "USD",
        }}
      >
      <div className="App">
        <BrowserRouter basename={basename}>
          <ScrollToTop>
            <Navbar />
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Signup />} path="/signup" />
              <Route element={<Login />} path="/login" />
              <Route element={<RestorePassword />} path="/restorepassword" />
              <Route element={<Demo />} path="/demo" />
              <Route element={<Single />} path="/single/:theid" />
              <Route element={<Checkout/>} path="/checkout"/>
              <Route element={<h1>Not found!</h1>} />
              <Route element={<ProductsDetails1 />} path="/Details/1" />
              <Route element={<ProductsDetails2 />} path="/Details/2" />
              <Route element={<ProductsDetails3 />} path="/Details/3" />
              <Route element={<ProductsDetails4 />} path="/Details/4" />
              <Route element={<ProductsDetails5 />} path="/Details/5" />
              <Route element={<ProductsDetails6 />} path="/Details/6" />
              <Route element={<ProductsDetails7 />} path="/Details/7" />
              <Route element={<ProductsDetails8 />} path="/Details/8" />
              <Route element={<ProductsDetails9 />} path="/Details/9" />
            </Routes>
            <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </div>
    </PayPalScriptProvider>
    </DataProvider>
  );
};

export default injectContext(Layout);
