import React, { Component } from "react";
import Profile from "./pages/profile/Profile";

export default class App extends Component {
    state = { 
        profiles: [
            {nickname: 'Ashirov Aldiyar', name: 'Aldiyar', surname: 'Ashirov', nationality: 'Kyrgyz', sex: 'Male', age: '16', address: 'Manas Street, 7',},
        ]
     }
    render() {
        let {profiles} = this.state;
        return (
            <div>
                <Profile profile={profiles[0]}/>
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