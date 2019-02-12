import React, { Component } from "react";
import styled from 'styled-components';

let SignUpPage = styled.div `
    *{
        box-sizing: border-box;
    }
    margin: 0 auto;
    width: 250px;
    display: block;
    font-size: 14px;
    line-height: 1.5;

    h1{
        text-align: center;
    }
    .SignUp {
        font-size: 14px;
        padding: 20px;
        border-radius: 5px;
        border: 1px solid #d8dee2;
    }
    .logo {
        text-align: center;
        padding-top: 30px;
    }
    .logoImg {
        width: 180px;
    }
    input {
        width: 100%;
    }
    li {
        display: inline;
        margin-right: 5px;
        padding: 3px;
    }
    .btn_signUp{
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
`;

let usersData = {
    email: '',
    firstName: '',
    lastName: '',
    age: '',
    password: ''
};

class SignUp extends Component {
    state = {
        user: {
            email: '',
            firstName: '',
            lastName: '',
            age: '',
            password: ''
        },
        submitted: false
    };

    signUp = (e, field) => {
        usersData.push({
            [field]: e.target.value
        })
    };

    createPerson = (value, field) => {
        let emailValid = value.match(/^[-!#$%&'*+\\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/);

        if(field === 'email' ){
            if (!!emailValid) {
                return this.setState({
                    [field]: value
                    })
                }
            return console.log('Invalid Email');
            }
            if(field === 'password'){
                console.log(value.length)
                if(value.length > 6){
                    return this.setState({
                        [field]: value
                        })
                    }
                return console.log('Password is too short!');
                }
        };

    render() {
        return (
           <SignUpPage>
                <div className="logo">
                    <img className="logoImg" src='logo.jpg' alt="logo"/>
                </div>
                <div className="SignUp">
                    <h1>Sign Up</h1>
                    <p>Email</p>
                    <input value={this.state.value} onChange={(e) => this.createPerson(e.target.value, 'email')} type="text" id="signup_username" />
                    <p>First Name</p>
                    <input value={this.state.value} onChange={(e) => this.createPerson(e.target.value, 'firstName')} type="text" id="signup_firstname"/>
                    <p>Last Name</p>
                    <input value={this.state.value} onChange={(e) => this.createPerson(e.target.value, 'lastName')} type="text" id="signup_lastname"/>
                    <p>Age</p>
                    <input value={this.state.value} onChange={(e) => this.createPerson(e.target.value, 'age')} type="text" id="signup_age"/>
                    <p>Password</p>
                    <input value={this.state.value} onChange={(e) => this.createPerson(e.target.value, 'password')} type="text" id="signup_password"/>
                    
                    <button onClick={() => this.signUp()} className="btn_signUp">Sign Up</button>
                </div>
                <div className="navigation_footer">
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contacts">Contacts</a></li>
                    </ul>
                </div>
           </SignUpPage>
        );
    }
}

export default SignUp;