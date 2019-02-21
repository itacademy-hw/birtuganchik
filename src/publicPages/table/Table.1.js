import React, { Component } from "react";
import styled from "styled-components";

let src = 'http://pikchyriki.net/avatar/krutye/100/21.jpg';

let Headers = styled.div`
  // padding: 20px;
  // background: green;
  // color: white;
  // font-size: 23px;
  // font-weight: 600;

  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  background-color: green;
  padding: 10px;
  color: white;
  font-size: 26px;
  text-align: center;
  // font-weight: 600;
  // grid-column: 1/1;
  // grid-template-areas: '* Avatar Realationship First-Name Last-Name/Surname E-mail Address';

  span {
    // margin:  0 20px;
    // background: red;
  }
`;

let Body = styled.div`
  // background: grey;
  // font-size: 18px;
  // font-weight: 450;
  // display: grid;
  // grid-template-columns: auto auto auto auto auto auto auto;
  // padding: 10px;
  // font-size: 16px;
  // text-align: center;
  
`;

let RowElement = styled.div`
  padding: 10px;
  margin: 10px;
  // background: pink;
  font-size: 18px;
  font-weight: 450;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  padding: 10px;
  font-size: 16px;
  text-align: center;

  img {
    height: 20px;
  }
`;

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
    avatar: <img src={src} alt="alt"/>,
    relationship: 'Bro',
    name: 'Name',
    surname: 'Nameson',
    email: 'example@mail.xxx',
    address: 'planet Mars, Elon town, Musk street 69',
  },
  {
    checkbox: <input type="checkbox"/>,
    avatar: <img src={src} alt="alt"/>,
    relationship: 'Bro',
    name: 'Name',
    surname: 'Nameson',
    email: 'example@mail.xxx',
    address: 'planet Mars, Elon town, Musk street 69',
  },
  {
    checkbox: <input type="checkbox"/>,
    avatar: <img src={src} alt="alt"/>,
    relationship: 'Bro',
    name: 'Name',
    surname: 'Nameson',
    email: 'example@mail.xxx',
    address: 'planet Mars, Elon town, Musk street 69',
  },
  {
    checkbox: <input type="checkbox"/>,
    avatar: <img src={src} alt="alt"/>,
    relationship: 'Bro',
    name: 'Name',
    surname: 'Nameson',
    email: 'example@mail.xxx',
    address: 'planet Mars, Elon town, Musk street 69',
  }
  ];

  return (
    <>
      <Headers className="grid-header">
        {headers.map(item => 
          <span> {item} </span>
        )}
      </Headers>

      <Body className="body">
        {rows.map(item =>
          <RowElement>
            <span className="grid-item">{item.checkbox} </span>
            <span className="grid-item" className="avatarka">{item.avatar} </span>
            <span className="grid-item">{item.relationship} </span>
            <span className="grid-item">{item.name} </span>
            <span className="grid-item">{item.surname} </span>
            <span className="grid-item">{item.email} </span>
            <span className="grid-item">{item.address} </span>
          </RowElement>
        )}
      </Body>
    </>
  );
 }
}

export default Login;



/* ~~example of resizible data table~~
<table style="overflow: hidden;">
  <thead>
    <tr>
      <th id="col1" style="position: relative;">
        <input type="checkbox" id="checkBoxSelectAll">
          <div style="top: 0px; 
            right: 0px; 
            width: 5px; 
            position: absolute; 
            cursor: col-resize; 
            user-select: none; 
            height: 691px;">
          </div>
      </th>
      <th id="col2" style="position: relative; width: 162px;">
         Size
        <div style="top: 0px; 
          right: 0px; 
          width: 5px; 
          position: absolute; 
          cursor: col-resize; 
          user-select: none; 
          height: 691px;">
        </div>
      </th>
      <th id="col3" style="position: relative; width: 866px;">
         File
        <div style="top: 0px; 
          right: 0px; 
          width: 5px; 
          position: absolute; 
          cursor: col-resize; 
          user-select: none; 
          height: 691px;">
        </div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr data-id="aequilmno">
      <td><input type="checkbox" id="id"></td>
      <td>10MB</td>
      <td>C:\Users\BrainBell\Desktop\empty\abc.txt</td>
    </tr>
    <tr data-id="aequilmno1">
      <td><input type="checkbox" id="id"></td>
      <td>10MB</td>
      <td>C:\Users\BrainBell\Desktop\empty\abcd.txt</td>
    </tr>
    <tr data-id="aequilmno2">
      <td><input type="checkbox" id="id"></td>
      <td>25MB</td>
      <td>C:\Users\BrainBell\Desktop\empty\copy abc.txt</td>
    </tr>
 </tbody>
</table>
*/


