import React from "react";

function DataBody(data) {
  return (
    <tbody>
      {data.results.map((result) => (
        <tr>
          <th scope="row" key={result.id.value}>
            <img
              alt={
                result.data.results.name.first +
                " " +
                result.data.results.name.last
              }
              src={result.data.results.picture.thumbnail}
            />
          </th>
          <td>
            {result.data.results.name.first +
              " " +
              result.data.results.name.last}
          </td>
          <td>{result.data.results.phone}</td>
          <td>{result.data.results.email}</td>
          <td>{result.data.results.dob.date}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default DataBody;
