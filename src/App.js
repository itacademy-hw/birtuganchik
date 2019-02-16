import React, { Component } from "react";
import Tooltip from "./components/Tooltip";
import Flash from "./components/Flash";

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
            <div style={{display: "inline"}}>
                Hello! Lets Test Tooltip! <Tooltip text="ПРОТЕСТИМ">TEST</Tooltip>
                <button onClick={() => this.hide()}>TEST FLASH</button>
                <button onClick={() => this.hide()}>TEST FLASH</button>
                <button onClick={() => this.hide()}>TEST FLASH</button>
                <button onClick={() => this.hide()}>TEST FLASH</button>
                {visible && <Flash visible={this.state.visible} message="WRONG ANSWER"/>}
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