import React from "react";

const Header = ({ items }) => {
  const itemsComponents = items.map((item) => (
    <li className="nav-item">
      <a
        className={`nav-link ${
          window.location.pathname === item.path ? " active" : ""
        } `}
        aria-current={`${window.location.pathname ? " active" : "page"} `}
        href={item.path}
      >
        {item.title}
      </a>
    </li>
  ));
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">{itemsComponents}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
