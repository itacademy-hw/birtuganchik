import React, { Component } from "react";
import styled from 'styled-components';
import Button from '../../components/Button';

let SignUpPage = styled.div`
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
        color: black;
        position: relative;
        z-index: 2;
        padding: 40px;
        justify-content: center;
        grid-template-columns: 35% 35%;
        grid-template-rows: auto;
        grid-template-areas:
            "SignUp_L SignUp_R"
            "footer footer"
    }
    h1{
        text-align: left;
    }
    .SignUp_L {
        background-color: #b8b7e282;
        background: url('bg2.jpg') no-repeat center;
        background-size: cover;
    }
    .SignUp_R {
        background-color: #b8b7e282;
        padding: 10px;
    }
    .flexed {
        display: flex;
    }
    .logo {
        text-align: center;
        padding-top: 20px;
    }
    .logoImg {
        width: 180px;
    }
    li {
        display: inline;
        margin-right: 5px;
        padding: 3px;
    }

    .signup_form {
        width: 45%;
    }

    .dots {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 5%;
        .dot {
            width: 1px;
            height: 40px;
            background: black;
            transition: 0.5s;
        }
        .dot {
            transform: scale(1.4);
            background: red;
        }
    }

    .footer {
        grid-column: 1 / span 2;
        grid-row: 2;
        text-align: center;
        //background-color: #b8b7e282;
    }
`;

let Input = styled.input`

`;

let usersData = [];

class SignUp extends Component {
    state = {
        user: {
            email: '',
            firstName: '',
            lastName: '',
            age: '',
            password: ''
        },
        set: '',
        submitted: false
    };

    changeInput = () => {

    };

    createPerson = (value, field) => {
        this.setState({
            set: field,
            user: { ...this.state.user, [field]: value }
        });

        let emailValid = value.match(/^[-!#$%&'*+\\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/);

        if (field === 'email') {
            if (!!emailValid) {
                return this.setState({ user: { ...this.state.user, [field]: value, set: 'email'} })
            }
            return this.setState({ user: { ...this.state, set: false}});
        }

        if (field === 'password') {
            if (value.length > 6) {
                return this.setState({ user: { ...this.state.user, [field]: value } })
            }
            return console.log('Password is too short!');
        }
        //console.log(this.state.user);
    };
    signUp = () => {
        usersData.push({
            ...this.state.user
        })
    };

    render() {
        let { set } = this.state;
        return (
            <SignUpPage>
                <div className='bg'></div>
                <div className="container">
                    <div className="SignUp_L">
                        <div className="logo">
                            <img className="logoImg" src='logo.png' alt="logo" />
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="SignUp_R">
                        <h1>Sign Up</h1>
                        <div className="flexed">
                            <form className="signup_form">
                                <p>Email</p>
                                <input
                                    onChange={(e) => this.createPerson(e.target.value, 'email')}
                                    type="text"
                                    id="signup_username"
                                />
                                <p>First Name</p>
                                <input
                                    onChange={(e) => this.createPerson(e.target.value, 'firstName')}
                                    type="text"
                                    id="signup_firstname"
                                    className={set === 'firstName' && set}
                                />
                                <p>Last Name</p>
                                <input
                                    onChange={(e) => this.createPerson(e.target.value, 'lastName')}
                                    type="text"
                                    id="signup_lastname"
                                    className={set === 'lastName' && set}
                                />
                                <p>Age</p>
                                <input
                                    onChange={(e) => this.createPerson(e.target.value, 'age')}
                                    type="text"
                                    id="signup_age"
                                    className={set === 'age' && set}
                                />
                                <p>Password</p>
                                <input
                                    onChange={(e) => this.createPerson(e.target.value, 'password')}
                                    type="text"
                                    id="signup_password"
                                    className={set === 'password' && set}
                                />
                                <div>
                                    {/*  <button onClick={() => this.signUp()} className="btn_signUp">Sign Up</button> */}
                                    <Button onClick={() => this.signUp()} signUp={'signUp'} text={'Sign Up'} />
                                </div>
                            </form>
                            <div className="dots">
                                <span className="dot na" />
                                <span className={`dot ${set === 'email' && set}`} />
                                <span className="dot na" />
                                <span className={`dot ${set === 'firstName' && set}`} />
                                <span className="dot na" />
                                <span className={`dot ${set === 'lastName' && set}`} />
                                <span className="dot na" />
                                <span className={`dot ${set === 'age' && set}`} />
                                <span className="dot na" />
                                <span className={`dot ${set === 'password' && set}`} />
                            </div>
                        </div>
                    </div>
                    <div className="footer">
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