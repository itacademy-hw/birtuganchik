import React, { Component } from "react";
import styled from 'styled-components';

let shadow = '0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 1px 0 rgba(0,0,0,0.12), 0 1px 1px -3px rgba(0,0,0,0.2)';

let Cart = styled.div`
.title{
    width:100%;
    height:100px;
    display: flex;
    justify-content:center;
    box-shadow: ${shadow};
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
    max-width: 1080px;
    margin: 25px auto;
    display: flex;
    justify-content: space-between;
}

.news {
    display: flex;
    justify-content: center;
    align-items:center;
    position: relative;
    width: 23%;
    height: 70px;
    box-shadow: ${shadow};

}

.people {
    padding-right: 120px;
    display:flex;
}

.people1 {
    padding-right: 104px;
    display:flex;
}

.people2 {
    padding-right: 75px;
    display:flex;
}

.people3 {
    padding-right: 80px;
    display:flex;
}

.place {
    margin-left: 10px;
    width: 30px;
    border: solid 1px;
    text-align: center;
    border-radius: 5px;
}

img {
    margin: 10px;
    max-width:40px;
    height:40px;
}

.container {
     display: flex;
     margin: 0 auto;
     max-width: 1080px;
     justify-content: space-between;

     .box {
         width: 32%;
         box-shadow: ${shadow};
     }
}
`;

class DashBoard extends Component {
    state = {
        myFamily:
            [
                { sex: 'man', city: 'osh', age: 18, name: 'Daniil', surname: 'Kurishov' },
                { sex: 'man', city: 'bishkek', age: 27, name: 'Jaynagul', surname: 'Kudaybergenova' },
                { sex: 'man', city: 'bishkek', age: 22, name: 'Jaynagul', surname: 'Kudaybergenova' },
                { sex: 'woman', city: 'bishkek', age: 29, name: 'Jaynagul', surname: 'Kudaybergenova' },
                { sex: 'woman', city: 'bishkek', age: 12, name: 'Jaynagul', surname: 'Kudaybergenova' },
                { sex: 'GrandMother', city: 'bishkek', age: 7, name: 'Jaynagul', surname: 'Kudaybergenova' },
                { sex: 'GrandFather', city: 'bishkek', age: 7, name: 'Jaynagul', surname: 'Kudaybergenova' },
            ]
    };

    render() {
        let { myFamily } = this.state;
        let cities = [];
        let counts = [];
        myFamily.map(pers => cities.push(pers.city));

        function countCities(arr) {
            arr.sort();
            let current = null;
            let cnt = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== current) {
                    if (cnt > 0) {
                        counts.push(`${current}: ${cnt}`);
                    }
                    current = arr[i];
                    cnt = 1;
                } else {
                    cnt++;
                }
            }
            if (cnt > 0) {
                counts.push(`${current}: ${cnt}`);
            }
        }
        countCities(cities)
        console.log(counts)
        let totalMan = myFamily.filter(pers => pers.sex === 'man').length;
        let totalWoman = myFamily.filter(pers => pers.sex === 'woman').length;
        let totalGrandMother = myFamily.filter(pers => pers.sex === 'GrandMother').length;
        let totalGrandFather = myFamily.filter(pers => pers.sex === 'GrandFather').length;
            
        let time = new Date().getTime();
        let day = new Date(time).getDay().toString();
        let date = new Date(time).getDate().toString();
        let year = new Date(time).getFullYear().toString();

        return (

            <Cart>
                <div className="title">
                    <div className="project"> <h2>Dashboard</h2></div>
                    <div className="data"> <h3 className="time">{`${day} ${date} ${year}`}</h3> </div>
                </div>

                <div className="row">
                    <div className="news">                
                    <img src={"./image/man.png"}/>    
                       <div className="people">
                       <h6>Men:</h6>   
                       <div className="place"><h6 className="man">{totalMan}</h6></div> 
                       </div> 
                        
                    </div>
                    <div className="news">
                    <img src={"./image/woman.png"}/> 
                    <div className="people1">
                       <h6>Women:</h6>
                       <div className="place"><h6 className="female">{totalWoman}</h6></div>
                    </div>
                         
                    </div>
                    <div className="news">
                    <img src={"./image/grandma.png"}/>
                    <div className="people2">
                        <h6>GrandMother:</h6>
                        <div className="place"><h6 className="female">{totalGrandMother}</h6></div>
                    </div> 
                        
                    </div>
                    <div className="news">
                    <img  src={"./image/grandpa.png"}/>
                    <div className="people3">
                       <h6>GrandFather:</h6>
                       <div className="place"><h6 className="female">{totalGrandFather}</h6></div>
                    </div> 
                        
                    </div>
                </div>

                <div className="container">
                    <div className="box">
                        <div className="total">total: {myFamily.length}</div>
                        <div className="age">age </div>
                    </div>
                    <div className="box cities">{counts.map((item, index) => <p>{item}</p>)}</div>
                    <div className="box birthdays"></div>
                </div>
              
            </Cart>
        );
    }
}

export default DashBoard;