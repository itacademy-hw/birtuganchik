import React, { Component } from "react";
import styled from 'styled-components';

let LoginPage = styled.div `
    *{
        box-sizing: border-box;
    }
    margin: 0 auto;
    width: 340px;
    display: block;
    font-size: 14px;
    line-height: 1.5;

    .btn_signing{
        margin-top: 40px;
        display: block;
        text-align: center;
        width: 100%;
    }
    }
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
                <h1>Sign in to BitTuganchik</h1>
                <p>Username or email address</p>
                <input value={login}/>
                <p>Password <a class="label-link" href="/password_reset">Forgot password?</a></p>
                <input value={password}/>
                <button className="btn_signing">Sign in</button>
            </div>
            </LoginPage>
        );
    }
}

export default Login;