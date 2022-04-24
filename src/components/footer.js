import React from "react";
import ReactDOM from "react-dom";

const Footer = ({lastupdate}) => {
  return ReactDOM.createPortal(
    <React.Fragment>
        <div className="container">
          <div className="copyright">
            &copy; Copyright 2022{" "}
            <strong>
              <span>Ricardo Rocha</span>
            </strong>
          </div>
          <div className="text-center"><small>Last update: {lastupdate}</small></div>
          <small>
            <div className="text-end">
            TiTi{" "}
            <span className="badge bg-secondary">
              Just you to know I LOVE YOU! :)
            </span>
            </div>
          </small>
        </div>      
    </React.Fragment>, document.querySelector('#footer')
  );
};
export default Footer;
