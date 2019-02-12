import React, { Component } from 'react';
import styled from 'styled-components';
import Popup from '../../../components/Popup';

let Btn = styled.button`
    background-color: #1b1a20;
    color: #fff;
    padding: 15px 0;
    margin-top: 10px;
    cursor: pointer;
    width: 100%;
    border: 0;
    ${(props) => !props.round &&
        `:hover {
            background: #eabf00;
            color: white;
        }`
    }

    ${(props) => props.round &&
        `border-radius: 50%;
         width: 35px;
         height: 35px;
         display: inline-flex;
         justify-content: center;
         align-items: center;
         padding: 0;
         background: #ececec;
         color: black;

         :hover {
            border: 1px solid black;
         }`
    }
`;




class Button extends Component {
  render() {
    let { text, round } = this.props;
    return (
      <Btn round={round}>
      {text}
      </Btn>
    );
  }
}

export default Button;
