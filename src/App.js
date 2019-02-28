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
            <div style={{display: "inline"}}>
                Hello! Lets Test Tooltip! <Tooltip text="ПРОТЕСТИМ">TEST</Tooltip>
                <button onClick={() => this.hide()}>TEST FLASH</button>
                <button onClick={() => this.hide()}>TEST FLASH</button>
                <button onClick={() => this.hide()}>TEST FLASH</button>
                <button onClick={() => this.hide()}>TEST FLASH</button>
                {visible && <Flash visible={this.state.visible} success="true" message="WRONG ANSWER"/>}
                <UiCard onClick={() => console.log("hey")} header="Header" footer="Footer" image="https://wow.mmotop.ru/uploads/server/screenshot/5130/square_png" imageRight={true}>Body</UiCard>
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