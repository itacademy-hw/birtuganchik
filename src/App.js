import React, { Component } from "react";
import Header from "./components/Header"
import Contacts from "./publicPages/contacts/Contacts";

export default class App extends Component {

    render() {

        return (
            <div>
                <Header />
                <Contacts />
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
/* login
sign up
about
profile
create
button
dashpoard
checkbox
*/
