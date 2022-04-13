import React from "react";
import { Link } from "react-router-dom";
import { HashLink} from 'react-router-hash-link';

const Header = ({ configuration }) => {
  const followItems = [
    { id: "github", url: "https://github.com/rochar/" },
    { id: "linkedin", url: "https://www.linkedin.com/in/ricardorocha/" },
    { id: "twitter", url: "https://twitter.com/rochar77" },
  ];

  const followItemsComponents = followItems.map(({ id, url }) => (
    <a key={id} href={url} className={id} target="_blank">
      <i className={`bx bxl-${id}`}></i>
    </a>
  ));

  return (
    // <!-- ======= Header ======= -->
    <div className="d-flex flex-column">
      <div className="profile">
        <Link to="/">
          <img
            src={require("../assets/img/profile.jpg")}
            alt=""
            className="img-fluid rounded-circle"
          />
        </Link>
        <h1 className="text-light">
          <a href="index.html">{configuration.name}</a>
        </h1>
        <div className="social-links mt-3 text-center">
          {followItemsComponents}
        </div>
      </div>
      <nav id="navbar" className="nav-menu navbar">
        <ul>
          {/* Keep Portfolio Id to avoid change iportfolio css and javacript*/}
          <li>
            <HashLink to="/#portfolio" className="nav-link scrollto">
              <i className="bx bx-book-content"></i> <span>Articles</span>
            </HashLink>
          </li>
        </ul>
      </nav>
    </div>
    // <!-- End Header -->
  );
};

export default Header;
