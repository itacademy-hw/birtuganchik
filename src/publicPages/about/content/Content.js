import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import Popup from '../../../components/Popup'

let Image = styled.div`
    height: 56px;
    background: url(../img/logo.png)no-repeat;
    background-size: 100%;
    position: relative;
    display: inline-block;
    width: 150px;
    margin: 5px 0 -27px 0px;
}
`;

let Wrds = styled.div`{
    display: inline-block;
    top: 0;
    right: 0;
    font-size: 10px;
    padding: 4px;
    color: white;
    border: 1px solid;
    
    
    h1{
        color: blueviolet;
        font-family: cursive;
         }
       }
`;

let ContentDiv = styled.div`
    width: 860px;
    height: 270px;
    padding: 10px;
    margin: 10px 0 0 270px;
    display: inline;
    text-align: center;

    h5{
        font-size: 19px;
        font-family: cursive;
    }

    p{
        font-family: cursive; 
    }
    
`;
let ContInner  = styled.div`
    margin: 60px 0 0 2px;
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
  
  

  
  
  render() {
    let { clicked } = this.props;
    return (
      <ContentDiv>

               <div>
                    <Image/>
                    <Wrds>
                        <h1>- это то, как люди сближаются!</h1>
                    </Wrds>
               </div>
        
                    <h5>Цель нашего сайта - укреплять родственные связи наших пользователей.</h5>


                    <p>Если у вас много родственников и вы задаетесь вопросом кто из них кто для вас?
                       То вы попали в сайт который поможет вам разобраться в родственных узах.
                       Работает все это очень просто. После регистрации на нашем сайте вы можете отправить
                       ссылку, на номер того человека с которым близко не знакомы, но знаете что он ваш дальний родственник.
                       А тот в свою очередь, заполнит анкету о себе подробно.
                       </p>
        <ContInner>

              <Text>февраль 2019</Text>
              <Button text='подробнее' onClick={() => this.setState({clicked: true})}/>
                <Popup/>
              </ContInner>
              

        <ContInner>
            <Text>штаб квартира</Text> 
            <Button text='подробнее'/>
              <Popup/>
             </ContInner>

        <ContInner>
              <Text>наша команда</Text> 
              <Button text='подробнее'/>
                <Popup/>
              </ContInner>

      </ContentDiv>
    );
  }
}

export default Content;
