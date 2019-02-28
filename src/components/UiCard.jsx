import React, { Component } from "react";
import styled from 'styled-components';

let MatCard = styled.div`
    min-width: 360px;
    max-width: 360px;
    position: relative;
    border: solid 1px black;
    .header {
        padding: 0 10px;
        grid-area: header;
    }
    .body {
        padding: 0 10px;
        grid-area: body;
        ${props => props.hover && `
            cursor: pointer;
            :hover {
                background: lightgray;
            }
        
    `}
    }
    .footer {
        padding: 0 10px;
        grid-area: footer;
    }
    .image {
        grid-area: image;
    }
    display: grid;
    
    grid-template-rows: auto;
    grid-template-areas: 
        "header"
        "body"
        "footer";
    ${props => props.image && `
        grid-template-columns: 100%;
        grid-template-areas: 
        "header"
        "image"
        "body"
        "footer";
        img {
            width: 100%;
        }
    `}
    ${props => props.imageRight && `
        min-height: 160px;
        grid-template-columns: 55% 45%;
        grid-template-areas: 
            "header image "
            "body image "
            "footer image";
        .image {
            height: 100%;
        }
        img {
            width: 100%;
            height: 100%;
        }
    `}
    
`

class UiCard extends Component {
    state = {  }
    render() {
        let {image, imageRight, header, footer, onClick} = this.props;

        return (
            <MatCard image={image} imageRight={imageRight} hover={!!onClick}>

                
                <div className="header">{header}</div>
                <div className="body" onClick={() => onclick()} >{this.props.children}</div>
                <div className="image">
                    {image && 
                        <img src={image} />
                    }
                </div>
                <div className="footer">{footer}</div>
            </MatCard>
        );
    }
}

export default UiCard;