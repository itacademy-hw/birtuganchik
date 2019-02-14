import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import Popup from '../../../components/Popup';


let LogoDiv = styled.div`
    width: 680px;
    height: 280px;
    display: inline-block;

    h5{
        border-radius: 3px;
        width: 100%;
        height: 50px;
        display: inline-block;
        text-align: center;
        font-size: 23px;
        font-family: sans-serif;
        color:#000000b5;
    
        p{
        font-size: 17px;
        color: #000000ad;
        }

`
let Image = styled.div`
    height: 56px;
    background: url(../../../../img/logo.png)no-repeat;
    background-size: 100%;
    position: relative;
    display: inline-block;
    width: 150px;
    margin: 1px 8px -26px 35px;

`;
  let Wrds = styled.div `{ 
      
      display: inline-block;
  
       h1{
          color: blueviolet;
          font-family: cursive;

         }
  
  }`;

let ContentDiv = styled.div`
    width: 860px;
    height: 270px;
    padding: 10px;
    margin: 15px 0 0 270px;
    display: inline;
    text-align: center;
    
`;
let ContInner  = styled.div`
    margin: 65px 0 0 2px;
    width: 280px;
    height: 160px;
    border: 1px solid #00000029;
    display: inline-block;
    text-align: center;
    box-shadow: 0 2px 5px 0px #00000029;
    z-index: -1px;


    :hover{
      outline:1px solid blue;

      
      }
  }
`;
let Text = styled.p`
    border-radius: 3px;
    width: 100%;
    height: 50px;
    display: inline-block;
    text-align: center;
    font-size: 23px;
    font-family: sans-serif;
    color: black;`;


class Content extends Component {
  state = {
    showPopup: false
  } 

  render() {
    let { showPopup } = this.state;
    return (
      

      <ContentDiv>

         <LogoDiv>
                   
                   <Image/>
                       <Wrds><h2>- это то, как люди сближаются!</h2></Wrds>
                 
             
                 <h5>Цель нашего сайта - укреплять родственные связи наших пользователей.<br/>

                 <p>Если у вас много родственников и вы задаетесь вопросом кто из них кто для вас?
                    То вы попали в сайт который поможет вам разобраться в родственных узах.
                    Работает все это очень просто. После регистрации на нашем сайте вы можете отправить
                    ссылку, на номер того человека с которым близко не знакомы, но знаете что он ваш дальний родственник.
                    А тот в свою очередь, заполнит анкету о себе подробно.</p>
                 </h5>
             

         </LogoDiv>

        <ContInner>
          <Text>февраль 2019</Text>   
          <Button text="подробнее"  onclick={() => this.setState({showPopup: true})}/>
          <Popup title='Zagolovok' showPopup={showPopup} hidePopup={() => this.setState({showPopup: false})}/> 
        </ContInner>

        <ContInner>
          <Text>штаб квартира</Text>  
          <Button text="подробнее"  onclick={() => this.setState({showPopup: true})}/>
          <Popup title='Zagolovok' showPopup={showPopup} hidePopup={() => this.setState({showPopup: false})}/> 
        </ContInner>

        <ContInner>
          <Text>наша команда</Text>   
          <Button text="подробнее"  onclick={() => this.setState({showPopup: true})}/>
          <Popup title='Zagolovok' showPopup={showPopup} hidePopup={() => this.setState({showPopup: false})}/> 
        </ContInner>

      </ContentDiv>
    );
  }
}

export default Content;
