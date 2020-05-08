import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Fragment>
      <nav>
        <div className="nav-wrapper indigo lighten-5">
          <a href="#!" className="brand-logo center deep-purple-text">
            All Tasks
          </a>
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons deep-purple-text">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/" className="deep-purple-text">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="deep-purple-text">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/" className="deep-purple-text">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="deep-purple-text">
            About
          </Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default Navbar;
