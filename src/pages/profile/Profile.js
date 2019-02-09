import React, { Component } from "react";
import styled from "styled-components";

let OneProfile = styled.div`

.navbar{
    width: auto;
    height: 36px;
    background-color: #24292e;
    padding: 12px 16px;
    display: flex;
}

.navbar p{
    height: 100%;
}

.container{
    width: 980px;
    height: 500px;
    margin:auto;
    margin-top: 24px;
    display: flex;
    // background-color: red;
}

.avatar{
    width: 280px;
    height: inherit;
    // background-color: blue;
}

.avatar .img{
    background: url('./img/avatar.jpg') no-repeat;
    width: 228px;
    height: 228px;
    background-size: 100%;
}

.avatar p{
    font-size: 20px;
}

.overview{
    width: 700px;
    height: inherit;
    // background-color: green;
}

.overview a{
    text-decoration: none;
    color: #e36209;
}

.overview h1{
    font-size: 30px;
    margin: auto;
    margin-top: 20px;
    text-align: center;
}

.overview p{
    margin-left: 30px;
}

`;

class Profile extends Component {
    render() {
        let {profile} = this.props;
        return (
            <OneProfile>
                <div className='navbar'>
                    <p></p>
                </div>
                <div className='container'>
                    <div className='avatar'>
                        <div className='img'>
                            <img/>
                        </div>
                        <p>{profile.nickname}</p>
                    </div>
                    <div className='overview'>
                        <a href='#'><h1>Overview</h1></a>
                        <p>Name: {profile.name}</p>
                        <p>Age: {profile.age}</p>
                        <p>Sex: {profile.sex}</p>
                        <p>Nationality: {profile.nationality}</p>
                        <p>Family: {profile.family}</p>
                        <p>Address: {profile.address}</p>
                    </div>
                </div>
            </OneProfile>
        );
    }
}

export default Profile;