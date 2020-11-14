import React, { Fragment, useState } from "react";
import ListAlias from "./list-Alias";
import axios from "axios";

const UpdateAlias = (props) => {
  /**
   * This is used to accumulate the additional aliases the user will be adding
   * by clicking more input boxes.
   */
  const [aliasInput, setAliasInput] = useState([
    {
      aliasName: "",
      id: 0,
    },
  ]);

  const [message, setMessage] = useState("");

  /**
   * Handle sending the collected aliases to the server.
   */
  const saveAlias = () => {
    const list = [...aliasInput];
    try {
      axios
        .post(
          `${process.env.REACT_APP_BACK_SERVER}${process.env.REACT_APP_ALIAS_API}`,
          {
            name: props.name,
            alias: list.map((alias) => alias.aliasName),
          }
        )
        .then((response) => {
          //make sure it is successfully added
          let message = "Let's try again.";
          if (response && response.data && response.data.length > 0) {
            message = "Alias Updated";
          }
          setMessage(message);
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  /**
   * To be called when new alias input box is added
   */
  const addInput = () => {
    let list = [...aliasInput];
    list.push({ aliasName: "", id: list.length });
    setAliasInput(list);
  };

  const updateAliasName = (event, index) => {
    let names = [...aliasInput];
    names.find((alias) => alias.id === index).aliasName = event.target.value;
    setAliasInput(names);
  };

  return (
    <Fragment>
      <div className="col-lg-3">
        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <div className="features-icons-icon d-flex">
            <i className="icon-tag m-auto text-primary"></i>
          </div>
          <h3>Alias for this Name</h3>
          {aliasInput.map((item, index) => {
            return (
              <div key={index} className="p-1">
                <input
                  type="text"
                  value={item.aliasName}
                  name="aliasName"
                  className="form-control"
                  onChange={(event) => updateAliasName(event, index)}
                />

                {aliasInput.length - 1 === index && (
                  <button
                    type="button"
                    className="btn btn-sm btn-primary mt-2"
                    value="+Add"
                    onClick={addInput}
                  >
                    +Add
                  </button>
                )}
              </div>
            );
          })}
          <button
            type="button"
            className="btn btn-sm btn-primary mt-2"
            onClick={saveAlias}
          >
            Update Alias
          </button>
          {/* <ListAlias/> */}
          <div className="form-group">
            {message.length > 0 && (
              <div className="alert alert-success">{message}</div>
            )}
          </div>
          <ListAlias name={props.name} />
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateAlias;