import React from "react";

const Footer = () => {
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
          <div>
            TiTi{" "}
            <span className="badge bg-secondary">
              Just you to know I LOVE YOU! :)
            </span>
          </div>
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
