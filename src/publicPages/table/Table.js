import React, { Component } from "react";
import styled from "styled-components";

let src = 'http://pikchyriki.net/avatar/krutye/100/21.jpg';

let Headers = styled.div`
  display: grid;
  grid-template-columns: 1% 10% 11% 13% 20% 15% 30%;
  padding: 10px;
  color: white;
  font-size: 26px;
  text-align: center;
  background-color: green;
  cursor: pointer;

  span {

  }
`;

let Body = styled.div`

`;

let RowElement = styled.div`

  display: grid;
  grid-template-columns: 1% 10% 9% 15% 20% 15% 30%;
  padding: 10px;
  font-size: 18px;
  font-weight: 450;
  text-align: center;

  img {
    height: 30px;
  }
`;

class Login extends Component {
  state = {
    search: '',
    headers: [
      {title: '☑', sortKey: 'checkbox', sortable: false},
      {title: 'Avatar', sortKey: 'avatar', sortable: true},
      {title: 'Relationship', sortKey: 'relationship', sortable: true},
      {title: 'First Name', sortKey: 'name', sortable: true},
      {title: 'Last Name/Surname', sortKey: 'surname', sortable: true},
      {title: 'E-mail', sortKey: 'email', sortable: true},
      {title: 'Address', sortKey: 'address', sortable: true}
    ],
    rows: [
      {
        checkbox: <input type="checkbox"/>,
        avatar: <img src={src} alt="avatar"/>,
        relationship: 'Bro',
        name: 'Name',
        surname: 'Familyiev',
        email: 'example@mail.xxx',
        address: 'planet Mars, Elon town, Musk street 69',
      },
      {
        checkbox: <input type="checkbox"/>,
        avatar: <img src={src} alt="alt"/>,
        relationship: 'Sis',
        name: 'AName',
        surname: 'DFamilyiev',
        email: 'axample@mail.xxx',
        address: 'Aplanet Earth, Buddha town, Zen street 689',
      },
      {
        checkbox: <input type="checkbox"/>,
        avatar: <img src={src} alt="alt"/>,
        relationship: 'Mom',
        name: 'BName',
        surname: 'CFamilyiev',
        email: 'bxample@mail.xxx',
        address: 'Bplanet Juno, July town, June street 2',
      },
      {
        checkbox: <input type="checkbox"/>,
        avatar: <img src={src} alt="alt"/>,
        relationship: 'Dad',
        name: 'CName',
        surname: 'BFamilyiev',
        email: 'cxample@mail.xxx',
        address: 'Cplanet Pluto, Boss town, Daddy street 01',
      },
      {
        checkbox: <input type="checkbox"/>,
        avatar: <img src={src} alt="alt"/>,
        relationship: 'Wife',
        name: 'DName',
        surname: 'AFamilyiev',
        email: 'dxample@mail.xxx',
        address: 'Dplanet Venus, Eve town, Fem street 1',
      }
      ]
  }

  sortTable = (header) => {
    if (!header.sortable) return;

    let {rows} = this.state;
    console.log('Массив который нужно сортировать', rows);
    console.log('По', header.sortKey);
  };

render() {

  let { search, headers, rows } = this.state;
  return (
    <>
      <input type="text" name="search" onChange={e => this.setState({search: e.target.value})}/>

      <Headers className="grid-header">
        {headers.map((item, index) =>
          <span key={index} onClick={() => this.sortTable(item)}> {item.title} </span>
        )}
      </Headers>

      <Body className="body">
        {
          rows.filter(
            (row) => row.name.toLowerCase().includes(search) || row.surname.toLowerCase().includes(search))
            .map((item, index) =>
            <RowElement key={index}>
              <span className="grid-item">{item.checkbox} </span>
              <span className="grid-item">{item.avatar} </span>
              <span className="grid-item">{item.relationship} </span>
              <span className="grid-item">{item.name} </span>
              <span className="grid-item">{item.surname} </span>
              <span className="grid-item">{item.email} </span>
              <span className="grid-item">{item.address} </span>
            </RowElement>
          )
        }
      </Body>
    </>
  );
 }
}

export default Login;