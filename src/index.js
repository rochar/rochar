import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

const App = () => {
  return (
    <div className="container-fluid p-5 border bg-dark text-white">
      <h1>Comming Soon  - Lots of Stuff</h1>
      <p>This page is under construction. Please come back soon!</p>
    </div>
 );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
