import React, { Component } from "react";
import styled from 'styled-components';

let Tool = styled.span`
    position: relative;
    display: inline-flex;
    justify-content: center;
    width: max-content;

    .tooltip {
        position: absolute;
        min-width: max-content;
        color: #fff;
        text-align: center;
        background-color: #000;
        padding: 5px;
        opacity: .8;
        border-radius: 5px;
    }

    ${props => props.direction === 'right' && `
        .tooltip {
            left: 125%;
            top: 0%;
        }
    `}
    ${props => props.direction === 'top' && `
        .tooltip {
            left: initial;
            bottom: 125%;
        }
    `}
    ${props => props.direction === 'left' && `
        .tooltip {
            right: 125%;
            top: 0%;
        }
    `}
    ${props => !props.direction && `
        .tooltip {
            left: initial;
            top: 125%;
        }
    `}

`;

class Tooltip extends Component {
    state = {
        hidden: false
    };

    show = () => this.setState({ hidden: true })
    hide = () => this.setState({ hidden: false })

    render() {
        let { text } = this.props;
        let { hidden } = this.state;

        return(
            <Tool direction="right" onMouseOver={() => this.show()} onMouseOut={() => this.hide()}>
                {this.props.children}

                {hidden && <div className="tooltip">{text}</div>}
            </Tool>
        )
    }
}


export default Tooltip;