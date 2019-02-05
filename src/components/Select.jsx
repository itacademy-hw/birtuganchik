import React, { Component } from "react";
import styled from 'styled-components';

let Sel = styled.select`
    width: 100px;
    height: 30px;
`

class Select extends Component {

    render() {
        let { onchange } = this.props;
        return (
            <Sel onChange={onchange}/>
        );
    }
}

export default Select;