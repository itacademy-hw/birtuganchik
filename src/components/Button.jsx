import React, { Component } from "react";
import styled from 'styled-components';

let Btn = styled.button`
    width: 80px;
    height: 40px;
    font-weight: 700;
    color: black;
    text-decoration: none;
    border-radius: 5px;
    border: 0;
    :hover {
        opacity: .8;
    }
    ${props => props.login && `
        background: green;
        transition: 0.2s;
        :hover {
            opacity: .8;
        }`
        }
    ${props => props.remove && `
        background: red;
        transition: 0.2s;
        :hover {
            opacity: .8;
        }
    `}

`

class Button extends Component {
    state = {  }
    render() {
        let { text, green, red, onclick } = this.props;

        return (
            <Btn onClick={() => onclick && onclick()} green={green} red={red}>{text}</Btn>
        );
    }
}

export default Button;