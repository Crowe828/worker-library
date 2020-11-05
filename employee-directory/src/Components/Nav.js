import React from "react";
// import SearchBox from "./SearchBox";
// import "../Styles/Nav.css";

// { handleSearchChange }
function Nav() {
  return (
    <nav
      className="navbar navbar-expand navbar-light bg-light"
      style={{ display: "inline-block", textAlign: "center", width: "100%" }}
    >
      <div>
        This is a navbar
        {/* <SearchBox handleSearchChange={handleSearchChange} />; */}
      </div>
    </nav>
  );
}

export default Nav;
