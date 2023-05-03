import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Home from "./pages/Home"
// import HomeNavbar from "./components/HomeNavbar"
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
    {/* <App /> */}
  </React.StrictMode>
);

reportWebVitals();
