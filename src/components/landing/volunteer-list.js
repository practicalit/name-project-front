import React, { useState, useEffect } from "react";
import axios from "axios";

function VolunteerList() {
  const [volunteers, setvolunteer] = useState([]);
  
  //use effect hook to get initiated on the first round
  useEffect(() => {
    getVolunteers();
    return () => {
      //cleanup
    };
  }, []);

  const capitalize = string => {
    if(string!==null && string!=="" ){
      return string[0].toUpperCase() + string.slice(1).toLowerCase();
    }
    return "";
  }

  const getVolunteers = () => {
    axios
      .get(
        `${process.env.REACT_APP_BACK_SERVER}${process.env.REACT_APP_VOLUNTEER_API}`
      )
      .then((response) => {
        console.log(response.data);
        setvolunteer(response.data);
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <React.Fragment>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map( volunteer => {
            return (<tr>
              <td>{capitalize(volunteer.first_name)}</td>
              <td>{capitalize(volunteer.last_name)}</td>
              <td>{volunteer.email}</td>
            </tr>)
          })}   
        </tbody>
      </table>
    </React.Fragment>
  );
}
export default VolunteerList;
