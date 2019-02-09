import React, { Component } from "react";
import styled from 'styled-components';

let src = 'http://pikchyriki.net/avatar/krutye/100/21.jpg';

// let headers = styled.div {`
// `}

let styles = {
  head: {
    padding: 20,
    background: 'green',
    color: 'white',
    fontSize: 23,
    fontWeight: 600,
    // border: '3px solid black'
    
    },
  headColumns: {
    margin: '0 20px',
    // border: '3px solid black',
    },
  body: {
    // background: 'grey',
    fontSize: 18,
  },
  rowElement: {
    padding: 20,
    // textAlign: 'center',
    // justifyContent: 'center',
  },
  // avaIcon: {
  //   width: 15,
  //   height: 15,
  // }
  };

class Login extends Component {
  state = {

  }

render() {

  let headers = ['* ', 'Avatar ', 'Relationship ', 'First Name ', 'Last Name/Surname ', 'E-mail ', 'Address '];
  let rows = [
  {
    checkbox: <input type="checkbox"/>,
    avatar: <img src={src} alt="avatar"/>,
    relationship: 'Bro',
    name: 'Name',
    surname: 'Nameson',
    email: 'example@mail.xxx',
    address: 'planet Mars, Elon town, Musk street 69',
  },
  {
    checkbox: <input type="checkbox"/>,
    avatar: <img src={src} width="45" alt="alt"/>,
    relationship: 'Bro',
    name: 'Name',
    surname: 'Nameson',
    email: 'example@mail.xxx',
    address: 'planet Mars, Elon town, Musk street 69',
  },
  {
    checkbox: <input type="checkbox"/>,
    avatar: <img src={src} width="45" alt="alt"/>,
    relationship: 'Bro',
    name: 'Name',
    surname: 'Nameson',
    email: 'example@mail.xxx',
    address: 'planet Mars, Elon town, Musk street 69',
  },
  {
    checkbox: <input type="checkbox"/>,
    avatar: <img src={src} width="45" alt="alt"/>,
    relationship: 'Bro',
    name: 'Name',
    surname: 'Nameson',
    email: 'example@mail.xxx',
    address: 'planet Mars, Elon town, Musk street 69',
  },
  {
    checkbox: <input type="checkbox"/>,
    avatar: <img src={src} width="45" alt="alt"/>,
    relationship: 'Bro',
    name: 'Name',
    surname: 'Nameson',
    email: 'example@mail.xxx',
    address: 'planet Mars, Elon town, Musk street 69',
  }
  ];

  return (
    <>
      <div style={styles.head} className="headers">
        {headers.map(item => 
          <span style={styles.headColumns}>{item} </span>
        )}
      </div>

      <div style={styles.body} className="body">
        {rows.map(item =>
          <div>
            <span style={styles.rowElement}>{item.checkbox} </span>
            <span style={styles.rowElement}>{item.avatar} </span>
            <span style={styles.rowElement}>{item.relationship} </span>
            <span style={styles.rowElement}>{item.name} </span>
            <span style={styles.rowElement}>{item.surname} </span>
            <span style={styles.rowElement}>{item.email} </span>
            <span style={styles.rowElement}>{item.address} </span>
          </div>
        )}
      </div>
    </>
  );
 }
}

export default Login;