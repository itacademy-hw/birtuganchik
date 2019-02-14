import React, { Component } from "react";
import styled from 'styled-components';
import Button from "./Button"

let Head = styled.div`
    margin: 0 auto;
    width: 95%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    Button {
        margin-right: 5px;
    }
    .nav {
        width: 60%;
        display: flex;
        justify-content: flex-end;
    }
`
let Image = styled.div`
    height: 70px;
    width: 200px;
    background: url('./img/logo.png') no-repeat;
    background-size: 100%;
`

class Header extends Component {

    render() {
        return (
            <Head>
                <Image />
                <div className="nav">
                    <Button text="Login"></Button>
                    <Button text="Sign up"></Button>
                    <Button text="About"></Button>
                    <Button text="Tree"></Button>
                </div>
            </Head>
        );
    }
}

export default Header;