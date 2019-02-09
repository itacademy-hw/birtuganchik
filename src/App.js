import React, { Component } from "react";
import Profile from "./pages/profile/Profile";

export default class App extends Component {
    state = { 
        profiles: [
            {nickname: 'Nickname', name: '', age: '',  sex: '', nationality: '', family: '', address: '',},
        ]
     }
    render() {
        let {profiles} = this.state;
        return (
            <div>
                {profiles.map((item, index) => <Profile key={index} profile={item}/>)}
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