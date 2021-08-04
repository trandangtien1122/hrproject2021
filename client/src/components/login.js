import React from 'react'
import ReactDOM from 'react-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import './Semantic/semantic.min.css'
import './style.css'
import {Button, Modal} from 'semantic-ui-react'
import Register from './RegisterForm'
import Main_login from "./main_login";
import BoardUser from "./all_users";
import AuthService from "../services/auth_service";


function Load_main_login(){
    ReactDOM.render(<Main_login/>, document.getElementById("root"))
}

function Load_Users(){
    ReactDOM.render(<BoardUser/>, document.getElementById("root"))
}

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeOpen1 = this.onChangeOpen1.bind(this);
        this.onChangeClose1 = this.onChangeClose1.bind(this);
        this.onChangeSecondOpen = this.onChangeSecondOpen.bind(this);
        this.onChangeSecondClose = this.onChangeSecondClose.bind(this);
        // const [open1, setOpen] = React.useState(false)
        // const [secondOpen, setSecondOpen] = React.useState(false)

        this.state = {
            username: "",
            password: "",
            loading: false,
            message: "",
            open1: false,
            secondOpen: false
        };
    }

    onChangeOpen1(e) {
        e.preventDefault();
        this.setState({
            open1: true
        });
    }

    onChangeClose1(e) {
        e.preventDefault();
        this.setState({
            open1: false
        });
    }

    onChangeSecondOpen(e) {
        e.preventDefault();
        this.setState({
            secondOpen: true
        });
    }
    onChangeSecondClose(e) {
        e.preventDefault();
        this.setState({
            secondOpen: false
        });
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.username, this.state.password).then(
                () => {
                    Load_Users()
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }
    render(){
        return (
            <>
                <Modal
                    onClose= {this.onChangeClose1}
                    onOpen={this.onChangeOpen1}
                    open={this.state.open1}
                    trigger={<a href='#' className='black'>
                        <i className="black user circle outline icon"></i><span className='black color_text'>Login</span>
                    </a>}
                >
                    <Modal.Content>
                        <Modal.Description>
                            <div className='ui container'>
                                <div className="ui placeholder segment">
                                    <div className="ui two column very relaxed stackable grid">
                                        <div className="column">
                                            <Form
                                                onSubmit={this.handleLogin}
                                                ref={c => {
                                                    this.form = c;
                                                }}
                                                class="ui form"
                                            >
                                                <div className="field">
                                                    <label>Username</label>
                                                    <div className="ui left icon input">
                                                        <Input
                                                            type="text"
                                                            name="username"
                                                            placeholder="Username"
                                                            value={this.state.username}
                                                            onChange={this.onChangeUsername}
                                                            validations={[required]}
                                                        />
                                                        <i className="user icon"></i>
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <label>Password</label>
                                                    <div className="ui left icon input">
                                                        <Input
                                                            type="password"
                                                            name="password"
                                                            value={this.state.password}
                                                            onChange={this.onChangePassword}
                                                            validations={[required]}
                                                        />
                                                        <i className="lock icon"></i>
                                                    </div>
                                                </div>
                                                <button className="ui big blue submit button"
                                                        disabled={this.state.loading}
                                                        // onClick={Load_main_login}
                                                >
                                                {this.state.loading && (
                                                    <span></span>
                                                )}
                                                <span>Login</span>
                                                </button>
                                                {this.state.message && (
                                                    <div className="form-group">
                                                        <div className="alert alert-danger error" role="alert">
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
                                        <div className="middle aligned column">
                                            <button className='ui big button' onClick={this.onChangeSecondOpen} primary>
                                                <i className="signup icon"></i>
                                                Sign Up
                                            </button>

                                        </div>
                                    </div>
                                    <div className="ui vertical divider">
                                        Or
                                    </div>
                                </div>
                            </div>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <div className='ui grid'>
                            <div className='row'>
                                <div className='center aligned  column'>
                                    <h4> Wellcome HR Lotus</h4>
                                </div>
                            </div>

                        </div>

                    </Modal.Actions>
                </Modal>
                <Modal
                    onClose={this.onChangeSecondClose}
                    open={this.state.secondOpen}
                    size='small'
                >
                    <Modal.Content>
                        <Register/>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            icon='check'
                            content='All Done'
                            onClick={this.onChangeSecondClose}
                        />
                    </Modal.Actions>
                </Modal>
            </>
        );
    }
}