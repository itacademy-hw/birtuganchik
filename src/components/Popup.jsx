import React, { Component } from "react";
import styled from 'styled-components';


let Overlay = styled.div`
    opacity:    0.5;
    background: #000;
    width:      100%;
    height:     100%;
    z-index:    1;
    top:        0;
    left:       0;
    position:   fixed;
`
let Body = styled.div`
    ${
        props => props.width ? `
            width: ${props.width}
        `
        :
        `
            width: 400px;
        `
    }
    ${
        props => props.height ? `
            height: ${props.height}
        `
        :
        `
            height: 400px;
        `
    }
    
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    color: black;
    z-index: 9999;
    overflow-y: auto;
    padding: 10px;
`

class Popup extends Component {
    render() {
        let { title, showPopup, hidePopup, width, height } = this.props;
        return (
            showPopup &&
                <>
                    <Overlay width={width} height={height} onClick={() => hidePopup()}/>
                    <Body>
                        <h1>{title}</h1>
                        <div>
                            {this.props.children}
                        </div>
                    </Body>
                </>
        );
    }
}

export default Popup;