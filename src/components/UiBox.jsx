import React, { Component } from "react";
import styled from 'styled-components';

let Uibox = styled.div`
    background-color: #fff;
    border: 1px solid #d1d5da;
    border-radius: 3px;

    h3 {
        font-size: 14px;
        font-weight: 600;
        margin: 0;
    }

    .title {
        background-color: #f6f8fa;
        border: 1px solid #d1d5da;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        margin: -1px -1px 0;
        padding: 16px;
    }
`;

export default class UiBox extends Component {

    render() {
        let { title } = this.props;
        return (
            <Uibox>
                <div className="title">
                    <h3>{title}</h3>
                </div>
                <div>{this.props.children}</div>
            </Uibox>
        );
    }
}

let Flexed = styled.div`
    display: flex;
    ${(props) => props.column && 'flex-direction: column;'}
    ${(props) => props.centerVert && 'align-items: center;'}
    ${(props) => props.centerHor && 'justify-content: center;'}
    ${(props) => props.style && {...props.style}}
`;

export class Flex extends Component {

    render() {
        let { style, column, centerVert, centerHor} = this.props;

        return (
            <Flexed
                style={style}
                column={column}
                centerVert={centerVert}
                centerHor={centerHor}
            >
                {this.props.children}
            </Flexed>
        )
    }
}