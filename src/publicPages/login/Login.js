import React, { Component } from "react";
import styled from 'styled-components';
import Button from '../../components/Button';

let LoginPage = styled.div `
    *{
        box-sizing: border-box;
    }
    margin: 0 auto;
    width: 250px;
    display: block;
    font-size: 14px;
    line-height: 1.5;

    .logo {
        text-align: center;
        padding-top: 30px;
    }
    .logoImg {
        width: 180px;
    }
    .Login {
        font-size: 14px;
        padding: 20px;
        border-radius: 5px;
        border: 1px solid #d8dee2;
    }
    .btn_signing{
        margin-top: 40px;
        display: block;
        text-align: center;
        width: 100%;
        padding: 7px;
        cursor: pointer;
        background-color: #2626ff;
        background-image: linear-gradient(-180deg,#2e2ebd,#2626ff 90%);
        font-weight: 600;
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
            login: "",
            password: "",
            submitted: false
        };
      
    changePerson = (e, field) => {
        this.setState({
            [field]: e.target.value
        })
    };
     signIn = () => {
        let {login, password} = this.state;
        if (person.login === login && person.password === password){
                return console.log('Sign In Success!');
            }
        console.log('Access deny! Check your login and password!')
    };  

    render() {
        return (
            <LoginPage>
                <div className="logo">
                    <img className="logoImg" src='logo.jpg' alt="logo"/>
                </div>
                <div className="Login">
                    <h1>Login</h1>
                    <p>Username</p>
                    <input value={this.state.value} onChange={(e) => this.changePerson(e, 'login')} type="text" id="login_data" />
                    <p>Password <a className="psw_reset" href="/password_reset">Forgot password?</a></p>
                    <input value={this.state.value} onChange={(e) => this.changePerson(e, 'password')} type="text" id="password_data"/>
                    {/* <button onClick={() => this.signIn()} className="btn_signing">Sign in</button> */}
                    <Button onClick={() => this.signIn()} login={'login'} text={'Sign in'}/>
                    <p className="signUp">New to BTG?    <a className="crt_account" href="/signUp">Create an account.</a></p>
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