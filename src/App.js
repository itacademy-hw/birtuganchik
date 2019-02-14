import React, { Component } from "react";
import About from './publicPages/about/About';

export default class App extends Component {

    render() {
    let {  } = this.props;
        return (
            <div>
                <About/>
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