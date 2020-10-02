import React from "react";

function App() {
  return (
    <div style={styleApp}>
      <form>
        <h6>Thanks for your valued voulentering</h6>
        <div></div>
        <div>
          <div style={styleInput}>
            <input
              type="text"
              class="form-control"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div style={styleInput}>
            <input
              type="text"
              class="form-control"
              id="lastName"
              placeholder="Last Name"
            />
          </div>
          <div style={styleInput}>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
        </div>

        <div style={{ margin: "0px 0px 15px" }}>
          I can volunteer an areas of
        </div>
        <div class="form-check">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label class="form-check-label" for="inlineCheckbox1">
              Translation
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label class="form-check-label" for="inlineCheckbox1">
              Verification
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label class="form-check-label" for="inlineCheckbox1">
              Promotion
            </label>
          </div>
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

export default App;
