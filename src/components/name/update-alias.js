import axios from "axios";
import React, { useState } from "react";

const UpdateAlias = (props) => {
    const [name, setName] = useState(props.propName);
    const [aliasInput, setAliasInput] = useState([
        {
          aliasName: '', id: 0
        }
      ]);

    const updateAlias = () => {
        const list = [...aliasInput];
        try {
          axios
            .post(
              `${process.env.REACT_APP_BACK_SERVER}${process.env.REACT_APP_ALIAS_API}`,
              {
                name: name,
                alias: list.map( alias => alias.aliasName)
              }
            )
            .then((result) => console.log(result));
        } catch (error) {
          console.error(error.message);
        }
      };

    return (
       <div className="col-lg-3">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-tag m-auto text-primary"></i>
                </div>
                <h3>Alias for this Name</h3>
                <input
                  onChange={(e) => setAliasInput(e.target.value)}
                  className="form-control"
                />
                <button type="button"
                  className="btn btn-sm btn-primary mt-2"
                  onClick={updateAlias}
                >
                  Update Alias
                </button>
              </div>
            </div>
    );   
}
export default UpdateAlias;