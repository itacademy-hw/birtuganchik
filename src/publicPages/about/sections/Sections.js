import React, { Component } from 'react';
import Button from '../../../components/Button';
import Popup from '../../../components/Popup';
import './Sections.css';
import SocialN from '../socialNet/SocialN';
import styled from 'styled-components';

let Image = styled.div`
    margin-top:40px;
    padding: 65px;
    box-shadow: #00000078 0px 2px 5px 2px;
    background: url('${(props => props.bg)}');
    background-size: cover;    
`;
let ParentDiv = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: center;
    grid-template-rows: 25% 25%;
    grid-column-gap: 50px;
    grid-row-gap: 50px;
    padding: 30px 20%;
    
     div.inner{
        grid-template-columns: 50% 50%;
        grid-template-rows: 25%;
        grid-column-gap: 10px;
        padding-right: 20px;
        padding-top: 0px;
        padding-bottom: 50px;
        display: grid;
        border-radius: 6px;
        box-shadow: #0000007a 1px 1px 11px 3px;

         div.textSect{
            margin-top: 0px;
            padding-top: 20px;
            padding-left: 22px;
            padding-bottom: 95px;
            font-size: 13px;
            color: white;
        }
        div.socNet{
            padding: 1px;
            margin-top: 68%;
            width: 100%;
            margin-left: 10px;
        }
     }
`;

class Sections extends Component {
    state = {  }
    render() {
        
        return (
             <ParentDiv>
               <InnerDiv 
               bg="#e54c85"
                 htitle="Февраль 2019"
                 ptext="начало проекта "
                 image="https://cbkg.ru/uploads/11%20img_1742.jpg"
                 popupContent="начало проекта месяц февраль 2019год"/>
               <InnerDiv 
               bg="#1a70f9"
                 htitle="Наша комада"
                 ptext="над проектом работали студенты IT-Academy"
                 image="http://www.tinypulse.com/hubfs/The_Ultimate_List_of_Team-Building_Activities_CTA.png"
                 popupContent="
                    Islambek Toychuev,
                    Azamat Orozbayev,
                    Asan Ibragimov,
                    Adilet Kubatov,
                    Aigul Davlyatova,
                    Vano,
                    Abdurashitov Beknur,
                    Alucard Nosferatu,
                    Tamerlan Amankulov,
                    "/>
               <InnerDiv 
                 bg="#2b5a84"
                 htitle="Первый коммит"
                 ptext="############"
                image="http://coshoctonjfs.org/admin/data/img/uploads/tree-printforweb.jpg"
                popupContent="первый коммит 00/00/00"/>
               <InnerDiv 
                 bg="#1bb1e4"
                 htitle="###########"
                 ptext="##############"
                 image="https://www.stradavinonobile.it/wp-content/uploads/2017/09/Addiction-Support-Program-Family.jpg"
                 popupContent="##############"/>
             </ParentDiv>
            
        );
    }
}

class InnerDiv extends Component {

    state = {
        show: false,
    };
    render() {
        let { show } = this.state;
        let { htitle, ptext, image, bg, popupContent} = this.props;
        return (
            <>
              <div className='inner' style={{background: bg}}>
               <div className="textSect">
                  <h2>{htitle}</h2>
                  <p>{ptext}</p>
                  <Button
                   text='подробнее'
                   onclick={
                   () => 
                   this.setState({ show: true })}
                        />
                  <Popup
                        title={htitle}
                        hidePopup={() => this.setState({ show: false })}
                        showPopup={show}
                    >
                        {popupContent}
                    </Popup>
                </div>
                <Image bg={image}/>
                <div className="socNet">
                    <SocialN logobg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGV24HQ_qmiBxwDL-p-lpVYywhcTNJQjVzUDIFynpAo5HQC5Fq"/>
                    <SocialN logobg="https://pbs.twimg.com/profile_images/884348453744201728/Yn5UDIeY_400x400.jpg"/>
                    <SocialN logobg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sMOVNhdkPPtu7JQvYxFzgjAKS-yV5ulkeAIKGIMap6ksNd35"/>
                    <SocialN logobg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4O-LXUT9VTmrYPQnOyKkfFwU9oGgZw__UQ84UETUl4kVz83d"/>
                </div>
                 </div> 
             </>
        );
    }
}

export default Sections;

