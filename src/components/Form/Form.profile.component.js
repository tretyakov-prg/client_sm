import React, { Component } from 'react';
import {Image,FormControl} from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./Form.profile.component.css";

class FormProfileComponent extends Component {
      
    render() {
        const er = this.props.role;
        //const usrole = this.props.role.map((roles) => {});
        console.log(er.lenght);
        return (
            <div className="mform">
                <div className="container">
                    <div className="row gutters">
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="card1 h-100">
                                <div className="card-body">
                                    <div className="account-settings">
                                        <div className="user-profile">
                                            <div className="user-avatar">
                                                <Image src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Maxwell Admin"/>
                                            </div>
                                            <h5 className="user-name">{this.props.name}</h5>
                                            <h6 className="user-email">{this.props.email}</h6>
                                        </div>
                                        <div className="about">
                                            <h5 className="mb-2 text-primary">Rols</h5>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                            <div className="card1 h-100">
                                <div className="card-body">
                                    <div className="row gutters">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <h6 className="mb-3 text-primary">Personal Details</h6>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label for="fullName">Full Name</label>
                                                <FormControl 
                                                    type="text" 
                                                    className="form-control" 
                                                    id="fullName" 
                                                    placeholder="Enter full name"
                                                    value={this.props.name}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label for="eMail">Email</label>
                                                <FormControl 
                                                    type="email" 
                                                    className="form-control" 
                                                    id="eMail" 
                                                    placeholder="Enter email ID"
                                                    value={this.props.email}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label for="phone">ID User</label>
                                                <FormControl 
                                                    type="text" 
                                                    className="form-control" 
                                                    id="id" 
                                                    value={this.props.id}    
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label for="website">Short User Token</label>
                                                <FormControl 
                                                    type="url" 
                                                    className="form-control" 
                                                    id="website" 
                                                    placeholder="Website url"
                                                    value={this.props.token}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormProfileComponent;