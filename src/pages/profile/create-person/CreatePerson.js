import React, { Component } from "react";
import styled from 'styled-components';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import Popup from '../../../components/Popup';
import './CreatePerson.css';

let Create = styled.div`
height: 700px;
width: 100%;
border: 1px solid;  
background: url(https://bipbap.ru/wp-content/uploads/2017/04/3444df58d1da267e13bdf666a946a4f3ffa9b659.jpg) no-repeat;
background-size: cover;

.popup_contt {
    margin: -20px -81px 55px 100px;
       
       }

}
    
 span {
    width: 50px;
    height: 50px;
    border: 1px solid black;
    margin: 0 20px 0 10px;

 } 
 a {
    width: 50px;
    height: 50px;
    border: 1px solid;
    margin: -40px 0px 0px 89px;
 }
`
let CheckIn = styled.div`
    height: 50%;
    width: 50%;
    background: #ffffff52;
    margin: 80px 2px 0 340px;

    div{
    top: 60%;
    position: relative;
    left: 5%;
    }
    
    
`;



class CreatePerson extends Component {

    state = {
        show: false,
    };

    render() {
        let { show } = this.state;
        return (
            <Create>

                <Header />
                <CheckIn>


                    <h1>Личные данные в Биртуганчике</h1>
                    <div> 
                        <Button text='подробнее' onclick={() => this.setState({ show: true })} />
                    </div>
                   


                </CheckIn>
                <Popup
                    title=" Личные данные "
                    hidePopup={() => this.setState({ show: false })}
                    showPopup={show}
                >
                    <div className="popup_contt">
                         <div className="name">Ваше имя</div><input type="text" name="name"/>
                         <div className="name">Ваша фамилия </div><input type="text" name="name" /> 
                         <div className="name">Ваш номер</div><input type="text" name="name" />  
                         <div className="name">Ваш mail адрес</div>
                         <div className="name"><input type="text" name="name" /> </div>
                         <div className="textarea"><textarea rows="5" cols="20">заполните о себе краткую информацию</textarea></div>
                         <div><Button text="Далее"/></div>
                    </div>
                </Popup>
            </Create>

        );
    }
}

export default CreatePerson;