import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top w-100">
        <div className="container-fluid justify-content-center">
          <Link className="navbar-brand mx-3 fw-bold fs-4" to="/">
            News Compass
          </Link>
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
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav text-center">
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
