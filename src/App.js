import React, { Component } from "react";
import CreatePerson from "./pages/profile/create-person/CreatePerson"

export default class App extends Component {

    render() {

        return (
            <div>
                <CreatePerson />
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