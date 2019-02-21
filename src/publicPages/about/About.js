import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Content from './content/Content';

let AboutPage = styled.div`
    display: flex;
    flex-wrap: wrap;
    background: url(../img/fon.jpg)no-repeat center;
    background-size:100% 900px;
    height: 900px;

    
    
`;

export default class About extends Component {
  
  render() {
   
    return (
      <AboutPage>
        <Header/>
        <Content/>
      </AboutPage>
    );
  }
}



