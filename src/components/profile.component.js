import React, { Component } from "react";
import AuthService from "../services/auth.service";
import FormProfileComponent from "./Form/Form.profile.component";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="container">
        <FormProfileComponent 
          name={currentUser.username}
          email={currentUser.email} 
          id={currentUser.id} 
          token={currentUser.accessToken.substring(0, 20)}
          role={currentUser.roles}
          />
      </div>
    );
  }
}