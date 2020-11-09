import React, { Fragment, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";


const CreateName = (props) => {
  const [name, setName] = useState(props.propName);
  const [gender_id, setGender] = useState("");
  const [allGenders, setGenders] = useState([]);
  const [allOrigins, setOrigins] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const [origin_language, setOriginLanguage] = useState("");

  const getLookups = async (url, setter) => {
    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      setter(jsonResponse);
      console.log(jsonResponse);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getLookups(
      `${process.env.REACT_APP_BACK_SERVER}${process.env.REACT_APP_ORIGIN_API}`,
      setOrigins
    );
    getLookups(
      `${process.env.REACT_APP_BACK_SERVER}${process.env.REACT_APP_GENDER_API}`,
      setGenders
    );

    return () => {
      //cleanup
    };
  }, []);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log("here");
    try {
      const payload = { name, gender_id, origin_language };
      const response = await fetch(
        `${process.env.REACT_APP_BACK_SERVER}${process.env.REACT_APP_NAME_API}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      console.log(response);
      setRedirect(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <div className="container">
        <h3 className="text-center mt-100">{props.title}</h3>
        <form onSubmit={onSubmitForm}>
          <div className="form-group">
            <label htmlFor="id">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="form-control"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="origin_language">Origin Language</label>
            <select
              value={origin_language}
              onChange={(e) => setOriginLanguage(e.target.value)}
              className="form-control"
              id="origin_language"
            >
              <option>Select Origin Language</option>
              {allOrigins.map((origin) => {
                return (
                  <option key={origin.origin_id} value={origin.origin_id}>
                    {origin.title}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <div
              onChange={(e) => setGender(e.target.value)}
            >
              <div className="row w-50">
              {allGenders.map((gender) => {
                return (
                  <div className="col" key={gender.gender_id} value={gender.gender_id}>
                    <input type="radio" name="gender" value={gender.gender_id} />
                    {gender.title}
                  </div>
                );
              })}
              </div>
            </div>
          </div>
          <button className="btn btn-primary">Create</button>
          {redirect ? (
            <Redirect
              to={{ pathname: "/more-detail", state: { name: name } }}
            />
          ) : null}

        </form>
      </div>
    </Fragment>
  );
};

export default CreateName;
