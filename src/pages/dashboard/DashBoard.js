import React, { Component } from "react";
import styled from 'styled-components';



let Cart = styled.div`


.container{
    width:100%;
    height:100px;
    display: flex;
    justify-content:center;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 1px 0 rgba(0,0,0,0.12), 0 1px 1px -3px rgba(0,0,0,0.2);
}

h2{
    margin-top:10px;
}

h3{
    margin-top:10px;
}
h6{
    margin:0px;
}

.project {
    
}

.data{
    margin-left:1100px;
}

.row {
    width: 1020px;
    display: flex;
    justify-content: flex-end;
    
}
.news {
    display: inline-block;
    position: relative;
    width: 170px;
    height: 70px;
    margin: 25px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 1px 0 rgba(0,0,0,0.12), 0 1px 1px -3px rgba(0,0,0,0.2);
}

.container2 {
     position: relative;
     bottom: 143px;
     display:inline-block;
     width:450px;
     height:370px;
     margin:0px;
     
}

.total {
    margin:0px 0px 50px 160px; 
    width:260px;
    height:160px;
    background: purple;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 1px 0 rgba(0,0,0,0.12), 0 1px 1px -3px rgba(0,0,0,0.2);

}
.age {
    margin:0px 0px 0px 160px; 
    width:260px;
    height:160px;
    background: darkturquoise;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 1px 0 rgba(0,0,0,0.12), 0 1px 1px -3px rgba(0,0,0,0.2);

}

.container3{
    display: inline-block;
    width: 620px;
    height: 370px;
   
}

.sities{
    display:inline-block;
    margin:0px;
    width: 260px;
    height: 370px;
    margin-right:70px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 1px 0 rgba(0,0,0,0.12), 0 1px 1px -3px rgba(0,0,0,0.2);
}

.birthdays{
    display:inline-block;
    margin:0px;
    width: 260px;
    height: 370px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 1px 0 rgba(0,0,0,0.12), 0 1px 1px -3px rgba(0,0,0,0.2);
}


`;







class DashBoard extends Component {
    state = {  }
     
   

    render() {
        return (
           
          <Cart>
            <div className="container">
              <div className="project"> <h2>Dashboard</h2></div>
              <div className="data"> <h3>02 Feb 19</h3> </div> 
            </div>

            <div className="row">
              <div className="news"><h6>Men</h6></div>
              <div className="news"><h6>Women</h6></div>
              <div className="news"><h6>GrandMother</h6></div>
              <div className="news"><h6>GrandFather</h6></div>
            </div>

            <div className="container2">
                <div className="total">total</div>
                <div className="age">age</div>
            </div>

            <div className="container3">
                <div className="sities"> </div>
                <div className="birthdays"></div>
            </div>
                
            
             
          </Cart>
             
            
        );
    }
}

export default DashBoard;