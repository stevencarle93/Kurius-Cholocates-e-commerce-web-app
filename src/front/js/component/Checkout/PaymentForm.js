import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../store/Dataprovider";

export const Payment = () => {
  const value = useContext(DataContext);
  const [total] = value.total;

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-6">Agrega tu método de pago</h1>
        </div>
      </div>
      <div className="col-lg-7 mx-auto">
        <div className="card ">
          <div className="card-header">
            <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
              <ul
                role="tablist"
                className="nav bg-light nav-pills rounded nav-fill mb-3"
              >
                <li className="nav-item">
                  {" "}
                  <a
                    data-toggle="pill"
                    href="#credit-card"
                    className="nav-link active "
                  >
                    {" "}
                    <i className="fas fa-credit-card mr-2"></i> Credit Card{" "}
                  </a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a data-toggle="pill" href="#paypal" className="nav-link ">
                    {" "}
                    <i className="fab fa-paypal mr-2"></i> Paypal{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <div id="credit-card" className="tab-pane fade show active pt-3">
                <form role="form">
                  <div className="form-group">
                    {" "}
                    <label>
                      <h6>Nombre en la tarjeta</h6>
                    </label>{" "}
                    <input
                      type="text"
                      name="username"
                      placeholder="Card Owner Name"
                      required
                      className="form-control "
                    />{" "}
                  </div>
                  <div className="form-group">
                    {" "}
                    <label>
                      <h6>Número de tarjeta</h6>
                    </label>
                    <div className="input-group">
                      {" "}
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="Valid card number"
                        className="form-control "
                        required
                      />
                      <div className="input-group-append">
                        {" "}
                        <span className="input-group-text text-muted">
                          {" "}
                          <i className="fab fa-cc-visa mx-1"></i>{" "}
                          <i className="fab fa-cc-mastercard mx-1"></i>{" "}
                          <i className="fab fa-cc-amex mx-1"></i>{" "}
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-8">
                      <div className="form-group">
                        {" "}
                        <label>
                          <span className="hidden-xs">
                            <h6>Fecha de expiración</h6>
                          </span>
                        </label>
                        <div className="input-group">
                          {" "}
                          <input
                            type="number"
                            placeholder="MM"
                            name=""
                            className="form-control"
                            required
                          />{" "}
                          <input
                            type="number"
                            placeholder="YY"
                            name=""
                            className="form-control"
                            required
                          />{" "}
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group mb-4">
                        {" "}
                        <label
                          data-toggle="tooltip"
                          title="Three digit CV code on the back of your card"
                        >
                          <h6>
                            CVV{" "}
                            <i className="fa fa-question-circle d-inline"></i>
                          </h6>
                        </label>{" "}
                        <input type="text" required className="form-control" />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-center">
                    <h3>Total: ${total}</h3>
                    <Link to="/checkout">
                      <button className="btn">Comprar</button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <div id="paypal" className="tab-pane fade pt-3">
              <h6 className="pb-2">Select your paypal account type</h6>
              <div className="form-group ">
                {" "}
                <label className="radio-inline">
                  {" "}
                  <input type="radio" name="optradio" /> Domestic{" "}
                </label>{" "}
                <label className="radio-inline">
                  {" "}
                  <input type="radio" name="optradio" className="ml-5" />
                  International{" "}
                </label>
              </div>
              <p>
                {" "}
                <button type="button" className="btn btn-primary ">
                  <i className="fab fa-paypal mr-2"></i> Log into my Paypal
                </button>{" "}
              </p>
              <p className="text-muted">
                {" "}
                Note: After clicking on the button, you will be directed to a
                secure gateway for payment. After completing the payment
                process, you will be redirected back to the website to view
                details of your order.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