/* ~~function of resizible data table~~
function resizableGrid(e){
  var t=e.getElementsByTagName("tr")[0],n=t?t.children:void 0;
  if(n){
    e.style.overflow="hidden";
    for(var i=e.offsetHeight,o=0;
      o<n.length;o++){
      var r=s(i);
      n[o].appendChild(r),n[o].style.position="relative",d(r)
    }
  }function d(e){
    var t,n,i,o,r;
    e.addEventListener("mousedown",function(e){
      n=e.target.parentElement,i=n.nextElementSibling,t=e.pageX;
      var d=function(e){
        if("border-box"==l(e,"box-sizing"))
        return 0;var t=l(e,"padding-left"),n=l(e,"padding-right");
        return parseInt(t)+parseInt(n)}
        (n);o=n.offsetWidth-d,i&&(r=i.offsetWidth-d)
      }),e.addEventListener("mouseover",function(e){
        e.target.style.borderRight="2px solid #0000ff"
      }),e.addEventListener("mouseout",function(e){
        e.target.style.borderRight=""
      }),document.addEventListener("mousemove",function(e){
        if(n){
          var d=e.pageX-t;i&&(i.style.width=r-d+"px"),
          n.style.width=o+d+"px"
        }}),document.addEventListener("mouseup",function(e){
          n=void 0,i=void 0,t=void 0,r=void 0,o=void 0
        })}function s(e){
          var t=document.createElement("div");
          return 
            t.style.top=0,
            t.style.right=0,
            t.style.width="5px",
            t.style.position="absolute",
            t.style.cursor="col-resize",
            t.style.userSelect="none",
            t.style.height=e+"px",
            t}function l(e,t){
          return window.getComputedStyle(e,null).getPropertyValue(t)
        }}
*/










/*  ~!~example of dynamic table~!~
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TableHeaders } from '../table/TableHeaders';

const is_mobile = window.innerWidth < 700;
let filter =
  'invert(100%) sepia(0%) saturate(0%) hue-rotate(100deg) brightness(100%) contrast(100%)';
const Row = styled.div`
  display: flex;
  justify-content: space-around;
  background: #eeeeee40;
  transition: 0.2s;
  color: #2c2c2c;
  
  .waiting {
      filter: ${filter};
    }
  }

  ${(props) =>
    props.hover
      ? `:hover {
    background-color: #1b247e;
    color: white;
  }`
      : ''}

  ${(props) =>
    props.stripped
      ? `:nth-child(odd) {
  background-color: #f8f8f8;
 }`
      : ''}
`;

const MobileRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Card = styled.div`
  background: #fff;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 3px;
`;

const Column = styled.div`
  font-size: 12px;
  width: ${(props) => Math.round(100 / props.width)}%;
  text-align: center;
  padding: 15px 8px;
  margin-bottom: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.pointer ? 'pointer' : '')};
`;

export class Table extends Component {
  state = {
    headers: this.props.headers,
    rows: this.props.rows,
    sortBy: '',
    asc: false,
  };

  onSort = (item) => {
    let { asc, rows } = this.state;

    let sortedRows = rows.sort((a, b) => {
      if (a[item] < b[item]) {
        return -1;
      }
      if (a[item] > b[item]) {
        return 1;
      }
      return 0;
    });

    this.setState({
      rows: sortedRows,
      sortBy: item,
      asc: !asc,
    });

    if (asc) {
      let reversed = rows.reverse();
      this.setState({
        rows: reversed,
        asc: !asc,
      });
    }
  };

  render() {
    let { headers, rows, asc, sortBy } = this.state;
    let { onRowCLick } = this.props;

    return (
      <>
        {!is_mobile ? (
          <>
            <TableHeaders
              headers={headers}
              onSort={(item) => this.onSort(item)}
              asc={asc}
              sortBy={sortBy}
              is_mobile={is_mobile}
            />
            {rows.map((row, i) => (
              <Row
                key={i}
                stripped={this.props.stripped}
                hover={this.state.hover}
              >
                {headers.map((header, i) => (
                  <Column
                    pointer={!!onRowCLick}
                    onClick={() => (onRowCLick ? onRowCLick(row) : null)}
                    width={headers.length}
                    key={i}
                  >
                    {row[header.sortKey]}
                  </Column>
                ))}
              </Row>
            ))}
          </>
        ) : (
          <>
            {rows.map((row) => (
              <Card>
                {headers.map((header, i) => (
                  <MobileRow key={i}>
                    <div style={{ flexBasis: '40%' }}> {header.title}:</div>
                    <div style={{ flexBasis: '60%', fontWeight: 600 }}>
                      {row[header.sortKey]}
                    </div>
                  </MobileRow>
                ))}
              </Card>
            ))}
          </>
        )}
      </>
    );
  }
}

Table.propTypes = {};
*/



/*
simple sample..
*/