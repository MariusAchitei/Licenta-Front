import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// if(window.location.pathname.includes("medics")){
//   require("./client/assets/icons/fontawesome/css/fontawesome.min.css");
//   require("./client/assets/icons/fontawesome/css/all.min.css");
//   require("./client/assets/icons/feather/css/iconfont.css");
//   require("./client/assets/scss/main.scss");
//   require("../src/client/components/customstyleclient.css");
// }

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
