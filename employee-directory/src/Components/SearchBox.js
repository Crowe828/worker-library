import React from "react";

function SearchBox(props) {
  return (
    <form className="form-inline" style={{ display: "inline-flex" }}>
      <div className="form-group">
        <input
          type="text"
          name="search"
          onChange={props.handleInputChange}
          className="form-control"
          placeholder="Search for an employee"
          style={{ width: "500px" }}
        />
      </div>
    </form>
  );
}

export default SearchBox;
