import React from "react";

function SearchBox(props) {
  return (
    <form className="search form-inline" style={{ display: "inline-flex" }}>
      <div className="form-group">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Search for an employee"
          id="employee"
          style={{ width: "500px" }}
        />
        {/* <datalist id="employees">
          {props.employees.map((employee) => (
            <option value={employee} key={employee} />
          ))}
        </datalist> */}
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-outline-light"
          style={{ marginLeft: "10px" }}
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBox;
