import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Tabs, TabsContent, TabContent } from "./components/tabs";
import Articles from "./components/articles";
import Tools from "./components/tools";

const App = () => {
  return (    
      <><Tabs
      items={[
        { id: "articles", title: "Articles", active: "True" },
        { id: "tools", title: "Tools" },
      ]} /><TabsContent>
        <TabContent id="articles" active="True">
          <Articles />
        </TabContent>
        <TabContent id="tools">
          <Tools></Tools>
        </TabContent>
      </TabsContent></>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
