import React, { Component } from "react";
import DataBody from "./DataBody";
import API from "../Utils/API";

class DataTable extends Component {
  state = {
    results: [],
    image: [],
    name: [],
    phone: [],
    email: [],
    dob: [],
  };

  componentDidMount() {
    this.userInfo();
    this.userImage();
    this.userName();
    this.userPhone();
    this.userEmail();
    this.userDob();
  }

  userInfo = () => {
    API.getUsers()
      .then((res) => this.setState({ results: res.data }))
      .catch((err) => console.log(err));
  };

  userImage = () => {
    API.getUsers()
      .then((res) =>
        this.setState({
          image: res.data.results[0].picture.thumbnail,
        })
      )
      .catch((err) => console.log(err));
  };

  userName = () => {
    API.getUsers()
      .then((res) =>
        this.setState({
          name:
            res.data.results[0].name.first +
            " " +
            res.data.results[0].name.last,
        })
      )
      .catch((err) => console.log(err));
  };

  userPhone = () => {
    API.getUsers()
      .then((res) =>
        this.setState({
          phone: res.data.results[0].phone,
        })
      )
      .catch((err) => console.log(err));
  };

  userEmail = () => {
    API.getUsers()
      .then((res) =>
        this.setState({
          email: res.data.results[0].email,
        })
      )
      .catch((err) => console.log(err));
  };

  userDob = () => {
    API.getUsers()
      .then((res) =>
        this.setState({
          dob: res.data.results[0].dob.date,
        })
      )
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
        <tbody>
          {/* <DataBody results={this.state.results} /> */}
          <tr>
            <th scope="row">
              <img src={this.state.image} alt={this.state.name} />
            </th>
            <td>{this.state.name}</td>
            <td>{this.state.phone}</td>
            <td>{this.state.email}</td>
            <td>{this.state.dob}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default DataTable;
