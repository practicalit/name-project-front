import React, { useState, useEffect } from "react";
function AddVolunteer() {
  const [categories, setCategories] = useState([]);

  const volunteerCategory = async () => {
    try {
        const fetchedCategories = await fetch(`${process.env.REACT_APP_BACK_SERVER}${process.env.REACT_APP_VOLUNTEER_CATEGORY_API}`);
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
      <form>
        <h6>Thanks for your valued voulentering</h6>
        <div></div>
        <div>
          <div style={styleInput}>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div style={styleInput}>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
            />
          </div>
          <div style={styleInput}>
            <input
              type="email"
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
            <div style={{ margin: "30px 0px 40px" }}>
              <button type="submit">Register Me</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
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
