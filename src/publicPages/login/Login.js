import React, { Component } from "react";
import styled from 'styled-components';

let LoginPage = styled.div `
    *{
        box-sizing: border-box;
    }
    margin: 0 auto;
    width: 250px;
    display: block;
    font-size: 14px;
    line-height: 1.5;

    .btn_signing{
        margin-top: 40px;
        display: block;
        text-align: center;
        width: 100%;
    }
    input {
        width: 100%;
    }
    h1{
        text-align: center;
    }
    li {
        display: inline;
        margin-right: 5px;
        padding: 3px;
       }
       .psw_reset {
        float: right;
       }
       .crt_account {
        float: right;
       }
`;

class Login extends Component {
    loginData = { 
        login: '',
        password: '',
     };

    render() {
        let {login, password} = this.loginData;
        /*  signIn = () => {
            if (this.id.login_data === login){
                if(this.id.password_data === password ){
                    return "Sign In Success!";
                }
            }
        }; */

        return (
            <LoginPage>
            <div className="login">
                <h1>Sign in to BTG</h1>
                <p>Username/email</p>
                <input type="text" id="login_data" />
                <p>Password   <a class="psw_reset" href="/password_reset">Forgot password?</a></p>
                <input type="text" id="password_data"/>
                <button className="btn_signing">Sign in</button>
                <p class="signup">New to BTG? <a className="crt_account" href="/login">Create an account.</a></p>
            </div>
            <div className="navigation_footer">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contacts">Contacts</a></li>
                </ul>
            </div>
            </LoginPage>
        );
    }
}

export default Login;