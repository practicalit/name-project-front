import React, { useState } from "react";
import axios from "axios";

function VolunteerList() {
  const [volunteer, setvolunteer] = useState([]);
  const getLookups = () => {
    axios
      .get(
        `${process.env.REACT_APP_BACK_SERVER}${process.env.REACT_APP_VOLUNTEER_API}`
      )
      .then((response) => {
        setvolunteer(response.data);
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <React.Fragment>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>9/29/2019</td>
            <td>2</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>8/17/2018</td>
            <td>4</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>7/15/2016</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}
export default VolunteerList;
