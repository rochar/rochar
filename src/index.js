import React, { useState } from "react";
import ReactDOM from "react-dom";
import Tools from "./components/tools";
import Route from "./components/route";
import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./components/mainpage";

import Configuration from "./configuration.json";

import "./assets/overrideiportfolio.css";

/*https://reactjs.org/docs/strict-mode.html
Strict mode checks are run in development mode only; they do not impact the production build.
*/

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <Route path="/">
        <MainPage configuration={Configuration} />
      </Route> 
      {/* <Route path="/tools">
        <Tools />
      </Route> */}
    </React.Fragment>
  </React.StrictMode>,
  document.querySelector("#root")
);
ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
    <Header configuration={Configuration} />  
    </React.Fragment>
  </React.StrictMode>,
  document.querySelector("#header")
);
ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <Footer />    
    </React.Fragment>
  </React.StrictMode>,
  document.querySelector("#footer")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
