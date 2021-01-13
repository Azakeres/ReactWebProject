import React from "react";
// import Logo from "../logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink class="navbar-brand mb-0 h1 nav-link" to="/">
        {/* <img src= {Logo}
                      className="card-img rounded-circle mx-auto pt-1" 
                      alt="Arash Zakeresfahani"
                      style={{ width: "50px", height:"50px"}}/> */}
        Arash Zakeresfahani
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar7"
        aria-controls="navbar7"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-stretch pr-3"
        id="navbar7"
      >
        <ul class="navbar-nav ml-auto">
          {/* <li className="nav-item active">
            <NavLink exact={true} className="nav-link" to="/">
              About
            </NavLink>
          </li> */}
          <li className="nav-item active">
            {/* <NavLink className="nav-link" to="/resume">
              Resume
            </NavLink> */}
            <a
              className="nav-link"
              href="https://drive.google.com/file/d/1KXqddLqcESDqidx3sQ5nUaTIAC-LcACm/view?usp=sharing"
            >
              Resume
            </a>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/projects">
              Projects
            </NavLink>
          </li>
          {/*<li className="nav-item active">
            <NavLink className="nav-link" to="/notes">
              Notes
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
