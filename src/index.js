import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Tabs, TabsContent,TabContent} from "./tabs";

const App = () => {
  return (
    <div className="container-fluid p-5 border bg-dark text-white">
      <h1>Comming Soon - Lots of Stuff</h1>
         
      <Tabs items={[{id:"articles", title:"Articles", active:"True"},{id:"tools",title:"Tools"}]}/>
      <TabsContent>
        <TabContent id="articles" active="True"/>
        <TabContent id="tools"/>
      </TabsContent>
    </div>
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
