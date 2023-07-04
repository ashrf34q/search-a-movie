import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating, { Test } from "./components/StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10} /> */}
    {/* <StarRating size={22} /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
