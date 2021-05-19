import React, { Component } from "react";

import UserService from "../services/user.service";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
      //base: {}
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
      /*UserService.getAdminRoles()
      .then(
        response => {
          this.setState({
            base: response.data
          })
          console.log(this.state.base)
        }
      )*/
  }

  render() {
    //const roles = this.state.base.map((role) => 
    //<h4>{role}</h4>
    //);
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
          
        </header>
      </div>
    );
  }
}