import React, { Component } from "react";
//import Login from "./publicPages/login/Login";
import SignUp from "./publicPages/signUp/SignUp";

export default class App extends Component {

    render() {

        return (
            <div className="Main">
                <div className="header" >
                    <SignUp />
                </div>
            </div>
        );
    }
}










// const request = async () => {
//     const response = await fetch('https://api.com/values/1');
//     const json = await response.json();
//     console.log(json);
// }

// request();