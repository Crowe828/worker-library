import React, { Component } from "react";
import DataBody from "./DataBody";
import Nav from "./Nav";
import API from "../Utils/API";

class DataTable extends Component {
  state = {
    alphabetical: "az",
    result: [],
    resultSort: [],
    search: "",
  };

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
    const search = event.target.value;
    const foundEmployees = this.state.result.filter((name) => {
      let values = name.name.first.toLowerCase();
      return values.indexOf(search.toLowerCase()) !== -1;
    });

    this.setState({ result: foundEmployees });
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
    let sortedUsers;

    if (this.state.alphabetical === "az") {
      console.log("sort");
      sortedUsers = this.state.result.sort((a, b) =>
        a.name.last > b.name.last ? 1 : -1
      );
    } else {
      sortedUsers = this.state.result.sort((a, b) =>
        a.name.last < b.name.last ? 1 : -1
      );
    }

    return (
      <div>
        <Nav handleInputChange={this.handleInputChange} />
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
      </div>
    );
  }
}

export default DataTable;
