import React, { Component } from "react";
import Tooltip from "./components/Tooltip";
import Flash from "./components/Flash";
import UiCard from "./components/UiCard";

export default class App extends Component {
    state = {
        visible: false
    }

    hide = () => {
        this.setState({
            visible: true
        })
        setTimeout(() => this.setState({visible: false}),2000)
    }

    render() {
        
    let { visible } = this.state;
        return (
            <div>
                
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