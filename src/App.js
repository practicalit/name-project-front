/**
 * App.js fro the main routing and basic layout
 *
 * @author Practical IT
 */
import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import volunteerList from "./components/landing/volunteer-List";


import "./App.css";

import AddMoreDetail from "./components/name/more-detail";
import LandingParent from "./components/landing/landing-parent";

function App() {
  const routes = [
    {
      path: "/",
      component: LandingParent,
    },
    {
      path: "/more-detail",
      component: AddMoreDetail,
    },
  ];

  return (
    <Router>
      <Fragment>   
        <nav className="navbar navbar-light bg-light static-top">
          <div className="container">
            <Link className="navbar-brand" to="/">
              The Name (Heritage) Project.
            </Link>
            <a className="btn btn-primary" href="#">
              Become Volunteer     
            </a>
            <Link to="/volunteer-List">
            <a className="btn btn-primary" href="#">
              See Volunteers     
            </a>
            </Link>
          </div>
        </nav>
        <Route path="/volunteer-List" component={volunteerList} />
        {routes.map(({ path, component }) => {
          return <Route path={path} exact component={component} />;
        })}
        <footer className="footer bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                <ul className="list-inline mb-2">
                  <li className="list-inline-item">
                    <a href="#">About</a>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <a href="#">Contact</a>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <a href="#">Terms of Use</a>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
                <p className="text-muted small mb-4 mb-lg-0">
                  &copy; ThePracticalIT. All Rights Reserved. © 2020.
                </p>
              </div>
              <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mr-3">
                    <a href="#">
                      <i className="fab fa-facebook fa-2x fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mr-3">
                    <a href="#">
                      <i className="fab fa-twitter-square fa-2x fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-instagram fa-2x fa-fw"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </Fragment>
    </Router>
  );
}

export default App;

