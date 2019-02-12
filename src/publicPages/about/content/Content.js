import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../button/Button';



let ContentDiv = styled.div`
    width: 860px;
    height: 270px;
    padding: 10px;
    margin: 80px 0 0 270px;
    display: inline;
    text-align: center;
    
`;
let ContInner  = styled.div`
    margin: 0 0 0 2px;
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
    let {  } = this.props;
    return (
      <ContentDiv>
        <ContInner><Text>февраль 2019</Text>   <Button text="подробнее"  /> </ContInner>
        <ContInner><Text>штаб квартира</Text>  <Button  text="подробнее" /> </ContInner>
        <ContInner><Text>наша команда</Text>   <Button  text="подробнее" /> </ContInner>
      </ContentDiv>
    );
  }
}

export default Content;
