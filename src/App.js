/**
 * App.js fro the main routing and basic layout
 *
 * @author Practical IT
 */
import React, { Fragment, useState } from "react";

import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";
import SeeMoreDetail from "./components/landing/see-more-detail";
import VolunteerList from "./components/landing/volunteer-list";
import AddVolunteer from "./components/landing/add-volunteer";

import "./App.css";

import AddMoreDetail from "./components/name/more-detail";
import LandingParent from "./components/landing/landing-parent";
import MostSearchedNames from "./components/landing/most-searched-names";

function App() {
  const routes = [
    {
      path: "/more-detail",
      component: AddMoreDetail,
    },
    {
      path: "/add-volunteer",
      component: AddVolunteer
    },
    {
      path: "/most-searched-names",
      component: MostSearchedNames
    },
    {
      path: "/volunteer-List",
      component: VolunteerList
    },
    {
      path: "/",
      component: LandingParent,
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
            <Link to="/volunteer-List" className="btn btn-primary" href="#">
              See Volunteers  
            </Link>   
            <Link to="/add-volunteer" className="btn btn-primary" href="#">
                Become Volunteer
            </Link>
          </div>
        </nav>
        {routes.map(({ path, component }, index) => {
          return <Route key={index} path={path} exact component={component} />;
        })
        }
        <div className="App">
          <Switch>
            <Route path="/SeeMoreDetail" component={SeeMoreDetail} />
          </Switch>
        </div>
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

