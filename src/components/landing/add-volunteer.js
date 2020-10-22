import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const AddVolunteer = (props) => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [redirect, setRedirect] = useState(false);
  const [categories, setCategories] = useState([]);
  

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const payload = { first_name, last_name, email };
      console.log(payload);
      const response = await fetch(
        `${process.env.REACT_APP_BACK_SERVER}${process.env.REACT_APP_VOLUNTEER_API}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const jsonResponse = await response.json();
      if (jsonResponse) {
        setMessage("Successfully Added Volunteer")
      }
      setRedirect(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  const volunteerCategory = async () => {
    try {
      const fetchedCategories = await fetch(
        `${process.env.REACT_APP_BACK_SERVER}${process.env.REACT_APP_VOLUNTEER_CATEGORY_API}`
      );
      const jsonCategories = await fetchedCategories.json();
      setCategories(jsonCategories);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    volunteerCategory();
  }, []);

  return (
    <div style={styleApp}>
      <form onSubmit={onSubmitForm}>
        <h6>Thanks for your valued voulentering</h6>
        <div></div>
        <div>
          <div style={styleInput}>
            <input
              type="text"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-control"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div style={styleInput}>
            <input
              type="text"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              className="form-control"
              id="lastName"
              placeholder="Last Name"
            />
          </div>
          <div style={styleInput}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
        </div>

        <div style={{ margin: "0px 0px 15px" }}>
          I can volunteer an areas of
        </div>
        <div className="form-check">
          {categories
            .sort(function (a, b) {
              // ignore upper and lowercase
              let titleA = a.title.toUpperCase(),
                titleB = b.title.toUpperCase();

              return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
            })
            .map((category) => {
              return (
                <div
                  key={category.volunteer_category_id}
                  className="form-check form-check-inline"
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    {category.title}
                  </label>
                </div>
              );
            })}
          <div className="form-group">
            <textarea
              className="col-12"
              style={{ margin: "20px 0px 0px" }}
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Other, tell us.."
            ></textarea>
            {message.length > 0 &&
              <div className="alert alert-success">{message}</div>
            }
            <div style={{ margin: "30px 0px 40px" }}>
              <button type="submit">Register Me</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
const styleInput = {
  margin: "40px 0px 40px",
};
const styleApp = {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default AddVolunteer;
