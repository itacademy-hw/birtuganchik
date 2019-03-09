import React, { Component } from 'react';
import styled from 'styled-components';
import Sections from '../sections/Sections';
import './Content.css';

let Image = styled.div`
    height: 56px;
    background: url(../img/logo.png)no-repeat;
    background-size: 100%;
    width: 142px;
    margin-left: 28%;
    margin-bottom: -67px;
    justify-content: center;
`;

let Wrds = styled.div`
    top: 0;
    right: 0;
    font-size: 10px;
    padding: 4px;
    color: white;

    h1{
        color: blueviolet;
        font-family: cursive;
        margin-left: 15%;
    }
`;

let ContentDiv = styled.div`
    text-align: center;
    background: #ffffff57;
    margin: 0px 10%

    h5{
        font-size: 19px;
        color: #000000c4;
    }

    p{
        color: #000000bf;
    }

`;

class Content extends Component {
    render() {
        
        return (
            <>
                <ContentDiv>
                    <div>
                        <Image />
                        <Wrds>
                            <h1>- это то, как люди сближаются!</h1>
                        </Wrds>
                    </div>
                    <h5>Цель нашего сайта - укреплять родственные связи наших пользователей.</h5>
                    <p>
                        Если у вас много родственников и вы задаетесь вопросом кто из них кто для вас?
                        То вы попали в сайт который поможет вам разобраться в родственных узах.
                        Работает все это очень просто. После регистрации на нашем сайте вы можете отправить
                        ссылку, на номер того человека с которым близко не знакомы, но знаете что он ваш дальний родственник.
                        А тот в свою очередь, заполнит анкету о себе подробно.
                    </p>
                </ContentDiv>
                <Sections/>
            </>
        );
    }
}

export default Content;
