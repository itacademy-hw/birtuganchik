import React, { Component } from "react";
import Button from "./components/Button"
import Input from "./components/Input"
import Checkbox from "./components/Checkbox"
import Select from "./components/Select"
import Header from "./components/Header"
import Popup from "./components/Popup"
import Contact from "./pages/contact/Contact";

export default class App extends Component {

    render() {

        return (
            <div>
                <Header />
                <Contact />
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
