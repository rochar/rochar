import React, { useState } from "react";
import ReactDOM from "react-dom";
import Route from "./components/route";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home/home";
import LoadLazyScript from "./components/loadLazyScript";
import ArticleDetails from "./components/articles/articledetails";

import Configuration from "./configuration.json";
import "./assets/overrideiportfolio.css";

/*https://reactjs.org/docs/strict-mode.html
Strict mode checks are run in development mode only; they do not impact the production build.
*/

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <Route path="/">
        <Home configuration={Configuration} />
      </Route>
      <Route path="/article">
        <ArticleDetails/>
      </Route>
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
      <LoadLazyScript path='/iportfolio/assets/js/main.js'></LoadLazyScript>
    </React.Fragment>
  </React.StrictMode>,
  document.querySelector("#footer")
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
