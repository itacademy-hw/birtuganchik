import React, { Component } from "react";
import styled from 'styled-components';

let InputBar = styled.input`
    width: 100px;
    height: 15px;
`

class Input extends Component {
    state = {  }
    render() {
        let { onchange } = this.props;
        return (
            <InputBar onChange={(e) => onchange(e.target.value)}/>
        );
    }
}

export default Input;