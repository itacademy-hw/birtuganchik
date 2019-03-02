import React, { Component } from 'react';
import Button from '../../../components/Button';
import Popup from '../../../components/Popup';
import './Sections.css';
import SocialN from '../socialNet/SocialN';
import styled from 'styled-components';

let Left = styled.div`
  width: 45%;
  height: 70%;
  display: inline-block;
  left: 32px;
  position: relative;
  bottom: 80px; `;

let Image = styled.div`
    top: 50px;
    width: 44%;
    height: 52%;
    display: inline-block;
    position: relative;
    left: 43px;
    bottom: 1px;
    box-shadow: #00000078 0px 2px 5px 2px;
    background: url('${(props => props.bg)}');
    background-size: cover;
`;

class Sections extends Component {
    state = {  }
    render() {
        return (
             <div className="parentDiv">
               <div id="top-left">
                <PadProps
                     title="Февраль 2019"
                     text="начало проекта февраль 2019 год"
                     image="https://thumbs.dreamstime.com/z/hands-holding-blue-earth-cloud-sky-elements-imag-background-image-furnished-nasa-61052787.jpg"
                     />
                 </div>
             <div id="top-right">
               <PadProps
                     title="Наша команда"
                     text="команда которая работала над проектом "
                     image="http://www.freedigitalphotos.net/images/img/homepage/87357.jpg"
                     />
                </div>
             <div id="bottom-left">
               <PadProps
                     title="Первый коммит"
                     text="##############"
                     image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_w-i0KQ7nYKsD1g_m5dR8JA4JXtPweqJaqRDk50IpvYjXETffxw"
                     />
                 </div>
             <div id="bottom-right">
               <PadProps
                     title="Еше что-то"
                     text="#####################"
                     image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-fjis6wKUwN0kiafEKH0ACzl7byfzCBPVa9svBwXHYytDtQ4IUA"
                     />
                 </div>
             </div>
        );
    }
}

class PadProps extends Component {

  state = {
    show: false,
};

    render(){
      let { show } = this.state;
      let {title, text, image,  popupContent, content } = this.props;
     
      return(
        <>
        <Left>
          <h2>{title}</h2>
            <div className="text">
             {text}
            </div>
            <div className="btn">
             <div>{content}</div>
                <Button text='подробнее' onclick={() => this.setState({ show: true })} />
                <Popup
                    title={title}
                    hidePopup={() => this.setState({ show: false })}
                    showPopup={show}
                >
                    {popupContent}
                </Popup>
            </div>
         </Left>
           <Image bg={image} className="innerDiv"/>
           <div className="socialNet">
           <SocialN/>
          </div>
       </>
      )
    }
  }

export default Sections;