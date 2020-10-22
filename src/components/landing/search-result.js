/**
 * @author Practical IT
 */
import React, { Fragment } from "react";
import SeeMoreDetail from "./see-more-detail"
import { Link, NavLink, Switch, BrowserRouter as Route } from "react-router-dom";

const SearchResult = ({ searchResult }) => {
  searchResult =
    searchResult != null && Array.isArray(searchResult)
      ? searchResult[0]
      : null;
  console.log(searchResult);
  return (
    <Fragment>
      <div className="App">
        <NavLink exact activeClassName="active" to="/SeeMoreDetail"><h2>See More Detail</h2></NavLink>
      </div>
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-book-open m-auto text-primary"></i>
                </div>
                <h3>Meaning</h3>

                <p className="lead mb-0">
                  {searchResult.definition != null &&
                    searchResult.definition != "" ? (
                      searchResult.definition
                    ) : (
                      <Link
                        to={{
                          pathname: "/more-detail",
                          state: { name: searchResult.name },
                        }}
                      >
                        I know the meaning..
                      </Link>
                    )}
                </p>

                <Link
                  className="float-center submit-button"
                  to={{
                    pathname: "/more-detail",
                    state: { name: searchResult.name },
                  }}
                >
                  Add more meaning
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i
                    className={`${searchResult.gender == "Female" ||
                      searchResult.gender == "Both"
                      ? "icon-user-female m-auto text-primary"
                      : ""
                      }`}
                  ></i>
                  <i
                    className={`${searchResult.gender == "Male" ||
                      searchResult.gender == "Both"
                      ? "icon-user m-auto text-primary"
                      : ""
                      }`}
                  ></i>
                </div>
                <h3>Applicable for Gender</h3>
                <p className="lead mb-0">
                  This name is applicable for {searchResult.gender}
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-check m-auto text-primary"></i>
                </div>
                <h3>The Origin Of The Name Is</h3>
                <p className="lead mb-0">
                  The origin of your name is {searchResult.origin}
                </p>
                <div>
                <Link
                      to={{
                        pathname: "/more-detail",
                        state: { name: searchResult.name },
                      }}
                    >
                      <button className="btn btn-link">Add More Origin</button>
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default SearchResult;
