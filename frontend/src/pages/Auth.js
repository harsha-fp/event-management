import React, { Component } from 'react';
import authContext from '../context/auth-context';
import './Auth.css';

const config = require('../assets/config.json');

class AuthPage extends Component {
    state = {
        isLogin: true
    }

    static contextType = authContext;

    constructor(props) {
        super(props);
        this.emailElement = React.createRef();
        this.passwordElement = React.createRef();
    }

    switchModeHandler = () => {
        this.setState(prevState => {
            return { isLogin: !prevState.isLogin };
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        const email = this.emailElement.current.value;
        const password = this.passwordElement.current.value;

        if (email.trim().length === 0 || password.trim().length === 0) {
            return;
        }

        let requestBody = {
            query: `
                query {
                    login(email: "${email}", password: "${password}") {
                        userId
                        token
                        tokenExpiration
                    }
                }
            `
        }

        if (!this.state.isLogin) {
            requestBody = {
                query: `
                    mutation {
                        createUser(userInput: {email: "${email}", password: "${password}"}) {
                            _id
                            email
                        }
                    }
                `
            }
        }

        fetch(config.URL, {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status !== 200 && res.status !== 201) {
                    throw new Error('Failed !!');
                }
                return res.json();
            })
            .then(data => {
                if (data.data.login.token) {
                    this.context.login(
                        data.data.login.token,
                        data.data.login.userId,
                        data.data.login.tokenExpiration
                    );
                }

            })
            .catch(err => {
                console.log(err);
            })
    };

    render() {
        return (

            <form className="auth-form" onSubmit={this.submitHandler}>
                <h2>{this.state.isLogin ? 'Login' : 'Register'}</h2>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" ref={this.emailElement} />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" ref={this.passwordElement} />
                </div>
                <div className="form-actions">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={this.switchModeHandler}>Switch to {this.state.isLogin ? 'Signup' : 'Login'}</button>
                </div>
            </form>
        )
    }
}

export default AuthPage
