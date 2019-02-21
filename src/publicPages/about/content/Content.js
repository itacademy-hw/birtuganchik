import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import Popup from '../../../components/Popup';
import './Content.css';

let Image = styled.div`
    height: 56px;
    background: url(../img/logo.png)no-repeat;
    background-size: 100%;
    position: relative;
    display: inline-block;
    width: 150px;
    margin: 5px 0 -27px 0px;
`;

let Wrds = styled.div`
    display: inline-block;
    top: 0;
    right: 0;
    font-size: 10px;
    padding: 4px;
    color: white;

    h1{
        color: blueviolet;
        font-family: cursive;
    }
`;

let ContentDiv = styled.div`
    padding: 10px;
    display: inline;
    text-align: center;
    background: #ffffff57;
    margin: 0 10%;

    h5{
        font-size: 19px;
        font-family: cursive;
        color: #000000c4;
    }

    p{
        font-family: cursive;
        color: #000000bf;
    }

`;

let ContInner = styled.div`
    border: 1px solid #00000029;
    background: #e54c85;
    border-radius: 6px;
    display: inline-block;
    text-align: center;
    box-shadow: 0 2px 5px 0px #00000029;
    z-index: -1px;

    :hover{
        background: #1a70f9;
        transition: 0.6s;
    }
`;

let Boxes = styled.div`
    margin-top: 20px;
    display: grid;
    width: 100%;
    grid-template-columns: 45% 45%;
    justify-content: center;
    grid-gap: 10px;
`;

let Text = styled.p`
    border-radius: 3px;
    width: 100%;
    height: 50px;
    display: inline-block;
    text-align: center;
    font-size: 23px;
    font-family: sans-serif;
    color: black;
`;

class Content extends Component {
    render() {
        let first = <div className='frs'>
            <div className='innerF'>
                <div>
                    <div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div className='innerS'>
                <div></div>
            </div>
            <div className="socialNetworks"></div>
        </div>

        let second = <div className='skn'>
            <h2>asas</h2>
        </div>

        let third = <div className='thr'>
            <h2>asas</h2>
        </div>

        let fourth = <div className='frth'>
            <h2>asas</h2>
        </div>

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
                <Boxes className="boxes">
                    <Box id='1' content={first} popupContent={"февраль 2019"} title="Февраль 2019" />
                    <Box id='2' content={second} popupContent={'штаб квартира'} title="штаб квартира" />
                    <Box id='3' content={third} popupContent={'наша команда'} title="наша команда" />
                    <Box id='3' content={fourth} popupContent={'sdfg xdf'} title="sdfg sdfg" />
                </Boxes>

            </>
        );
    }
}

class Box extends Component {
    state = {
        show: false,
    };

    render() {
        let { show } = this.state;
        let { title, popupContent, content } = this.props;

        return (
            <ContInner>
                <Text>{title}</Text>
                <div>{content}</div>
                <Button text='подробнее' onclick={() => this.setState({ show: true })} />
                <Popup
                    title="Заголовок"
                    hidePopup={() => this.setState({ show: false })}
                    showPopup={show}
                >
                    {popupContent}
                </Popup>
            </ContInner>
        )
    }
}

export default Content;
