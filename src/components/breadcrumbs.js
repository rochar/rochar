import React from "react";
import RouteLink from "./routelink";

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
              <RouteLink href="/">Home</RouteLink>
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
