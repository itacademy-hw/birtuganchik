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
        padding: 7px;
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
let person = {
    login: 'user1',
    password: '12345',
}
class Login extends Component {
    state = {
        login: '',
        password: '',
    };
     signIn = () => {
        let {login, password} = this.state;
        if (person.login === login && person.password === password){
                alert('Sign In Success!');
            }
        alert('Access deny! Check your login and password!')
    }; 
    render() {
        


        return (
            <LoginPage>
                <div className="login">
                    <h1>Sign in to BTG</h1>
                    <p>Username/email</p>
                    <input onChange={chengePerson = (e) => this.setState.login.value.field} type="text" id="login_data" />
                    <p>Password   <a class="psw_reset" href="/password_reset">Forgot password?</a></p>
                    <input onChange={(e) => this.setState.password.value.field} type="text" id="password_data"/>
                    <button onClick={this.signIn(this.state.login.value, this.state.password.value)} className="btn_signing">Sign in</button>
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