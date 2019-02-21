import React, { Component } from "react";
import styled from "styled-components";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from "@fortawesome/free-solid-svg-icons";
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

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
    background-color: #4c3e3d;
    text-align: center;
    color: #d1d1d1;
    border-right: 1px solid #453737;
}
.container2{
    width: 15%;
    height: inherit;
    background-color: #4c3e3d;
}
.container3{
    width: 50%;
    height: inherit;
    background-color: #ede6e3;
    border-left: 1px solid #453737;
}



.container1 .background{
    background: url('./img/Profile/background.jpg') no-repeat;
    width: 100%;
    height: 150px;
    background-size: 100%;
    margin: auto;
    border-bottom: 1px solid #453737;
}



.container1 .profile{
    height: 300px;
    margin-top: -27%;
    border-bottom: 1px solid #453737;
}
.profile .avatar{
    background: url('./img/Profile/avatar.jpg') no-repeat;
    width: 150px;
    height: 150px;
    background-size: 100%;
    margin: auto;
    border-radius: 50%;
    border: 5px solid #d4c3ae;
}
.profile .nickname{
    margin-top: 3%;
    font-weight: bolder;
    font-size: 20px;
    color: #ddcfbd;
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
    background-color: #d1c0aa;
    color: #493a39;
}
.profile .contact{
    margin-top: 2%;
    background-color: #9b6450;
    color: #ddcfbd;
}



.container1 .socials{
    text-align: center;
    margin: auto;
}
.socials button{
    margin: auto;
    margin-top: 1%;
    text-align: center;
    width: 33%;
    height: 40px;
    display: block;
    background-color: #4c3e3d;
    color: #ddcfbd;
    border: none;
    border-bottom: 2px solid #453737;
}
.socials .pinterest{
    border: none;
}



.container2 .pages{

}
.pages button{
    width: 100%;
    height: 63px;
    display: block;
    background-color: #4c3e3d;
    color: #ddcfbd;
    border: none;
    border-top: 1px solid #453737;
}
.pages .tree{
    border-bottom: 1px solid #453737;
}



.container3 .overview{
    // padding-top: 10%;
}
.overview h1{
    color: #493a39;
    font-weight: lighter;
    text-align: center;
    margin-top: 3%;
    margin-bottom: 7%;
}
.overview p{
    text-align: center;
    color: black;
}
.overview h3{
    color: #493a39;
    margin-top: -3%;
    font-size: 20px;
    text-align: center;
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
                            <FontAwesomeIcon icon='igloo'></FontAwesomeIcon>
                            {/* <FontAwesomeIcon icon='facebook-f'></FontAwesomeIcon> */}
                            <a><button className='facebook'>Facebook</button></a>
                            <a><button className='twiiter'>Twitter</button></a>
                            <a><button className='google+'>Google+</button></a>
                            <a><button className='pinterest'>Pinterest</button></a>
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
                                <p>Name:</p>
                                <h3>{profile.name}</h3>
                                <p>Surname:</p>
                                <h3>{profile.surname}</h3>
                                <p>Nationality:</p>
                                <h3>{profile.nationality}</h3>
                                <p>Sex:</p>
                                <h3>{profile.sex}</h3>
                                <p>Age:</p>
                                <h3>{profile.age}</h3>
                                <p>Address:</p>
                                <h3>{profile.address}</h3>
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