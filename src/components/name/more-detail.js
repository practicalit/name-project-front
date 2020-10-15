/**
 * Component fro more information of the name
 *
 * @param Practical IT
 */
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

const AddMoreDetail = (props) => {
  const [detail, setDetail] = useState("");
  const [ageRange, setAgeRange] = useState([]);
  const [selectedRange, setSelectedRange] = useState();
  const [name, setName] = useState("");
  const [alias, setAlias] = useState("");
  const [aliasInput, setAliasInput] = useState([{}]);

  const updateName = () => {
    console.log(props);
    if (props.location != null && props.location.state != null) {
      setName(props.location.state.name);
    }
  };

  const getLookups = () => {
    /*const response = await fetch('http://localhost:8080/age-range');
        const jsonResponse = await response.json();*/
    //setAgeRange(jsonResponse);
    // fetch('http://localhost:8080/age-range').then(response => {
    //     response.json();
    // }).then(result => console.log(result))
    axios
      .get(
        `${process.env.REACT_APP_BACK_SERVER}${process.env.REACT_APP_AGE_RANGE_API}`
      )
      .then((response) => {
        setAgeRange(response.data);
      })
      .catch((error) => console.error(error.message));
  };

  useEffect(() => {
    getLookups();
    updateName();
    setAlias()
    return () => {
      //call on unmount
    };
  }, []);



  const updateAlias = (e, index) => {
    const { name, value } = e.target;
    const list = [...aliasInput];
    list[index][name] = value;
    setAliasInput(list);
    try {
      axios
        .post(
          `${process.env.REACT_APP_BACK_SERVER}${process.env.REACT_APP_ALIAS_API}`,
          {
            name,
            alias,
          }
        )
        .then((result) => console.log(result));
    } catch (error) {
      console.error(error.message);
    }
  };

  const updateAgeRange = () => {
    try {
      axios
        .put(
          `${process.env.REACT_APP_BACK_SERVER}${process.env.REACT_APP_AGE_RANGE_API}`,
          {
            range_id: selectedRange,
            name: name,
          }
        )
        .then((response) => console.log(response));
    } catch (error) {
      console.error(error.message);
    }
  };
  const addAliasInput = () => {
    setAliasInput([...aliasInput, { aliasName: "" }])
  }
  const updateMeaning = () => {
    try {
      const payload = { meaning: detail, name: name };
      console.log("before we send the data");
      console.log(payload);
      fetch(
        `${process.env.REACT_APP_BACK_SERVER}${process.env.REACT_APP_MEANING_API}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      )
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSubmit = () => {
    console.log(name, aliasInput)
    setAliasInput(([{ name: "" }]), [{ aliasName: "" }]);
  }
  return (
    <Fragment>
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-speech m-auto text-primary"></i>
                </div>
                <h3>Great name: {name}, What does it mean?</h3>
                <textarea
                  onChange={(e) => setDetail(e.target.value)}
                  className="form-control"
                  rows="6"
                ></textarea>
                <button
                  onClick={updateMeaning}
                  className="btn btn-sm btn-primary m-2"
                >
                  Update Meaning
                </button>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-tag m-auto text-primary"></i>
                </div>
                <h3>Alias for this Name</h3>
                {aliasInput.map((item, i) => {
                  return (
                    <div key={i} className="p-1">
                      <input type="text"
                        value={item.aliasName}
                        name="aliasName" className="form-control"
                        onChange={(name) => updateAlias(name, i)} />

                      {aliasInput.length - 1 === i && <button type="button"
                        className="btn btn-sm btn-primary mt-2"
                        value="+Add"
                        onClick={addAliasInput} >+Add</button>}
                    </div>
                  )
                })}
                <button type="button"
                  className="btn btn-sm btn-primary mt-2"
                  onClick={handleSubmit}>Update alias</button>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-graph m-auto text-primary"></i>
                </div>
                <h3>What age range describes you most?</h3>
                <select
                  className="form-control"
                  onChange={(e) => setSelectedRange(e.target.value)}
                >
                  <option>Select Age Range.</option>
                  {ageRange.map((range, index) => {
                    return (
                      <option key={index}
                        value={range.range_id}
                      >{`${range.lower_range} - ${range.higher_range}`}</option>
                    );
                  })}
                </select>
                <div>
                  <button
                    onClick={updateAgeRange}
                    className="btn btn-sm btn-primary mt-2"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-list m-auto text-primary"></i>
                </div>
                <h3>What similar names do you know like yours?</h3>
                <input
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
                <div>
                  <button
                    onClick={updateName}
                    className="btn btn-sm btn-primary mt-2"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AddMoreDetail;


