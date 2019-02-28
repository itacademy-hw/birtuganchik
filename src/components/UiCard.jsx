import React, { Component } from "react";
import styled from 'styled-components';

let MatCard = styled.div`
    width: 400px;
    height: 400px;
    position: relative;
    background: yellow;
    text-align: center;
    .header {
        grid-area: header;
    }
    .body {
        grid-area: body;
    }
    .footer {
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
    `}
    ${props => props.imageRight && `
        grid-template-columns: 40% 40%;
        grid-template-areas: 
            "header image "
            "body image "
            "footer image";
        .image {
            height: 100%;
        }
    `}
`

class UiCard extends Component {
    state = {  }
    render() {
        let {image, imageRight, header, footer} = this.props;
        return (
            <MatCard image={image} imageRight={imageRight}>

                
                <div className="header">{header}</div>
                <div className="body">{this.props.children}</div>
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