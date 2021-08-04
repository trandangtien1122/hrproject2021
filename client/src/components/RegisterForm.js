import React from 'react'

import './Semantic/semantic.min.css'
import './style.css'
import { isEmail } from "validator";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

// import UserDataService from "../services/user_services";
import AuthService from "../services/auth_service";
const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const email = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vusername = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};
const vpassword = value => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};
const options = [
    {
        label: "Select your team...",
        value: "",
    },
    {
        label: "Production",
        value: "Production",
    },
    {
        label: "Marketing",
        value: "Marketing",
    },
    {
        label: "Sale",
        value: "Sale",
    },
    {
        label: "IT",
        value: "IT",
    },
    {
        label: "HR",
        value: "HR",
    },
    {
        label: "Manager",
        value: "Manager",
    },
];

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangeFname = this.onChangeFname.bind(this);
        this.onChangeLname = this.onChangeLname.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeTeam = this.onChangeTeam.bind(this);
        this.handleRegister = this.handleRegister.bind(this);

        // this.saveUser = this.saveUser.bind(this);
        // this.newUser = this.newUser.bind(this);

        this.state = {
            id: null,
            user_name: "",
            lname: "",
            fname: "",
            password: "",
            email: "",
            address: "",
            team: "",
            country: "",
            gender: "",
            is_admin: false,
            submitted: false,
            message: "",
            successful: false
        };
    }

    onChangeUser(e) {
        this.setState({
            user_name: e.target.value
        });
    }

    onChangeFname(e) {
        this.setState({
            fname: e.target.value
        });
    }

    onChangeLname(e) {
        this.setState({
            lname: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onChangeCountry(e) {
        this.setState({
            country: e.target.value
        });
    }

    onChangeTeam(e) {
        this.setState({
            team: e.target.value
        });
    }

    handleRegister(e) {
        e.preventDefault();
        this.setState({
            message: "",
            successful: false
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            this.state.full_name = this.state.fname + " " + this.state.lname

                AuthService.register(
                this.state.user_name,
                this.state.email,
                this.state.password,
                this.state.full_name,
                this.state.address,
                this.state.gender,
                this.state.team,
                this.state.country
            ).then(
                response => {
                    this.setState({
                        message: response.data.message,
                        successful: true
                    });
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        successful: false,
                        message: resMessage
                    });
                }
            );
        }
    }
    render()
    {
        return (
            <div className='ui container'>
                <Form className="ui form"
                      onSubmit={this.handleRegister}
                      ref={c => {
                          this.form = c;
                        }}
                >

                {!this.state.successful && (
                    <div>
                        <h1 className="ui dividing header">Register Information</h1>
                        <div className="field">
                            <label>User Name - Password</label>
                            <div className="two fields">
                                <div className="field">
                                    <Input type="text"
                                           name="user_name"
                                           id="user_name"
                                           value={this.state.user_name}
                                           onChange={this.onChangeUser}
                                           validations={[required, vusername]}
                                           placeholder="User"/>
                                </div>
                                <div className="field">
                                    <Input type="password"
                                           name="password"
                                           id="password"
                                           value={this.state.password}
                                           onChange={this.onChangePassword}
                                           validations={[required, vpassword]}
                                           placeholder="Password"/>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label>Name</label>
                            <div className="two fields">
                                <div className="field">
                                    <Input type="text" name="fname" id="fname"
                                           value={this.state.fname}
                                           onChange={this.onChangeFname}
                                           validations={[required]}
                                           placeholder="First Name"/>
                                </div>
                                <div className="field">
                                    <Input type="text" name="lname" id="lname"
                                           value={this.state.lname}
                                           onChange={this.onChangeLname}
                                           validations={[required]}
                                           placeholder="Last Name"/>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label>Personal Address</label>
                            <div className="fields">
                                <div className="sixteen wide field">
                                    <Input type="text" name="address" id="address"
                                           value={this.state.address}
                                           onChange={this.onChangeAddress}
                                           validations={[required]}
                                           placeholder="Street Address"/>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <div className="fields">
                                <div className="sixteen wide field">
                                    <Input type="text" name="email" id="email"
                                           value={this.state.email}
                                           onChange={this.onChangeEmail}
                                           validations={[required]}
                                           placeholder="abcja@gmail.com"/>
                                </div>
                            </div>
                        </div>
                        <div className="two fields">
                            <div className="field">
                                <label>Team</label>
                                <select className="ui fluid dropdown"
                                        name ="team" id="team"
                                        value={this.state.team}
                                        onChange={this.onChangeTeam}>
                                    {options.map((option) => (
                                        <option value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="field">
                                <label>Country</label>
                                <div className="twelve wide field">
                                    <Input type="text" name="country" id="country"
                                           value={this.state.country}
                                           onChange={this.onChangeCountry}
                                           validations={[required]}
                                           placeholder="Country"/>
                                </div>
                            </div>
                        </div>
                        <div className="inline fields">
                            <label>Gender</label>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="male" tabIndex="0" className="hidden"/>
                                    <label>Male</label>
                                </div>
                            </div>

                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="fmale" tabIndex="0" className="hidden"/>
                                    <label>Fmale</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="ui button btn btn-primary btn-block">Submit</button>
                        </div>
                    </div>
                )}
                    {this.state.message && (
                        <div className="form-group">
                            <div
                                className={
                                    this.state.successful
                                        ? "alert alert-success"
                                        : "alert alert-danger"
                                }
                                role="alert"
                            >
                                {this.state.message}
                            </div>
                        </div>
                    )}
                    <CheckButton
                        style={{ display: "none" }}
                        ref={c => {
                            this.checkBtn = c;
                        }}
                    />
                </Form>
            </div>
        );
    }
}