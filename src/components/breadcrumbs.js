import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ title }) => {
  {
    /* <!-- ======= Breadcrumbs ======= --> */
  }
  return (
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>{title}</h2>
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>{title}</li> */}
          </ol>
        </div>
      </div>
    </section>
  );
  {
    /* <!-- End Breadcrumbs --> */
  }
};

export default Breadcrumbs;
