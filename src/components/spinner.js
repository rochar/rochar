import React from "react";

const Spinner = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">{props.message}</span>
      </div>
    </div>
  );
};

/*Default message*/
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
