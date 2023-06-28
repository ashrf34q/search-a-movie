import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import StarRating, { Test } from "./components/StarRating";
import Challenge from "./components/Challenge";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating maxRating={10} /> */}
    {/* <StarRating size={22} /> */}
    {/* <Test /> */}
    <Challenge />
  </React.StrictMode>
);
