import React, { Component } from "react";
import styled from 'styled-components';
import CreatPerson from  '../pages/profile/create-person/CreatePerson';


let Overlay = styled.div`
    opacity:    0.5;
    background: #000;
    width:      100%;
    height:     100%;
    z-index:    1;
    top:        0;
    left:       0;
    position:   fixed;
`;
let Body = styled.div`
    width: 400px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    color: black
    z-index: 9999;
    overflow-y: auto;
    padding: 10px;
`;

class Popup extends Component {
    render() {
        let { title, showPopup, hidePopup } = this.props;
        return (
            showPopup &&
                <>
                    <Overlay onClick={() => hidePopup()}/>
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