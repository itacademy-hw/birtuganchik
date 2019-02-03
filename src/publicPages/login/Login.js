import React, { Component } from "react";
import styled from 'styled-components';

let LoginPage = styled.div `
    margin: 0 auto;
    width: 340px;
`;

class Login extends Component {
    loginData = { 
        login: '',
        password: '',
     };

    render() {
        let {login, password} = this.loginData;

        return (
            <LoginPage>
            <div className="login">
                <p>Username or email address:</p>
                <input value={login}/>
                <p>Password</p>
                <input value={password}/>
            </div>
            </LoginPage>
        );
    }
}

export default Login;