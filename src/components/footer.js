import React from "react";

const Footer = ({lastupdate}) => {
  return (
    <React.Fragment>
       {/* <footer id="footer"> */}
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
      {/* </footer>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>  */}

    </React.Fragment>
  );
};
export default Footer;
