/**
 * Landing page search for name component
 *
 * @author Practical IT
 */
import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";

const Search = (props) => {
  const [search, setSearch] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const searchResult = await fetch(
        `${process.env.REACT_APP_BACK_SERVER}${process.env.REACT_APP_NAME_API}/?name=${search}`
      );
      const result = await searchResult.json();
      props.callBackMe(result);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
      <Fragment>
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <h1 className="mb-5">Search Your Name</h1>
          </div>
          <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <form onSubmit={(e) => handleSearch(e)}>
              <div className="form-row">
                <div className="col-12 col-md-9 mb-2 mb-md-0">
                  <input
                    type="text"
                    value={search}
                    className="form-control form-control-lg"
                    placeholder="Find about your name..."
                    onChange={(e) => {
                      setSearch(e.target.value);
                      console.log(props);
                      props.callNameBack(e.target.value);
                    }}
                  />
                </div>
                <div className="col-12 col-md-3">
                  <button
                    type="submit"
                    className="btn btn-block btn-lg btn-primary"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
            <div className="my-4">
            <div className="text-left">
                <Link to="/most-searched-names" className="text-white" href="#">
                  Most Searched Names
                </Link>
            </div>
            </div>
          </div>
        </div>   
      </Fragment>
  );
};

export default Search;
