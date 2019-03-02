import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Content from './content/Content';

let AboutPage = styled.div`
    background: url(../img/fon.jpg)no-repeat center;
    background-size: cover;
    box-shadow: #00000040 1px 1px 3px 1px;
    
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



