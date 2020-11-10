import React from "react";
import SearchBox from "./SearchBox";

function Nav(props) {
  return (
    <nav
      className="navbar navbar-expand navbar-dark bg-dark"
      style={{ display: "inline-block", width: "100%" }}
    >
      <div>
        <SearchBox handleInputChange={props.handleInputChange} />
      </div>
    </nav>
  );
}

export default Nav;
