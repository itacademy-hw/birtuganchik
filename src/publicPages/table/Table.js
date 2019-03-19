import React, { Component } from "react";
import styled from "styled-components";

let src = 'http://pikchyriki.net/avatar/krutye/100/21.jpg';

let Headers = styled.div`
  display: grid;
  grid-template-columns: 1% 7% 12% 15% 20% 15% 30%;
  padding: 11px 15px;
  font-size: 26px;
  text-align: center;
  cursor: pointer;
  color: white;
  box-shadow: 0px 5px 20px 2px #888888;
  -webkit-box-shadow: 0px 5px 20px 2px #888888;
  -moz-box-shadow: 0px 5px 20px 2px #888888;

  animation: mig 15s infinite alternate;
  @keyframes mig {
    0%    {background: green;}
    50%   {background: orange;}
    100%  {background: purple;}
  }
  
  span:nth-child(even),
  span:nth-child(odd) {
    border-left: 1px solid;
  }

  span:first-child,
  span:nth-child(2) {
    border: none;
  }

  span::selection {
    background: transparent;
  }
  span::-moz-selection {
    background: transparent;
  }
`;

let Body = styled.div`
  div:nth-child(odd) {
    background: #4444441f;
  }
`;

let RowElement = styled.div`
  display: grid;
  grid-template-columns: 1% 7% 12% 15% 20% 15% 30%;
  padding: 10px;
  font-size: 18px;
  font-weight: 400;
  text-align: center;

  span {
  }

  RowElement:nth-child(even) {
    background: #CCC;
  }

  RowElement:nth-child(odd) {
    background: #FFF;
  }

  span:hover {
  }

  img {
    height: 29px;
  }

  .email {
    cursor: pointer;
    text-decoration: underline;
  }

  .addr {
    text-align: right;
  }
`;

class Login extends Component {
  state = {
    search: '',
    headers: [
      {title: '', sortKey: 'checkbox', sortable: false},
      {title: 'Avatar', sortKey: 'avatar', sortable: false},
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
        relationship: 'Dad',
        name: 'CName',
        surname: 'BFamilyiev',
        email: 'cxample@mail.xxx',
        address: 'Cplanet Pluto, Boss town, Daddy street 01',
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
      ],
    sorted: false
  };

  sortTable = prop => {
    let { rows, sorted } = this.state;

    let sortedRows = rows.sort((a, b) => {
      if(a[prop].toLowerCase() < b[prop].toLowerCase()) {
        return -1;
      }
      if(a[prop] > b[prop]) {
        return 1;
      }
        return 0;
    });
      if(sorted) {
        sortedRows.reverse()
      this.setState({ rows: sortedRows, sorted: !sorted })
      }
    this.setState({ rows: sortedRows, sorted: !sorted })
  }

render() {

  let { search, headers, rows } = this.state;
  // let buttons = <div><button>asas</button><button>asas</button></div>
  return (
    <>
      {/*  <div>
        {rows.map(i => <div onClick={() => this.sortTable('name')}>{i.name}</div>)}
       </div>  */}
      <input type="text" name="search" onChange={e => this.setState({search: e.target.value})}/>

      <Headers className="grid-header">
        {headers.map((item, index) =>
          <span key={index} onClick={() => this.sortTable(item.sortKey)}> {item.title} </span>
        )}
      </Headers>

      <Body>
        {
          rows.filter(
            (row) => row.name.toLowerCase().includes(search) || row.surname.toLowerCase().includes(search))
            .map((item, index) =>
            <RowElement className="RowsElements" key={index}>
              <span className="grid-item">{item.checkbox} </span>
              <span className="grid-item">{item.avatar} </span>
              <span className="grid-item">{item.relationship} </span>
              <span className="grid-item">{item.name} </span>
              <span className="grid-item">{item.surname} </span>
              <span className="grid-item email">{item.email} </span>
              <span className="grid-item addr">{item.address} </span>
            </RowElement>
          )
        }
      </Body>
    </>
  );
 }
}

export default Login;