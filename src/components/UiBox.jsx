import React, { Component } from "react";
import styled from 'styled-components';

class UiBox extends Component {
    
    render() {
        let { title } = this.props;
        return (
            <div>
                <div>{title}</div>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

export default UiBox;