import React from "react";


const Header = () => {

  const followItems = [
    { id: "github", url: "https://github.com/rochar/"},
    { id: "linkedin", url: "https://www.linkedin.com/in/ricardorocha/"},
    { id: "twitter", url: "https://twitter.com/rochar77"}];

  const followItemsComponents = followItems.map(({id,url}) => (
    <a key={id} href={url} className={id}><i className={`bx bxl-${id}`}></i></a>
  ));

  return (
    <div className="d-flex flex-column">
      <div className="profile">
        <img src="../assets/profile.jpg" alt="" className="img-fluid rounded-circle"/>
        <h1 className="text-light"><a href="index.html" id="myname1"></a></h1>
        <div className="social-links mt-3 text-center">                    
          {followItemsComponents}
        </div>
      </div>

      {/* <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
          <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a></li>
          <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav> */}
      {/* <!-- .nav-menu --> */}
    </div>    
    );
}

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
//   return (
//     <nav className="navbar navbar-expand-sm navbar-light bg-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#"></a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">{itemsComponents}</ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

export default Header;
