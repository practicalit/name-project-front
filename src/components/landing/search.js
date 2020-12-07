/**
 * Landing page search for name component
 *
 * @author Practical IT
 */
import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";
import { connect } from 'react-redux';

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
            <div className="text-white" href="#">
              {/* 
                props.name is the name read from redux store.
                it was updated in the onChange event through props.updateName()
              */}
              {props.name}
            </div>
            <form onSubmit={(e) => handleSearch(e)}>
              <div className="form-row">
                <div className="col-12 col-md-9 mb-2 mb-md-0">
                  <input
                    type="text"
                    value={search}
                    className="form-control form-control-lg"
                    placeholder="Find about your name..."
                    onChange={(e) => {
                      //setSearch is for managing the state using useState hook
                      setSearch(e.target.value);
                      //props.updateName is for managing the state using redux
                      //see the updateName function in mapDispatchToProps at the end of page.
                      props.updateName(e.target.value);
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

/*
  Reduct related functions. mapStateToProps provided the updated state
  mapDispatchProps updates the changes happening on the state.

  The state will be passed down and up from / to the components and reducers
  through props.

  The state managed by the redux are, mostly, globablly accessible. The idea is
  once you manage the state in the global manner, you can access those states from 
  any component and you don't need to pass those from paret/child through props.
  For the global setup, see the src/index.js
*/
const mapStateToProps = (state) => {
  return {
    name: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateName: (name) => dispatch({type: 'UPDATE_NAME', name: name})
  }
} 

//this how both methods are passed using connect. 
//see more on the HOC at https://reactjs.org/docs/higher-order-components.html
export default connect(mapStateToProps, mapDispatchToProps)(Search);
