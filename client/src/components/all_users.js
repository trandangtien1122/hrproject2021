import React, { Component } from "react";

import UserService from "../services/user_service";

export default class BoardUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: []
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
                    message:
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString()
                });
            }
        )
    }


    render() {
        return (
            <div className="container">
                    <div>
                        <h1>All users</h1>
                        {this.state.content.map((user, index) => (
                            <div>
                            <p key={index}>User name, {user.user_name}!</p>
                                <p key={index}>full name, {user.full_name}!</p>
                                <p key={index}>address, {user.address}!</p>
                                <p key={index}>email, {user.email}!</p>
                                <p key={index}>team, {user.team}!</p>
                                <p key={index}>country, {user.country}!</p>
                            </div>
                            ))}
                    </div>
            </div>
        );
    }
}