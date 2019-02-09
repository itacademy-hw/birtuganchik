import React, { Component } from "react";
import DashBoard from "./pages/dashboard/DashBoard"
export default class App extends Component {

    render() {

        return (
             <DashBoard/>
           
        );
    }
}










// const request = async () => {
//     const response = await fetch('https://api.com/values/1');
//     const json = await response.json();
//     console.log(json);
// }

// request();