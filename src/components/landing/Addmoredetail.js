import React from "react";
import { Link } from "react-router-dom";
function Addmoredetail() {
  return (
    <nav>
      <Link to="/more-detail">
        <button type="button" className="btn btn-block btn-lg btn-primary">
          Add More Origion
        </button>
      </Link>
    </nav>
  );
}

export default Addmoredetail;
