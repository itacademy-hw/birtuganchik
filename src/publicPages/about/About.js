import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Content from './content/Content';

let AboutPage = styled.div`
    display: flex;
    flex-wrap: wrap;

    .container {
        width: 80%;
        padding: 100px 0px 0px 100px;
    }
    
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



