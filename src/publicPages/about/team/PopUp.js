import React, { Component } from "react";
import styled from 'styled-components';

let PopupMes = styled.div`
    opacity:    0.5; 
    background: #000; 
    width:      100%;
    height:     100%; 
    z-index:    1;
    top:        0; 
    left:       0; 
    position:   fixed; 
`
let ShowPopup = styled.div`
    width: 400px;
    height: 300px;
    position: absolute;
    top: 50%;  
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    color: black
    z-index: 9999;
    overflow: scroll;
    padding: 10px;
`
class Popup extends Component {
    state = {
        clicked: false,
    }
    render() {
        let { title } = this.props;
        let { clicked } = this.state;
        return (
            <>
                <button text="Button" onClick={() => this.setState({clicked: true})}></button>
                {clicked &&
                <>
                    <PopupMes onClick={() => this.setState({clicked: false})}></PopupMes>
                    <ShowPopup>
                            <h1>{title}</h1>
                            <div>
                                {this.props.children}
                            </div>
                    </ShowPopup>
                </>
                }
            </>
        );
    }
}
export default Popup;