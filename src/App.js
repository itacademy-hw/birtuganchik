import React, { Component } from "react";
import SignUp from "./publicPages/signUp/SignUp"

export default class App extends Component {

    render() {
    let {  } = this.props;
        return (
            <div>
                <SignUp/>
            </div>
            
        );
    }
}

// webpack, reactBuild








// const request = async () => {
//     const response = await fetch('https://api.com/values/1');
//     const json = await response.json();
//     console.log(json);
// }

// request();