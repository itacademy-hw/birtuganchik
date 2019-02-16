import React, { Component } from "react";
import styled from 'styled-components';
import Button from '../../components/Button';

let SignUpPage = styled.div `
    .bg {
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0px;
        filter: blur(5px);
        background: url('bg.jpg') no-repeat center;
        background-size: cover;
    }
    .container {
        display: grid;
        color: #fff;
        position: relative;
        z-index: 2;
        padding: 40px;
        grid-template-columns: 50% 50%;
        grid-template-rows: auto;
        grid-template-areas:
            "SignUp_L SignUp_R"
            "navigation_footer navigation_footer"
    }
    h1{
        text-align: center;
    }
    .SignUp_L {
        background-color: #d2cfcfad;
    }
    .SignUp_R {
        background-color: #d2cfcfad;
    }
    .logo {
        text-align: center;
        padding-top: 30px;
    }
    .logoImg {
        width: 180px;
    }
    input {
        width: 90%;
    }
    li {
        display: inline;
        margin-right: 5px;
        padding: 3px;
    }
    .navigation_footer {
        grid-column: 1 / span 2;
        grid-row: 2;
        text-align: center;
    }
`;

class SignUp extends Component {
    state = {
        user: {
            email: '',
            firstName: '',
            lastName: '',
            age: 0,
            password: ''
        },
        submitted: false
    };



    createPerson = (value, field) => {
        let {password} = this.state.user;
        this.setState({
            user: {...this.state.user, [field]: value}
        });

         let emailValid = value.match(/^[-!#$%&'*+\\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/);

         if(field === 'email'){
             if(!!emailValid){
                this.setState({user: {...this.state.user, [field]: value}})
             }
             return console.log('Invalid Email');
        }

        if(field === 'password'){
            if(field === 'password' && password.value.length > 6){
                this.setState({user: {...this.state.user, [field]: value}})
            }
            return console.log('Password is too short!');
        }
        //console.log(this.state.user);
    };

        signUp = () => {
            let usersData =  [];
            usersData.push({
                ...this.state.user
            })
        };

    render() {

        return (
           <SignUpPage>
            <div className='bg'></div>
            <div class="container">
                <div className="SignUp_L">
                <div className="logo">
                    <img className="logoImg" src='logo.jpg' alt="logo"/>
                </div>
                <div>
                    <span>1</span>

                </div>
                </div>
                <div className="SignUp_R">
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

                   {/*  <button onClick={() => this.signUp()} className="btn_signUp">Sign Up</button> */}
                    <Button onClick={() => this.signUp()} signUp={'signUp'} text={'Sign Up'}/>
                </div>
                <div className="navigation_footer">
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contacts">Contacts</a></li>
                    </ul>
                </div>
            </div>
           </SignUpPage>
        );
    }
}

export default SignUp;