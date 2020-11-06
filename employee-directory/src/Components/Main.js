import React from "react";
import Nav from "./Nav";
import DataArea from "./DataArea";

function Main() {
  return (
    <main className="main">
      <Nav />
      {/* {props.children} */}
      <DataArea />
    </main>
  );
}

export default Main;
