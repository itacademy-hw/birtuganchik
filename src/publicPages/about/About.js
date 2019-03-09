import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Content from './content/Content';

let AboutPage = styled.div`
    background: url(../img/fon.jpg)no-repeat ;
    background-size: cover;
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



