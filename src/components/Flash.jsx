import React, { Component } from "react";
import styled from 'styled-components';

let FlashNotification = styled.div`
    ${props => props.visible ? `
        width: 20%;       
    `
    :
    `
        width: 0;
    `}
    height: 60px;
    position: absolute;
    top: 10px;
    left: 10px;
    background: grey;
    color: #fff;
    border-radius: 5px;
    text-align: center;

    ${props => props.success && `
        background: green;
    `}
    ${props => props.error && `
        background: red;
    `}
`

class Flash extends Component {
    state = { 

     }




    render() {

        let { message , success , error , visible } = this.props;
        return (
            <div>
                <FlashNotification visible={visible} success={success}>
                    {message}
                </FlashNotification>
                
            </div>
            
            
        );
    }
}

export default Flash;