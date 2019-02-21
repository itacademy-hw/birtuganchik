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
  }

render() {
  //sort try
  function sortTable(n) {
    let headers, table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("Headers");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc"; 
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("RowElement")[n];
        y = rows[i + 1].getElementsByTagName("RowElement")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++; 
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  };
  //sort try

  let headers = ['☑', 'Avatar', 'Relationship', 'First Name', 'Last Name/Surname', 'E-mail', 'Address'];
  // let headers = ['▣', 'Фото', 'Р/Отношения', 'Имя', 'Фамилия', 'Э-почта', 'Адрес'];

  let rows = [
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
  ];
  // let rows = [
  //   ['', <img src={src} alt="avatar"/>, 'Bro', 'Donald', 'Trump', 'sexyOrangeBoy@gov.usa', 'U.S.A., D.C.Washington, Sexy str.69, apt.7'],
  //   ['', <img src={src} alt="avatar"/>, 'Bro', 'Donald', 'Trump', 'sexyOrangeBoy@gov.usa', 'U.S.A., D.C.Washington, Sexy str.69, apt.7'],
  //   ['', <img src={src} alt="avatar"/>, 'Bro', 'Donald', 'Trump', 'sexyOrangeBoy@gov.usa', 'U.S.A., D.C.Washington, Sexy str.69, apt.7'],
  //   ['', <img src={src} alt="avatar"/>, 'Bro', 'Donald', 'Trump', 'sexyOrangeBoy@gov.usa', 'U.S.A., D.C.Washington, Sexy str.69, apt.7'],
  //   ['', <img src={src} alt="avatar"/>, 'Bro', 'Donald', 'Trump', 'sexyOrangeBoy@gov.usa', 'U.S.A., D.C.Washington, Sexy str.69, apt.7'],
  //   ['', <img src={src} alt="avatar"/>, 'Bro', 'Donald', 'Trump', 'sexyOrangeBoy@gov.usa', 'U.S.A., D.C.Washington, Sexy str.69, apt.7'],
  //   ];

  let { search } = this.state;
  return (
    <>
      <input type="text" name="search" onChange={e => this.setState({search: e.target.value})}/>

      <Headers className="grid-header" onClick={sortTable(0)} id="">
        {headers.map(item => 
          <span onClick="sortTable(n)"> {item} </span>
        )}
      </Headers>
          
      <Body className="body">
        {rows.filter(i=> i.name.toLowerCase().includes(search) || i.surname.toLowerCase().includes(search)).map(item =>
          <RowElement>
            <span className="grid-item">{item.checkbox} </span>
            <span className="grid-item">{item.avatar} </span>
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