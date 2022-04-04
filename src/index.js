import React, { useState } from "react";
import ReactDOM from "react-dom";
import Tools from "./components/tools";
import Route from "./components/route";
import Header from "./components/header";
import Footer from "./components/footer";
import Articles from "./components/articles";
import "./assets/overrideiportfolio.css";
import ArticleData from "./data/articles.json";


ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.querySelector("#header")
);


ReactDOM.render(
  <React.StrictMode>
    <Articles items={ArticleData}/>
  </React.StrictMode>,
  document.querySelector("#main")
);

ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.querySelector("#footer")
);




// const App = () => {
//   const headerItems = [
//     { id: "articles", title: "Articles", path: "/" },
//     { id: "tools", title: "Tools", path: "/tools" },
//   ];

//   return (
//     <React.Fragment>
//       <Header items={headerItems}></Header>
//       <Route route="/">
//         <Articles />
//       </Route>
//       <Route route="/tools">
//         <Tools />
//       </Route>
//     </React.Fragment>
//   );
// };

/*https://reactjs.org/docs/strict-mode.html
Strict mode checks are run in development mode only; they do not impact the production build.
*/
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.querySelector("#root")
// );

const MyName = () => {
  return "Ricardo Rocha";
};
document.querySelectorAll('[id^="myname"]').forEach((element) => {
  ReactDOM.render(
    <React.StrictMode>
      <MyName />
    </React.StrictMode>,
    element
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
