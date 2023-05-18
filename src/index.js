import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Advertisement from "./pages/advertisement/advertisement"
import MyAccount from "./pages/myAccount"
import Proposal from "./pages/proposal/proposal"
import CreateBillboard from "./pages/advertisement/createBillboard"
import CreateMagazineAd from "./pages/advertisement/createMagazineAd"
import CreateTvAd from "./pages/advertisement/createTvAd"
import CreateRadioAd from "./pages/advertisement/createRadioAd"
import ProfilePage from "./pages/profile/profilepage"
import Dashboard from "./pages/dashboard"

// import HomeNavbar from "./components/HomeNavbar"
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CreateTvAd />
    {/* <App /> */}
  </React.StrictMode>
);

reportWebVitals();
