import React from "react";
import RouteLink from "./routelink";

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
        <RouteLink href="/">
          <img
            src={require("../assets/img/profile.jpg")}
            alt=""
            className="img-fluid rounded-circle"
          />
          </RouteLink>
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
            <RouteLink href="/#portfolio"  className="nav-link scrollto">
              {/* <a href="#portfolio" className="nav-link scrollto"> */}
                <i className="bx bx-book-content"></i> <span>Articles</span>
                </RouteLink>
            </li>      
          </ul>
        </nav>
      </div>
    
    // <!-- End Header -->
  );
};

// const Header = ({ items }) => {
//   const itemsComponents = items.map((item) => (
//     <li className="nav-item">
//       <a
//         className={`nav-link ${
//           window.location.pathname === item.path ? " active" : ""
//         } `}
//         aria-current={`${window.location.pathname ? " active" : "page"} `}
//         href={item.path}
//       >
//         {item.title}
//       </a>
//     </li>
//   ));

export default Header;
