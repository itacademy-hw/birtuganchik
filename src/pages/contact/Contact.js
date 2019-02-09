import React, { Component } from "react";
import styled from 'styled-components';

let Head = styled.div`
text-align: center;
 color: black;
 font-family: sans-serif;
 display: block;
 background: #b5a9a9;
 padding: 40px 30px 40px 80px;
 cursor: pointer;
 font-size: 50px; 
    
`
class Contact extends Component {

    render() {
        return (
            <div className = "dava">
            <Head> ONE TWO GUN</Head>
            <div> Главная</div>
            <div> О компании</div>
            <div>контакты</div>
            </div>
            
        )
    }
}

export default Contact