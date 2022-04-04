import React, { useState } from "react";
import ReactDOM from "react-dom";
import Tools from "./components/tools";
import Route from "./components/route";
import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./components/mainpage";

import Configuration from "./data/configuration.json";

import "./assets/overrideiportfolio.css";

/*https://reactjs.org/docs/strict-mode.html
Strict mode checks are run in development mode only; they do not impact the production build.
*/

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
    <Header configuration={Configuration} />
      {/* <Route route="/"> */}
        <MainPage configuration={Configuration} />
      {/* </Route> */}
      {/* <Route route="/tools">
        <Tools />
      </Route> */}
      {/* <!-- ======= Footer ======= --> */}
      <Footer />
      {/* <!-- End  Footer --> */}
    </React.Fragment>
  </React.StrictMode>,
  document.querySelector("#root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
