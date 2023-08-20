import React, { Component } from "react";
import { Link } from "react-router-dom";
  export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar fixed-top navbar-expand-lg bg-body-tertiary bg-dark"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <img
              className="mx-3"
              src="android-chrome.png"
              style={{ width: "40px" }}
              alt=""
            />
            <Link className="navbar-brand" to="/">
              NewsPanda
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
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
            </div>
        </nav>
      </div>
    )
  }

}
