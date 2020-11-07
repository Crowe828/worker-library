import React, { Component } from "react";
import DataBody from "./DataBody";
import API from "../Utils/API";

class DataTable extends Component {
  state = {
    result: [],
  };

  componentDidMount() {
    this.userInfo();
  }

  userInfo = () => {
    API.getUsers()
      .then((res) => this.setState({ result: res.data.results }))
      .catch((err) => console.log(err));
  };

  render() {
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
        <DataBody result={this.state.result} />
      </table>
    );
  }
}

export default DataTable;
