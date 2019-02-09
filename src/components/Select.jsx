import React, { Component } from "react";
import styled from 'styled-components';

let Sel = styled.select`
    width: 100px;
    height: 30px;
`

class Select extends Component {

    render() {
        let { onchange, option } = this.props;
        return (
            <Sel onChange={onchange}>
                <option>{option}</option>
            </Sel>
        );
    }
}

export default Select;