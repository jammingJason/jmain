import React from 'react';
import logo from './images/jMainLogoUpscale.jpg';
import facebook from './images/facebookLogo.png';
import './NavBar.css';
const NavBar = () => {
  return (
    <>
      <div className="row">
        <div className="col col-12">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img src={logo} alt="logo" id="imgLogo" />
              </a>
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
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/location">
                      <h2>
                        <b>Find Us</b>
                      </h2>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/menu">
                      <h2>
                        <b>Menu</b>
                      </h2>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="/pictures"
                    >
                      <h2>
                        <b>Pictures</b>
                      </h2>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="https://tables.toasttab.com/restaurants/b74048cd-90a9-498a-8c00-ce569fb952be/findTime?fbclid=IwAR3vQjIPqQDJpK6KTLG9LI7BoqVfU1XkE3_wpcAEY38rdSz8esPDoz8uJzg"
                    >
                      <h2>
                        <b>Reservations</b>
                      </h2>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="https://www.facebook.com/profile.php?id=100091594741886"
                    >
                      <img
                        src={facebook}
                        alt="Facebook Logo"
                        id="facebookLogo"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default NavBar;

// <a classNameName="navbar-brand" href="/">
//               &nbsp;
//               <img
//                 src={logo}
//                 width="50"
//                 height="50"
//                 classNameName="d-inline-block align-top"
//                 alt="logo"
//                 loading="lazy"
//               />
//             </a>
