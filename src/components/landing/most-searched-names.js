import React from "react";

function MostSearchedNames () 
{
    return (
      <React.Fragment>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Meaning</th>
              <th scope="col">Origin</th>
              <th scope="col">Number of Searches</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Betty</td>
              <td>Beautiful</td>
              <td>Amharic</td>
              <td>20</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>sons of Isaac</td>
              <td>Hebrew</td>
              <td>15</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Bobby</td>
              <td>Polic</td>
              <td>English</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    )
}
export default MostSearchedNames;