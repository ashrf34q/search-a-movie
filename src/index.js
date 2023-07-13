import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import GeolocationService from "./challenges/GeolocationService";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CurrencyConverter /> */}
    {/* <StarRating maxRating={10} /> */}
    {/* <StarRating size={22} /> */}
    {/* <Test /> */}
    <GeolocationService />
  </React.StrictMode>
);
