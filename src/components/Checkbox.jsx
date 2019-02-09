import React, { Component } from "react";
import styled from 'styled-components';

let ChkBox = styled.input ` 
    width: 20px;
    height: 20px;
`

class Checkbox extends Component {

    render() {
        let { onchange } = this.props;
        return (
            <ChkBox onChange={onchange} type="checkbox"/>
        );
    }
}

export default Checkbox;