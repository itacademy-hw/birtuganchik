import React, { Component } from "react";
import styled from "styled-components";
import RootTree from "./pages/tree/Tree";

let Round = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid black;
    display: inline-block;
    border-radius: 50%;
    margin: 40px;
`;

export default class App extends Component {

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <RootTree/>
            </div>
        );
    }
}