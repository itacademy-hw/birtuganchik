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
let Image = styled.div`

`

class Contacts extends Component {

    render() {
        return (
            <div>
                <Head> ONE TWO GUN</Head>
                <Adr><li>ADRESS:</li> </Adr>
                <Adr>г. Бишкек, Жумабека 141 ориентир(эркиндик/жумабека)</Adr>
                <Adr> <li>Phone:</li></Adr>
                <Adr> +996 (772) 000 562</Adr>
                <Adr><li>Operation mode:</li> </Adr>
                <Adr>Вт, Чт, Сб 19:00-21:00</Adr>
                <Adr><li>E-mail:</li> </Adr>
                <Adr>itacademy98@gmail.com: </Adr>
                <Image />
                <div className="okey"></div>
            </div>

        )
    }
}

export default Contacts;