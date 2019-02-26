import React, { Component } from "react";
import styled from 'styled-components';

let Head = styled.div`
    text-align: justify;
    color: black;
    font-family:Exo2Light;
    background: #b5a9a9;
    padding: 40px 30px 40px 80px;
    font-size: 50px;   
`;

let Adr = styled.div`
    font-family: Lobster;
    height: 30px;
    weight:30px;
    font-size: 20px;
    background-size: 100%; 
    padding: 10px;
    border-style: groove;
    border-width: 2px;
`

class Contacts extends Component {

    render() {
        return (
            <div>
                <Head>ONE TWO GUN</Head> 
                <Adr><li>ADRESS:</li> </Adr>
                <h1>г. Бишкек, Жумабека 141 ориентир(эркиндик/жумабека)</h1>
                <Adr><li>Phone:</li></Adr>
                <h1> +996 (772) 000 562</h1>
                <Adr><li>Operation mode:</li> </Adr>
                <h1>Вт, Чт, Сб 19:00-21:00</h1>
                <Adr><li>E-mail:</li> </Adr>
                <h1>itacademy98@gmail.com: </h1>
            </div>

        )
    }
}

export default Contacts;