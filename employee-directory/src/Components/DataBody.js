import React from "react";

function DataBody() {
  return (
    <table className="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">img</th>
          <td>name</td>
          <td>phone</td>
          <td>email</td>
          <td>dob</td>
        </tr>
      </tbody>
    </table>
  );
}

export default DataBody;
