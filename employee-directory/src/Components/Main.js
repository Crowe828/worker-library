import React from "react";
import DataArea from "./DataArea";

function Main(props) {
  return (
    <main className="main">
      {props.children}
      <DataArea />
    </main>
  );
}

export default Main;
