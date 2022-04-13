import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home/home";
import LoadLazyScript from "./components/loadLazyScript";
import ArticleDetails from "./components/articles/articledetails";
import ArticlesList from "./components/articleslist";
import ArticleData from "./data/articles.json";

import Configuration from "./configuration.json";
import "./assets/overrideiportfolio.css";

/*https://reactjs.org/docs/strict-mode.html
Strict mode checks are run in development mode only; they do not impact the production build.
*/

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <Router>
        {/* <!-- ======= Header ======= --> */}
        <header id="header">
          <Header configuration={Configuration} />
        </header>
        {/* <!-- End Header --> */}
        <main id="main">
          <Routes>
            <Route path="/" element={<Home configuration={Configuration} />} />
            <Route path="article/:id" element={<ArticleDetails />} />
            <Route
              path="*"
              element={<div className="container"><p>NotFound  - There's nothing here!</p></div>}
            />
          </Routes>
          <ArticlesList items={ArticleData} />
        </main>
        {/* <!-- ======= Footer ======= --> */}
        <footer id="footer">
          <Footer />
        </footer>
        <LoadLazyScript path="/iportfolio/assets/js/main.js"></LoadLazyScript>
        {/* <!-- End  Footer --> */}
      </Router>
    </React.Fragment>
  </React.StrictMode>,
  document.querySelector("#root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
