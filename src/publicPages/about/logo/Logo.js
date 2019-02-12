import React, { Component } from 'react';
import styled from 'styled-components';


let LogoDiv = styled.div`
    width: 680px;
    height: 280px;
    margin: 60px 0 0 370px;
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
    margin: 1px 8px -26px 67px;

`;
  let Wrds = styled.div `{ 
      
      display: inline-block;
  
       h1{
          color: blueviolet;
          font-family: cursive;

         }
  
  }`;


class Logo extends Component {
    
    render() {
        
        return (
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
        );
    }
}

export default Logo;