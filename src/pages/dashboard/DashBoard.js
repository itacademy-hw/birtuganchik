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
    align-items: center;
    position: relative;
    width: 23%;
    height: 70px;
    box-shadow: ${shadow};
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
                { sex: 'man', city: 'batken', age: 22, name: 'Jaynagul', surname: 'Kudaybergenova' },
                { sex: 'woman', city: 'kyzyl-kiya', age: 29, name: 'Jaynagul', surname: 'Kudaybergenova' },
                { sex: 'woman', city: 'tokmok', age: 12, name: 'Jaynagul', surname: 'Kudaybergenova' },
                { sex: 'woman', city: 'bishkek', age: 7, name: 'Jaynagul', surname: 'Kudaybergenova' },
                { sex: 'woman', city: 'moscow', age: 7, name: 'Jaynagul', surname: 'Kudaybergenova' },
            ]
    };

    render() {
        let { myFamily } = this.state;
        let cities = [];
        let counts = [];
<<<<<<< HEAD
        myFamily.map((pers) => cities.push(pers.city))

        function countCities(arr) {
            arr.sort();

=======
        myFamily.map(pers => cities.push(pers.city));

        function countCities(arr) {
            arr.sort();
>>>>>>> a17de29c01a65ca87911a054c8c3d128daeffb4d
            let current = null;
            let cnt = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== current) {
                    if (cnt > 0) {
<<<<<<< HEAD
                        counts.push({[current]: cnt});
=======
                        counts.push(`${current}: ${cnt}`);
>>>>>>> a17de29c01a65ca87911a054c8c3d128daeffb4d
                    }
                    current = arr[i];
                    cnt = 1;
                } else {
                    cnt++;
                }
            }
            if (cnt > 0) {
<<<<<<< HEAD
                counts.push({[current]: cnt});
            }

        }
        countCities(cities);
        console.log(counts)
         

=======
                counts.push(`${current}: ${cnt}`);
            }
        }
        countCities(cities)
        console.log(counts)
>>>>>>> a17de29c01a65ca87911a054c8c3d128daeffb4d
        let totalMan = myFamily.filter(pers => pers.sex === 'man').length;
        let totalWoman = myFamily.filter(pers => pers.sex === 'woman').length;

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
                        <h6>Men</h6>
                        <div className="man">{totalMan}</div>
                    </div>
                    <div className="news">
                        <h6>Women</h6>
                        <div className="female">{totalWoman}</div>
                    </div>
                    <div className="news">
                        <h6>GrandMother</h6>
                    </div>
                    <div className="news">
                        <h6>GrandFather</h6>
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