import React, { Component } from "react";
import styled from "styled-components";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

let OneProfile = styled.div`

${OneProfile}{
    background: linear-gradient(to bottom, #8f8273, #e48863);
    height: 100vh;
    padding-top: 3%;
}



.main-container{
    width: 67%;
    height: 550px;
    margin: auto;
    display: flex;
}



.container1{
    width: 35%;
    height: inherit;
    background-color: #4f3333;
    text-align: center;
    color: #d1d1d1;
    border-right: 1px solid #0b021a;
}
.container2{
    width: 15%;
    height: inherit;
    background-color: #4f3333;
}
.container3{
    width: 50%;
    height: inherit;
    background-color: #ede6e3;
    border-left: 1px solid #0b021a;
}



.container1 .background{
    background: url('./img/Profile/background.jpg') no-repeat;
    width: 100%;
    height: 150px;
    background-size: 100%;
    margin: auto;
    border-bottom: 1px solid #0b021a;
}



.container1 .profile{
    height: 300px;
    border-bottom: 1px solid #0b021a;
    margin-top: -27%;
    // background-color: red;
}
.profile .avatar{
    background: url('./img/Profile/avatar.jpg') no-repeat;
    width: 150px;
    height: 150px;
    background-size: 100%;
    margin: auto;
    border-radius: 50%;
    border: 5px solid #d1d1d1;
}
.profile .nickname{
    margin-top: 3%;
    font-weight: bolder;
    font-size: 20px;
}
.profile button{
    width: 33%;
    height: 30px;
    display: block;
    margin: auto;
    margin-top: -1%;
    border-radius: 10%;
}
.profile .message{
    background: #d1d1d1;
    color: #4f3333;
}
.profile .contact{
    margin-top: 2%;
    background: #bd744f;
    color: #d1d1d1;
}



.container1 .socials{
    height: 180px;
    text-align: center;
    margin: auto;
    background-color: red;
}
.socials ul{
    width: 30%;
    list-style: none;
}
.socials ul li{
    height: 30px;
    margin-top: 5%;
    border-bottom: 1px solid #0b021a;
    cursor: pointer;
}
.socials ul .pinterest{
    border: none;
}



.container2 .pages{

}
.pages button{
    width: 100%;
    height: 63px;
    display: block;
    background: #4f3333;
    color: #d1d1d1;
    border: none;
    border-top: 1px solid #0b021a;
}
.pages .tree{
    border-bottom: 1px solid #0b021a;
}



.container3 .overview{

}
.overview h1{
    color: #4f3333;
    font-weight: lighter;
    text-align: center;
    margin-top: 2.5%;
}
.overview ul{
    color: #4f3333;
    margin-left: 1%;
    margin-top: 7%;
}
.overview p{
    color: black;
    font-size: 20px;
    margin-top: 1%;
}

`;

class Profile extends Component {
    render() {
        let {profile} = this.props;
        library.add(faIgloo);
        return (
            <OneProfile>

                <div className='main-container'>

                    <div className='container1'>
                        <div className='background'></div>
                        <div className='profile'>
                            <div className='avatar'></div>
                            <p className='nickname'>{profile.nickname}</p>
                            <a><button className='message'>Message</button></a>
                            <a><button className='contact'>Contact</button></a>
                        </div>
                        <div className='socials'>
                            <ul>
                                <a><li className='facebook'>Facebook</li></a>
                                <a><li className='twiiter'>Twitter</li></a>
                                <a><li className='google'>Google+</li></a>
                                <a><li className='pinterest'>Pinterest</li></a>                    
                            </ul>
                        </div>
                    </div>
                    


                    <div className='container2'>
                        <div className='pages'>
                            <a><button className='login'>Login</button></a>
                            <a><button className='signup'>Sign up</button></a>
                            <a><button className='profile'>Profile</button></a>
                            <a><button className='about'>About</button></a>
                            <a><button className='tree'>Tree</button></a>
                        </div>
                    </div>



                    <div className='container3'>
                        <div className='overview'>
                            <h1>Overview</h1>
                            <ul>
                                <li>Name:</li>
                                <p>{profile.name}</p>
                                <li>Surname:</li>
                                <p>{profile.surname}</p>
                                <li>Nationality:</li>
                                <p>{profile.nationality}</p>
                                <li>Sex:</li>
                                <p>{profile.sex}</p>
                                <li>Age:</li>
                                <p>{profile.age}</p>
                                <li>Address:</li>
                                <p>{profile.address}</p>
                            </ul>
                        </div>
                    </div>

                </div>

                    {/* <div className='overview' id='link-overview'>
                        <a href='#link-overview'><h1>Overview</h1></a>
                        <p>Name: {profile.name}</p>
                        <p>Surname: {profile.surname}</p>
                        <p>Nationality: {profile.nationality}</p>
                        <p>Sex: {profile.sex}</p>
                        <p>Age: {profile.age}</p>
                        <p>Address: {profile.address}</p>
                    </div> */}
                
            </OneProfile>
        );
    }
}

export default Profile;